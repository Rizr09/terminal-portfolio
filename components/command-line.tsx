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
        "goto ",
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
    <form onSubmit={handleSubmit} className="flex items-center mt-2">
      <div className="flex items-center mr-2">
        <span className="text-[#7dcfff]">guest</span>
        <span className="text-[#a9b1d6]">@</span>
        <span className="text-[#bb9af7]">portfolio</span>
        <span className="text-[#a9b1d6]">:</span>
        <span className="text-[#7aa2f7]">~</span>
        <span className="text-[#a9b1d6]">$</span>
        <ArrowRight className="h-4 w-4 ml-2 text-[#9ece6a]" />
      </div>
      <input
        ref={inputRef}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent outline-none border-none text-[#a9b1d6]"
        aria-label="Command input"
        autoComplete="off"
        spellCheck="false"
      />
    </form>
  )
}

