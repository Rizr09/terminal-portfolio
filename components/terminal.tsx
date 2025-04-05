"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import CommandLine from "./command-line"
import CommandHistory from "./command-history"
import { AboutSection } from "./sections/about-section"
import { ProjectsSection } from "./sections/projects-section"
import { ContactSection } from "./sections/contact-section"
import { HelpSection } from "./sections/help-section"
import { WelcomeMessage } from "./welcome-message"
import { PublicationSection } from "./sections/publication-section"
import { SkillsSection } from "./sections/skills-section"
import { ExperienceSection } from "./sections/experience-section"
import { MusicSection } from "./sections/music-section"
import { LoadingBar } from "./loading-bar"
import { Clock } from "lucide-react"

type Command = {
  input: string
  output: React.ReactNode
}

export default function Terminal() {
  const [commands, setCommands] = useState<Command[]>([])
  const [currentSection, setCurrentSection] = useState<string | null>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [time, setTime] = useState(new Date())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Show welcome message after loading
  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Set welcome message in the next tick to avoid React state update during render
    setTimeout(() => {
      setCommands([{ input: "", output: <WelcomeMessage /> }])
    }, 0)
  }

  const executeCommand = (input: string) => {
    const trimmedInput = input.trim().toLowerCase()
    let output: React.ReactNode = null

    // Process commands
    if (trimmedInput === "clear" || trimmedInput === "cls") {
      setCommands([])
      return
    } else if (trimmedInput === "about" || trimmedInput === "me") {
      output = <AboutSection />
      setCurrentSection("about")
    } else if (trimmedInput === "projects" || trimmedInput === "portfolio") {
      output = <ProjectsSection />
      setCurrentSection("projects")
    } else if (trimmedInput === "contact" || trimmedInput === "email") {
      output = <ContactSection />
      setCurrentSection("contact")
    } else if (trimmedInput === "help" || trimmedInput === "?") {
      output = <HelpSection />
      setCurrentSection("help")
    } else if (trimmedInput === "home" || trimmedInput === "welcome") {
      output = <WelcomeMessage />
      setCurrentSection(null)
    } else if (trimmedInput === "publication" || trimmedInput === "papers") {
      output = <PublicationSection />
      setCurrentSection("publication")
    } else if (trimmedInput === "skills" || trimmedInput === "tech") {
      output = <SkillsSection />
      setCurrentSection("skills")
    } else if (trimmedInput === "experience" || trimmedInput === "work") {
      output = <ExperienceSection />
      setCurrentSection("experience")
    } else if (trimmedInput === "music" || trimmedInput === "tunes") {
      output = <MusicSection />
      setCurrentSection("music")
    } else if (trimmedInput === "resume") {
      window.open("https://drive.google.com/file/d/1fP5ZLdd3qM-7q6_0M8BPs01H9TWENhkm/", "_blank")
      output = <p className="text-[#9ece6a]">Opening resume in a new tab...</p>
    } else if (trimmedInput === "") {
      // Just add a new empty command with no output for Unix-like behavior
      setCommands((prev) => [...prev, { input, output: null }])
      return
    } else {
      output = (
        <p className="text-[#f7768e]">
          Command not found: {input}. Type <span className="text-[#7aa2f7]">help</span> for available commands.
        </p>
      )
    }

    setCommands((prev) => [...prev, { input, output }])
  }

  // Auto-scroll to bottom when commands change
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [commands])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Alt + key shortcuts
      if (e.altKey) {
        switch (e.key) {
          case "a":
            executeCommand("about")
            break
          case "p":
            executeCommand("projects")
            break
          case "b":
            executeCommand("publication")
            break
          case "c":
            executeCommand("contact")
            break
          case "h":
            executeCommand("help")
            break
          case "w":
            executeCommand("welcome")
            break
          case "s":
            executeCommand("skills")
            break
          case "x":
            executeCommand("experience")
            break
          case "m":
            executeCommand("music")
            break
          default:
            break
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Initialize welcome message after initial render
  useEffect(() => {
    if (!isLoading) {
      setCommands([{ input: "", output: <WelcomeMessage /> }])
    }
  }, [isLoading])

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col">
      <div className="bg-[#1a1b26] rounded-t-lg p-2 border-b border-[#3d59a1] flex items-center">
        <div className="flex-1 text-[#a9b1d6] text-sm font-mono flex items-center">
          <span className="bg-[#7aa2f7] text-[#1a1b26] px-2 py-1 rounded mr-2 font-bold">
            {currentSection ? currentSection : "home"}
          </span>
          <span className="text-[#7dcfff]">~</span>
          <span className="text-[#a9b1d6]">/portfolio $</span>
        </div>
        <div className="flex items-center space-x-3 text-[#a9b1d6] text-xs">
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1 text-[#7dcfff]" />
            <span>{time.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      <div
        ref={terminalRef}
        className={cn(
          "bg-[#1a1b26] p-4 rounded-b-lg h-[70vh] overflow-y-auto",
          "font-mono text-[#a9b1d6] text-sm leading-relaxed",
          "scrollbar-thin scrollbar-thumb-[#3d59a1] scrollbar-track-[#1a1b26]",
        )}
      >
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <div className="w-full max-w-md">
              <LoadingBar onComplete={handleLoadingComplete} />
            </div>
          </div>
        ) : (
          <>
            <CommandHistory commands={commands} />
            <CommandLine onExecute={executeCommand} />
          </>
        )}
      </div>

      <div className="mt-4 flex flex-col items-center space-y-4">
        <div className="text-[#7aa2f7] text-xs text-center">
          <p>
            Tip: Use keyboard shortcuts (Alt + key): [A]bout, e[X]perience, [S]kills, [P]rojects, pu[B]lication,
            [C]ontact, [M]usic, [H]elp, [W]elcome
          </p>
        </div>
      </div>
    </div>
  )
}

