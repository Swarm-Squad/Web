'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function SwarmSquad() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Add overflow hidden to body when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="h-screen bg-black text-white overflow-hidden relative flex flex-col">
      {/* Animated background elements */}
      <div
        className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`,
        }}
      />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-screen opacity-30 pointer-events-none">
        <svg viewBox="0 0 500 500" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="noise" x="0%" y="0%" width="100%" height="100%">
              <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" seed="1" />
              <feDisplacementMap in="SourceGraphic" scale="50" />
            </filter>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.3)" />
            </linearGradient>
            <radialGradient id="gradient2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
            </radialGradient>
          </defs>

          {/* Main orbit circle */}
          <circle
            cx="350"
            cy="250"
            r="150"
            fill="none"
            stroke="white"
            strokeWidth="1"
            filter="url(#noise)"
          />

          {/* Secondary orbit */}
          {/* <ellipse cx="250" cy="200" rx="200" ry="120" fill="none" stroke="white" strokeWidth="0.5" opacity="0.7" transform="rotate(15, 250, 200)" /> */}

          {/* Geometric elements */}
          <rect
            x="363"
            y="100"
            width="50"
            height="50"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            transform="rotate(45, 375, 175)"
            opacity="0.8"
          />

          {/* Connection lines */}
          <path
            d="M200,100 Q350,50 400,200 T600,300"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />
          <path
            d="M100,200 Q250,150 300,300 T500,400"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
          />

          {/* Dynamic wave path */}
          <path
            d="M50,250 C100,200 150,300 200,250 S300,200 350,250 S450,300 500,250"
            fill="none"
            stroke="white"
            strokeWidth="0.7"
            opacity="0.5"
          />

          {/* Center focal point */}
          <circle cx="250" cy="250" r="5" fill="white" filter="url(#glow)" />

          {/* Particle points */}
          <g className="particles">
            <circle cx="150" cy="150" r="2" fill="white" />
            <circle cx="300" cy="120" r="1.5" fill="white" />
            <circle cx="400" cy="200" r="1" fill="white" />
            <circle cx="200" cy="350" r="1.2" fill="white" />
            <circle cx="350" cy="300" r="1.8" fill="white" />
            <circle cx="420" cy="120" r="1.3" fill="white" />
          </g>

          {/* Abstract shape with filter */}
          <path
            d="M300,300 Q350,250 400,300 T450,350 T400,400 T300,300"
            fill="none"
            stroke="white"
            strokeWidth="0.3"
            opacity="0.6"
          />

          {/* Noise-filtered elements */}
          <g filter="url(#noise)">
            <rect
              x="300"
              y="100"
              width="150"
              height="150"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
            />
            <circle
              cx="200"
              cy="350"
              r="50"
              fill="none"
              stroke="white"
              strokeWidth="0.3"
              opacity="0.5"
            />
          </g>

          {/* Central network */}
          <g opacity="0.7">
            <line x1="250" y1="250" x2="300" y2="200" stroke="white" strokeWidth="0.2" />
            <line x1="250" y1="250" x2="350" y2="250" stroke="white" strokeWidth="0.2" />
            <line x1="250" y1="250" x2="200" y2="300" stroke="white" strokeWidth="0.2" />
            <line x1="250" y1="250" x2="300" y2="300" stroke="white" strokeWidth="0.2" />
            <line x1="250" y1="250" x2="200" y2="200" stroke="white" strokeWidth="0.2" />
          </g>
        </svg>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Navigation */}
      <header className="relative z-50 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-bold tracking-wider">Swarm Squad</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
            <Link
                href="https://github.com/swarm-squad"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors flex items-center gap-2 justify-center"
              >
                <span className="text-center">Github</span>
              </Link>
              <Link
                href="https://www.youtube.com/@sang-buster"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors flex items-center gap-2 justify-center"
              >
                <span className="text-center">Youtube</span>
              </Link>
              <Link
                href="https://docs.swarm-squad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors flex items-center gap-2 justify-center"
              >
                <span className="text-center">Docs</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white z-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation - Fixed overlay to prevent overlap */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-black flex items-center justify-center">
            <div className="container mx-auto px-6 flex flex-col space-y-8">
              <Link
                href="https://github.com/swarm-squad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors py-4 block w-full text-center text-2xl font-semibold"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                Github
              </Link>
              <Link
                href="https://docs.swarm-squad.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors py-4 block w-full text-center text-2xl font-semibold"
                onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              >
                Docs
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main content - Only visible when mobile menu is closed */}
      <main
        className={`relative z-10 container mx-auto px-6 flex flex-col items-center justify-center flex-1 py-8 ${isMobileMenuOpen ? 'md:block hidden' : 'block'}`}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Glitch effect for title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 relative">
            <span
              className="absolute top-0 left-0 w-full h-full text-white opacity-80"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
                transform: 'translate(-7px, -7px)',
              }}
            >
              SWARM SQUAD
            </span>
            <span
              className="absolute top-0 left-0 w-full h-full text-white opacity-80"
              style={{
                clipPath: 'polygon(0 45%, 100% 45%, 100% 100%, 0 100%)',
                transform: 'translate(7px, 7px)',
              }}
            >
              SWARM SQUAD
            </span>
            <span className="relative">SWARM SQUAD</span>
          </h1>

          <p className="text-xl md:text-2xl font-light tracking-wide text-gray-300/90 mb-16 max-w-3xl mx-auto">
            A simulation framework for multi-agent systems.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
            <Link
              href="https://github.com/swarm-squad"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-2 md:py-3 bg-white text-black font-bold hover:bg-black hover:text-white transition-colors border border-white"
            >
              EXPLORE GITHUB
            </Link>
            <Link
              href="https://docs.swarm-squad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-8 py-2 md:py-3 bg-transparent text-white font-bold hover:bg-white hover:text-black transition-colors border border-white"
            >
              READ DOCUMENTATION
            </Link>
          </div>
        </div>
      </main>

      {/* Only show footer when mobile menu is closed */}
      {!isMobileMenuOpen && (
        <>
          {/* Decorative line */}
          <div className="container mx-auto px-6 relative z-10 mt-auto">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
          </div>

          {/* Footer */}
          <footer className="relative z-10 container mx-auto px-6 py-4 text-center text-white/50 text-sm">
            <p>Swarm Squad © {new Date().getFullYear()} by Sang-Buster</p>
            <p>An Open Source Multi-Agent Simulation Framework</p>
          </footer>
        </>
      )}
    </div>
  );
}
