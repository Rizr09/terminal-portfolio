"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Send, Github, Globe, Linkedin, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (err) {
      setError("There was an error sending your message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-xl font-bold text-[#bb9af7] flex items-center">
        <Mail className="mr-2 h-5 w-5 text-[#7aa2f7]" />
        Contact Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <p className="text-[#a9b1d6]">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-[#24283b] border-[#3d59a1] text-[#a9b1d6]"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#24283b] border-[#3d59a1] text-[#a9b1d6]"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="bg-[#24283b] border-[#3d59a1] text-[#a9b1d6] min-h-[120px]"
                />
              </div>
              {error && <p className="text-[#f7768e] text-sm">{error}</p>}
              <Button type="submit" disabled={isSubmitting} className="bg-[#7aa2f7] hover:bg-[#3d59a1] text-[#1a1b26]">
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#1a1b26]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          ) : (
            <div className="bg-[#1a1b26] border border-[#9ece6a] rounded-lg p-4 text-[#9ece6a]">
              <p className="font-medium">Thank you for your message!</p>
              <p className="text-sm mt-1">I'll get back to you as soon as possible.</p>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-[#7dcfff]">Connect with me</h3>
            <div className="space-y-2">
              <a
                href="mailto:rizky2004cool@gmail.com"
                className="flex items-center text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                <span>rizky2004cool@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/rizr09/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors"
              >
                <Linkedin className="mr-2 h-4 w-4" />
                <span>linkedin.com/in/rizr09</span>
              </a>
              <a
                href="https://github.com/rizr09"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors"
              >
                <Github className="mr-2 h-4 w-4" />
                <span>github.com/rizr09</span>
              </a>
              <a
                href="https://rizr09.me"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors"
              >
                <Globe className="mr-2 h-4 w-4" />
                <span>rizr09.me</span>
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-[#7dcfff]">Location</h3>
            <p className="text-[#a9b1d6]">Jakarta, Indonesia</p>
            <p className="text-[#7aa2f7] text-sm">Available for remote work worldwide</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3d59a1] pt-2 text-[#7aa2f7] text-sm">
        <p>
          Type <span className="text-[#bb9af7]">projects</span> to see my work or{" "}
          <span className="text-[#bb9af7]">resume</span> to learn more about me.
        </p>
      </div>
    </div>
  )
}

