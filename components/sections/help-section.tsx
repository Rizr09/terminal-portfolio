import { HelpCircle, Terminal } from "lucide-react"

export function HelpSection() {
  const commands = [
    { name: "about", alias: "me", description: "Display information about me" },
    { name: "experience", alias: "work", description: "View my work experience" },
    { name: "skills", alias: "tech", description: "View my skills and technologies" },
    { name: "projects", alias: "portfolio", description: "View my portfolio projects" },
    { name: "publication", alias: "papers", description: "View my publications" },
    { name: "music", alias: "tunes", description: "View my music taste and stats" },
    { name: "contact", alias: "email", description: "Get in touch with me" },
    { name: "help", alias: "?", description: "Display this help message" },
    { name: "clear", alias: "cls", description: "Clear the terminal screen" },
    { name: "Up/Down", alias: "-", description: "Navigate command history" },
    { name: "Tab", alias: "-", description: "Command auto-completion" },
  ]

  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-xl font-bold text-[#bb9af7] flex items-center">
        <HelpCircle className="mr-2 h-5 w-5 text-[#7aa2f7]" />
        Help
      </h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-[#7dcfff] flex items-center mb-2">
            <Terminal className="mr-2 h-4 w-4" />
            Available Commands
          </h3>
          <div className="bg-[#24283b] border border-[#3d59a1] rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#3d59a1]">
                  <th className="px-4 py-2 text-left text-[#7aa2f7]">Command</th>
                  <th className="px-4 py-2 text-left text-[#7aa2f7]">Alias</th>
                  <th className="px-4 py-2 text-left text-[#7aa2f7] hidden sm:table-cell">Description</th>
                </tr>
              </thead>
              <tbody>
                {commands.map((command, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-[#1a1b26]" : ""}>
                    <td className="px-4 py-2 text-[#9ece6a]">{command.name}</td>
                    <td className="px-4 py-2 text-[#7aa2f7]">{command.alias || "-"}</td>
                    <td className="px-4 py-2 text-[#a9b1d6] hidden sm:table-cell">{command.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="text-[#a9b1d6] mt-4">
        <p>This terminal portfolio is built with Next.js and React.</p>
      </div>

      <div className="border-t border-[#3d59a1] pt-2 text-[#7aa2f7] text-sm">
        <p>Type any command to get started or use the keyboard shortcuts for quick navigation.</p>
      </div>
    </div>
  )
}

