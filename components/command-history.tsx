import type React from "react"
import { ArrowRight } from "lucide-react"

interface CommandHistoryProps {
  commands: Array<{
    input: string
    output: React.ReactNode
  }>
}

export default function CommandHistory({ commands }: CommandHistoryProps) {
  return (
    <div className="space-y-1">
      {commands.map((command, index) => (
        <div key={index} className={command.output ? "space-y-2 mb-3" : "mb-1"}>
          <div className="flex items-center">
            <div className="flex items-center mr-2">
              <span className="text-[#7dcfff]">guest</span>
              <span className="text-[#a9b1d6]">@</span>
              <span className="text-[#bb9af7]">portfolio</span>
              <span className="text-[#a9b1d6]">:</span>
              <span className="text-[#7aa2f7]">~</span>
              <span className="text-[#a9b1d6]">$</span>
              <ArrowRight className="h-4 w-4 ml-2 text-[#9ece6a]" />
            </div>
            <span className="text-[#a9b1d6]">{command.input}</span>
          </div>
          {command.output && <div>{command.output}</div>}
        </div>
      ))}
    </div>
  )
}

