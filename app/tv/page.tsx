'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

// Base images without cache-busting
const baseImages = [
  '/tv/slide1.jpg',
  '/tv/slide2.jpg',
  '/tv/slide3.jpg',
  // '/tv/slide4.jpg',
];

const SLIDE_DURATION = 10000; // 10 seconds in milliseconds

export default function TVPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0); // Restored progress state
  // const [imageKey, setImageKey] = useState(0); // Remove key for forcing re-render
  const [cacheBuster, setCacheBuster] = useState<number | null>(null);
  const router = useRouter();

  // Get current image with cache-busting if needed
  const getCurrentImage = () => {
    const baseImage = baseImages[currentImageIndex];
    return cacheBuster ? `${baseImage}?t=${cacheBuster}` : baseImage;
  };

  const clearCache = () => {
    setCacheBuster(Date.now());
    // setImageKey(prev => prev + 1); // Remove key update
  };

  // Debug current image
  useEffect(() => {
    console.log('Current image:', getCurrentImage());
  }, [currentImageIndex, cacheBuster]);

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
      console.log('Switching to next slide (via setTimeout)');
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % baseImages.length;
        console.log('New index:', nextIndex);
        return nextIndex;
      });
      setCacheBuster(null); // Reset cache buster after slide change
    }, SLIDE_DURATION);

    // Cleanup function to clear the timeout if the component unmounts
    // or if currentImageIndex changes before the timeout completes.
    return () => clearTimeout(timer);
  }, [currentImageIndex]); // Re-run effect when currentImageIndex changes

  // Handle progress bar update
  useEffect(() => {
    setProgress(0); // Reset progress when image changes
    const startTime = Date.now();

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newProgress = Math.min(100, (elapsed / SLIDE_DURATION) * 100);
      setProgress(newProgress);

      // Stop interval when progress reaches 100% (or slightly over due to timing)
      if (elapsed >= SLIDE_DURATION) {
        clearInterval(interval);
      }
    };

    // Start the interval
    const interval = setInterval(updateProgress, 50); // Update progress more frequently

    // Cleanup: clear interval when component unmounts or image changes
    return () => clearInterval(interval);
  }, [currentImageIndex]); // Re-run effect when currentImageIndex changes

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
        {baseImages.map((imgSrc, index) => (
          <div
            key={imgSrc} // Use image source as key for better stability if URLs are unique
            className={`absolute inset-0 transition-transform duration-700 ease-in-out ${ // Transition classes
              index === currentImageIndex
                ? 'transform translate-x-0 z-10' // Current slide
                : index < currentImageIndex
                ? 'transform translate-x-full z-0' // Previous slides (off-screen right)
                : 'transform -translate-x-full z-0' // Next slides (off-screen left)
            }`}
          >
            <Image
              src={cacheBuster ? `${imgSrc}?t=${cacheBuster}` : imgSrc}
              alt={`Slide ${index + 1}`}
              fill
              className="object-contain"
              priority={index === currentImageIndex} // Prioritize current image
              quality={100}
              sizes="100vw"
              onError={() => console.error('Error loading image:', imgSrc)}
              onLoad={() => console.log('Image loaded:', imgSrc)}
            />
          </div>
        ))}
        {/* Conditionally render buttons only when not in fullscreen */}
        {!isFullscreen && (
          <div className="absolute bottom-4 right-4 flex gap-2 z-20"> {/* Ensure buttons are above images */}
            <button
              onClick={clearCache}
              className="bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black/70 transition-colors"
            >
              Clear Cache
            </button>
            <button
              onClick={toggleFullscreen}
              className="bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black/70 transition-colors"
            >
              {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
            </button>
          </div>
        )}
        
        {/* Progress Indicator Restored */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 z-20">
          <div className="flex gap-1">
            {baseImages.map((_, index) => (
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
              className="h-full bg-white transition-all duration-100 ease-linear" // Added ease-linear for smoother progress
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </main>
  );
} 