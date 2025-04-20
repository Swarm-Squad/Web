"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function SwarmSquad() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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
          </defs>
          <circle cx="350" cy="250" r="150" fill="none" stroke="white" strokeWidth="1" filter="url(#noise)" />
          <path d="M200,100 Q350,50 400,200 T600,300" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M100,200 Q250,150 300,300 T500,400" fill="none" stroke="white" strokeWidth="0.5" />
          <g filter="url(#noise)">
            <rect x="300" y="100" width="150" height="150" fill="none" stroke="white" strokeWidth="0.5" />
          </g>
        </svg>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      {/* Navigation */}
      <header className="relative z-10 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-xl font-bold tracking-wider">Swarm Squad</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="https://github.com/swarm-squad" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors flex items-center gap-2 justify-center">
                <span className="text-center">Github</span>
              </Link>
              <Link href="https://docs.swarm-squad.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors flex items-center gap-2 justify-center">
                <span className="text-center">Docs</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-black border-b border-white/10 z-20">
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              <Link href="https://github.com/swarm-squad" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors py-2 block w-full text-center">
                Github
              </Link>
              <Link href="https://docs.swarm-squad.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors py-2 block w-full text-center"
              >
                Docs
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-6 flex flex-col items-center justify-center flex-1 py-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Glitch effect for title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-12 relative">
            <span
              className="absolute top-0 left-0 w-full h-full text-white opacity-80"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)", transform: "translate(-7px, -7px)" }}
            >
              SWARM SQUAD
            </span>
            <span
              className="absolute top-0 left-0 w-full h-full text-white opacity-80"
              style={{ clipPath: "polygon(0 45%, 100% 45%, 100% 100%, 0 100%)", transform: "translate(7px, 7px)" }}
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

      {/* Decorative line */}
      <div className="container mx-auto px-6 relative z-10 mt-auto">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 container mx-auto px-6 py-4 text-center text-white/50 text-sm">
        <p>Swarm Squad © {new Date().getFullYear()} by Sang-Buster</p>
        <p>An Open Source Multi-Agent Simulation Framework</p>
      </footer>
    </div>
  )
}
