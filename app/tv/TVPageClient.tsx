'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const SLIDE_DURATION = 30000; // 30 seconds
const ANIMATION_DURATION = 4000; // 4 seconds

interface TVPageClientProps {
  baseImages: string[];
}

export default function TVPageClient({ baseImages }: TVPageClientProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cacheBuster, setCacheBuster] = useState<number | null>(null);

  const getCurrentImage = (imgSrc: string) => {
    return cacheBuster ? `${imgSrc}?t=${cacheBuster}` : imgSrc;
  };

  const clearCache = () => {
    setCacheBuster(Date.now());
  };

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

  // Handle slideshow with setTimeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreviousImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % baseImages.length);
      setCacheBuster(null);

      // Clear previous index after fade is complete
      const fadeTimer = setTimeout(() => {
        setPreviousImageIndex(null);
      }, ANIMATION_DURATION);

      return () => clearTimeout(fadeTimer);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [currentImageIndex, baseImages.length]);

  // Handle progress bar update
  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newProgress = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
      setProgress(newProgress);

      if (elapsed >= SLIDE_DURATION) {
        clearInterval(interval);
      }
    };

    const interval = setInterval(updateProgress, 50);
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
      <div className="relative w-full h-full overflow-hidden">
        {/* Map over images for transitions */}
        {baseImages.map((imgSrc, index) => {
          const isActive = index === currentImageIndex;
          const isExiting = index === previousImageIndex;

          return (
            <div
              key={imgSrc}
              className={`absolute inset-0 transition-opacity ease-in-out`}
              style={{
                opacity: isActive ? 1 : 0,
                transitionDuration: `${ANIMATION_DURATION}ms`,
                zIndex: isActive ? 10 : isExiting ? 5 : 0,
              }}
            >
              <div
                className={`w-full h-full relative ${isActive || isExiting ? 'ken-burns' : ''
                  }`}
                style={{
                  animationDuration: `${SLIDE_DURATION + ANIMATION_DURATION}ms`
                }}
              >
                <Image
                  src={getCurrentImage(imgSrc)}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-contain"
                  priority={isActive}
                  quality={100}
                  sizes="100vw"
                  onError={() => console.error('Error loading image:', imgSrc)}
                />
              </div>
            </div>
          );
        })}

        <style jsx>{`
          .ken-burns {
            animation: kenburns linear forwards;
          }
          @keyframes kenburns {
            0% {
              transform: scale(1) translate(0, 0);
            }
            100% {
              transform: scale(1.02) translate(0, 0);
            }
          }
        `}</style>

        {/* Buttons */}
        {!isFullscreen && (
          <div className="absolute bottom-4 right-4 flex gap-2 z-20">
            <button
              onClick={clearCache}
              className="bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black/70 transition-colors"
            >
              Refresh
            </button>
            <button
              onClick={toggleFullscreen}
              className="bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black/70 transition-colors"
            >
              {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            </button>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 z-20">
          <div className="flex gap-1">
            {baseImages.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                  ? 'bg-white scale-125'
                  : 'bg-white/50'
                  }`}
              />
            ))}
          </div>
          <div className="w-32 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
