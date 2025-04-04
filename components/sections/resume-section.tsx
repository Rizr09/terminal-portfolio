import { FileText, ExternalLink, Linkedin, Award } from "lucide-react"

export function ResumeSection() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-xl font-bold text-[#bb9af7] flex items-center">
        <FileText className="mr-2 h-5 w-5 text-[#7aa2f7]" />
        Resume
      </h2>

      <div className="space-y-4 text-[#a9b1d6]">
        <div className="space-y-2">
          <h3 className="text-[#7dcfff] text-lg">Rizky Ramadhan Sudjarmono</h3>
          <div className="flex flex-wrap gap-2">
            <span className="text-[#7aa2f7]">rizr09</span>
            <span className="text-[#a9b1d6]">|</span>
            <span className="text-[#7aa2f7]">rizky2004cool@gmail.com</span>
            <span className="text-[#a9b1d6]">|</span>
            <a
              href="https://rizr09.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7aa2f7] hover:underline"
            >
              rizr09.me
            </a>
            <span className="text-[#a9b1d6]">|</span>
            <a
              href="https://www.linkedin.com/in/rizr09/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7aa2f7] hover:underline flex items-center"
            >
              <Linkedin className="h-3.5 w-3.5 mr-1" />
              linkedin.com/in/rizr09
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-[#7dcfff]">Summary</h3>
          <p>
            Fresh graduate of Computer Science from Padjadjaran University with a passion for data science, financial
            engineering, and automation. Experienced in Python, SQL, and Tableau, with strong skills in project
            management and teaching. Eager to apply my knowledge in real-world projects, make a positive impact, and
            grow as an IT professional.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-[#7dcfff]">Education</h3>
          <div className="bg-[#24283b] p-3 rounded-lg border border-[#3d59a1]">
            <div className="flex items-center">
              <div className="font-medium">Bachelor of Computer Science at Padjadjaran University (GPA: 3.93/4.0)</div>
              <div className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#1a1b26] border border-[#9ece6a] text-[#9ece6a] shadow-sm">
                <Award className="mr-1 h-3 w-3" />
                Cum Laude
              </div>
            </div>
            <div className="text-sm text-[#7aa2f7]">2021 - 2025</div>
            <div className="mt-1">
              <span className="text-[#bb9af7]">Thesis:</span> Improving Stock Price Forecasts Through Deep Learning with
              Financial Sentiment Analysis and Technical Indicators
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-[#7dcfff]">Publication</h3>
          <div className="bg-[#24283b] p-3 rounded-lg border border-[#3d59a1]">
            <p>
              Sudjarmono, Rizky Ramadhan et al. (Apr. 2024). "Analisis Relasi Data Support dan Demand Bahasa Pemrograman
              di Indonesia". In: INTECOMS: Journal of Information Technology and Computer Science 7.2, pp. 419–432.
            </p>
            <a
              href="https://doi.org/10.31539/intecoms.v7i2.9443"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-2 text-[#7aa2f7] hover:text-[#bb9af7]"
            >
              <ExternalLink className="h-4 w-4 mr-1" />
              View Publication
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-[#7dcfff]">Commands to Explore More</h3>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>
              Type <span className="text-[#bb9af7]">experience</span> to view my work experience
            </li>
            <li>
              Type <span className="text-[#bb9af7]">projects</span> to view my projects
            </li>
            <li>
              Type <span className="text-[#bb9af7]">skills</span> to view my skills and technologies
            </li>
            <li>
              Type <span className="text-[#bb9af7]">publication</span> to view my publications in detail
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#3d59a1] pt-2 text-[#7aa2f7] text-sm">
        <p>
          Type <span className="text-[#bb9af7]">contact</span> to get in touch or{" "}
          <span className="text-[#bb9af7]">help</span> for more commands.
        </p>
      </div>
    </div>
  )
}

