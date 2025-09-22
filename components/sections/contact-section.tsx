"use client"

import { Mail, Github, Globe, Linkedin } from "lucide-react"

export function ContactSection() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-xl font-bold text-[#bb9af7] flex items-center">
        <Mail className="mr-2 h-5 w-5 text-[#7aa2f7]" />
        Contact Me
      </h2>

      <div className="space-y-6">
        <p className="text-[#a9b1d6]">
          I'm always open to new opportunities and collaborations. Feel free to reach out through any of the channels below!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-[#7dcfff]">Connect with me</h3>
              <div className="space-y-3">
                <a
                  href="mailto:business.rizr09@gmail.com"
                  className="flex items-center text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  <span>business.rizr09 at gmail dot com</span>
                </a>
                {/* <a
                  href="https://rizr09.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors"
                >
                  <Globe className="mr-3 h-5 w-5" />
                  <span>rizr09.me</span>
                </a> */}
                <a
                  href="https://www.linkedin.com/in/rizr09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors"
                >
                  <Linkedin className="mr-3 h-5 w-5" />
                  <span>linkedin.com/in/rizr09</span>
                </a>
                <a
                  href="https://github.com/rizr09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#a9b1d6] hover:text-[#7aa2f7] transition-colors"
                >
                  <Github className="mr-3 h-5 w-5" />
                  <span>github.com/rizr09</span>
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="text-[#7dcfff]">Location</h3>
              <p className="text-[#a9b1d6]">Balikpapan, Indonesia</p>
              <p className="text-[#7aa2f7] text-sm">Available for remote collaboration worldwide</p>
            </div>
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

