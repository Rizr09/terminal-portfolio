import type React from "react"

interface CommandHistoryProps {
  commands: Array<{
    input: string
    output: React.ReactNode
  }>
}

export default function CommandHistory({ commands }: CommandHistoryProps) {
  return (
    <div className="space-y-1 overflow-x-hidden font-fira-code">
      {commands.map((command, index) => (
        <div key={index} className={command.output ? "space-y-2 mb-3" : "mb-1"}>
          <div className="flex items-center flex-wrap">
            <div className="flex items-center mr-2">
              <span className="text-[#bb9af7] font-bold">λ</span>
              <span className="text-[#7aa2f7] mx-1 font-bold">guest</span>
              <span className="text-[#565f89]">in</span>
              <span className="text-[#7dcfff] mx-1 font-bold">portfolio</span>
              <span className="text-[#565f89] mx-0.5">:</span>
              <span className="text-[#9ece6a] font-bold">~</span>
              <span className="text-[#c0caf5] ml-1.5 mr-0.5">$</span>
              <span className="text-[#7aa2f7] font-bold">❯</span>
            </div>
            <span className="text-[#c0caf5] break-all">{command.input}</span>
          </div>
          {command.output && <div className="break-words">{command.output}</div>}
        </div>
      ))}
    </div>
  )
}

