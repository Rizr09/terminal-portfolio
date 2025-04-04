import { Terminal } from "lucide-react"

export function WelcomeMessage() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <div className="flex items-center space-x-2">
        <Terminal className="h-5 w-5 text-[#7aa2f7]" />
        <h1 className="text-xl font-bold text-[#bb9af7]">Welcome to Rizky's Portfolio</h1>
      </div>

      <div className="text-[#a9b1d6] space-y-2">
        <p>
          Hello! I'm Rizky Ramadhan Sudjarmono, a Computer Science graduate with a passion for data science, financial
          engineering, and automation.
        </p>

        <p>Type one of the following commands to get started:</p>

        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>
            <span className="text-[#7aa2f7]">about</span> - Learn more about me
          </li>
          <li>
            <span className="text-[#7aa2f7]">experience</span> - View my work experience
          </li>
          <li>
            <span className="text-[#7aa2f7]">skills</span> - View my skills and technologies
          </li>
          <li>
            <span className="text-[#7aa2f7]">projects</span> - View my projects
          </li>
          <li>
            <span className="text-[#7aa2f7]">publication</span> - View my publications
          </li>
          <li>
            <span className="text-[#7aa2f7]">music</span> - View my music taste
          </li>
          <li>
            <span className="text-[#7aa2f7]">contact</span> - Get in touch
          </li>
          <li>
            <span className="text-[#7aa2f7]">help</span> - Show all available commands
          </li>
        </ul>
      </div>

      <div className="border-t border-[#3d59a1] pt-2 text-[#7aa2f7] text-sm">
        <p>
          Type <span className="text-[#bb9af7]">help</span> for more information.
        </p>
      </div>
    </div>
  )
}

