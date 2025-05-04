'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Placeholder images - replace these with your actual images
const images = [
  '/tv/slide1.jpg',
  '/tv/slide2.jpg',
  // '/tv/slide3.jpg',
  // '/tv/slide4.jpg',
];

const SLIDE_DURATION = 20000; // 20 seconds in milliseconds

export default function TVPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        const element = document.documentElement;
        if (element.requestFullscreen) {
          await element.requestFullscreen();
        } else if ((element as any).webkitRequestFullscreen) {
          await (element as any).webkitRequestFullscreen();
        } else if ((element as any).msRequestFullscreen) {
          await (element as any).msRequestFullscreen();
        }
        setIsFullscreen(true);
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        } else if ((document as any).webkitExitFullscreen) {
          await (document as any).webkitExitFullscreen();
        } else if ((document as any).msExitFullscreen) {
          await (document as any).msExitFullscreen();
        }
        setIsFullscreen(false);
      }
    } catch (error) {
      console.error('Error toggling fullscreen:', error);
    }
  };

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(
        document.fullscreenElement !== null ||
        (document as any).webkitFullscreenElement !== null ||
        (document as any).msFullscreenElement !== null
      );
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Handle slideshow and progress
  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + SLIDE_DURATION;

    const updateProgress = () => {
      const now = Date.now();
      const newProgress = Math.min(100, ((now - startTime) / SLIDE_DURATION) * 100);
      setProgress(newProgress);

      if (now >= endTime) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setProgress(0);
      }
    };

    const interval = setInterval(updateProgress, 100); // Update every 100ms for smooth animation

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  // Prevent navigation and handle fullscreen
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <main className="fixed inset-0 w-screen h-screen bg-black">
      <div className="relative w-full h-full">
        <Image
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
          fill
          className="object-contain"
          priority
          quality={100}
          sizes="100vw"
        />
        <button
          onClick={toggleFullscreen}
          className="absolute bottom-4 right-4 bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black/70 transition-colors"
        >
          {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </button>
        
        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2">
          <div className="flex gap-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50'
                }`}
              />
            ))}
          </div>
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </main>
  );
} 