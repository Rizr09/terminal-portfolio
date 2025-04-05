"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"

interface CommandLineProps {
  onExecute: (command: string) => void
}

export default function CommandLine({ onExecute }: CommandLineProps) {
  const [input, setInput] = useState("")
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onExecute(input)
      setCommandHistory((prev) => [input, ...prev])
      setHistoryIndex(-1)
    } else {
      onExecute("")
    }
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setInput("")
      }
    } else if (e.key === "Tab") {
      e.preventDefault()
      // Simple tab completion
      const commands = [
        "about",
        "me",
        "experience",
        "work",
        "skills",
        "tech",
        "projects",
        "portfolio",
        "publication",
        "papers",
        "music",
        "tunes",
        "contact",
        "email",
        "help",
        "?",
        "clear",
        "cls",
        "home",
        "welcome",
        "resume",
      ]
      const match = commands.find((cmd) => cmd.startsWith(input.toLowerCase()))
      if (match) {
        setInput(match)
      }
    }
  }

  // Focus input on mount and when clicking anywhere in the terminal
  useEffect(() => {
    inputRef.current?.focus()

    const handleWindowClick = () => {
      inputRef.current?.focus()
    }

    window.addEventListener("click", handleWindowClick)
    return () => window.removeEventListener("click", handleWindowClick)
  }, [])

  return (
    <form onSubmit={handleSubmit} className="flex items-center flex-wrap mt-2">
      <div className="flex items-center mr-2 font-fira-code">
        <span className="text-[#bb9af7] font-bold">λ</span>
        <span className="text-[#7aa2f7] mx-1 font-bold">guest</span>
        <span className="text-[#565f89]">in</span>
        <span className="text-[#7dcfff] mx-1 font-bold">portfolio</span>
        <span className="text-[#565f89] mx-0.5">:</span>
        <span className="text-[#9ece6a] font-bold">~</span>
        <span className="text-[#c0caf5] ml-1.5 mr-0.5">$</span>
        <span className="text-[#7aa2f7] font-bold">❯</span>
      </div>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent outline-none border-none text-[#c0caf5] min-w-0 font-fira-code"
        aria-label="Command input"
        autoComplete="off"
        spellCheck="false"
      />
    </form>
  )
}

