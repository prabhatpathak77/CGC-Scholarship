"use client";

import React, { useEffect, useRef } from 'react';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Attempt to force autoplay on mount
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay was prevented by the browser:", error);
      });
    }
  }, []);

  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background ambient effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        {/* Header / Title */}
        <div className="mb-8 text-center animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-light text-white tracking-tight mb-3">
            Video Presentation
          </h1>
          <p className="text-gray-400 text-sm md:text-base font-light">
            Please make sure your device is not on silent to hear the audio.
          </p>
        </div>

        {/* Video Container */}
        <div className="w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.1)] border border-white/10 bg-zinc-900 animate-fade-in-up" style={{ animationDelay: '150ms' }}>
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
            controls
            preload="auto"
          >
            {/* The user should place their video in the public folder as video.mp4 */}
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        {/* Footer info */}
        <div className="mt-8 text-center opacity-50 text-xs text-white/50 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <p>Scan to view</p>
        </div>
      </div>
    </main>
  );
}
