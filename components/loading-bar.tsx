"use client"

import { useState, useEffect } from "react"

interface LoadingBarProps {
  onComplete: () => void
}

export function LoadingBar({ onComplete }: LoadingBarProps) {
  const [progress, setProgress] = useState(0)

  // Effect to handle progress updates
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 1
        return newProgress <= 100 ? newProgress : 100
      })
    }, 20) // Adjust speed here (lower = faster)

    return () => clearInterval(interval)
  }, [])

  // Separate effect to handle completion
  useEffect(() => {
    if (progress === 100) {
      // Add a small delay before calling onComplete to ensure smooth animation
      const timeout = setTimeout(() => {
        onComplete()
      }, 300)

      return () => clearTimeout(timeout)
    }
  }, [progress, onComplete])

  return (
    <div className="space-y-2 animate-fadeIn">
      <div className="flex items-center justify-between text-[#a9b1d6] text-sm">
        <span>Initializing terminal...</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full bg-[#24283b] rounded-full h-2.5 overflow-hidden">
        <div
          className="bg-[#7aa2f7] h-2.5 rounded-full transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="text-[#7aa2f7] text-xs">
        {progress < 30 && "Loading system files..."}
        {progress >= 30 && progress < 60 && "Configuring environment..."}
        {progress >= 60 && progress < 90 && "Preparing terminal interface..."}
        {progress >= 90 && "Ready to launch..."}
      </div>
    </div>
  )
}

