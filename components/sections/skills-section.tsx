import { Code, Database, Terminal, Cpu, Wrench, Globe } from "lucide-react"

export function SkillsSection() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-xl font-bold text-[#bb9af7] flex items-center">
        <Code className="mr-2 h-5 w-5 text-[#7aa2f7]" />
        Skills & Technologies
      </h2>

      <div className="space-y-6 text-[#a9b1d6]">
        <div className="space-y-2">
          <h3 className="text-[#7dcfff] flex items-center">
            <Terminal className="mr-2 h-4 w-4" />
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "SQL", "Bash", "JavaScript", "C++"].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-[#1a1b26] border border-[#3d59a1] rounded-md text-[#7aa2f7]">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-[#7dcfff] flex items-center">
            <Wrench className="mr-2 h-4 w-4" />
            Tools & Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "LaTeX",
              "Power BI",
              "UIPath Studio",
              "Tableau",
              "BigQuery",
              "SQL Server",
              "MySQL",
              "Trello",
              "TensorFlow",
              "PyTorch",
              "Streamlit",
            ].map((skill) => (
              <span key={skill} className="px-3 py-1.5 bg-[#1a1b26] border border-[#3d59a1] rounded-md text-[#7aa2f7]">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-[#7dcfff] flex items-center">
            <Cpu className="mr-2 h-4 w-4" />
            Specializations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-[#24283b] p-3 rounded-lg border border-[#3d59a1]">
              <h4 className="font-medium text-[#bb9af7]">Data Science</h4>
              <p className="text-sm mt-1">
                Experience with data analysis, visualization, and artificial intelligence for predictive analytics.
              </p>
            </div>
            <div className="bg-[#24283b] p-3 rounded-lg border border-[#3d59a1]">
              <h4 className="font-medium text-[#bb9af7]">Financial Engineering</h4>
              <p className="text-sm mt-1">
                Knowledge of portfolio optimization, market analysis, and derivative pricing.
              </p>
            </div>
            <div className="bg-[#24283b] p-3 rounded-lg border border-[#3d59a1]">
              <h4 className="font-medium text-[#bb9af7]">Machine Learning</h4>
              <p className="text-sm mt-1">
                Proficient in developing and deploying ML models, particularly for forecasting and sentiment analysis.
              </p>
            </div>
            <div className="bg-[#24283b] p-3 rounded-lg border border-[#3d59a1]">
              <h4 className="font-medium text-[#bb9af7]">Automation</h4>
              <p className="text-sm mt-1">
                Experience with process automation, web scraping, and data pipeline development.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-[#7dcfff] flex items-center">
            <Database className="mr-2 h-4 w-4" />
            Certificate of Specializations
          </h3>
          <ul className="space-y-1">
            <li className="flex items-start">
              <span className="text-[#9ece6a] mr-2">•</span>
              <span>Mathematics for Machine Learning and Data Science</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9ece6a] mr-2">•</span>
              <span>Machine Learning Specialization by Stanford University</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9ece6a] mr-2">•</span>
              <span>DeepLearning.AI TensorFlow Developer</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9ece6a] mr-2">•</span>
              <span>TensorFlow: Data and Deployment</span>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-[#7dcfff] flex items-center">
            <Globe className="mr-2 h-4 w-4" />
            Languages
          </h3>
          <ul className="space-y-1">
            <li className="flex items-start">
              <span className="text-[#9ece6a] mr-2">•</span>
              <span>English (Scored 540 in the English Language Test by Pusat Bahasa Unpad)</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#9ece6a] mr-2">•</span>
              <span>Bahasa Indonesia (Native)</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#3d59a1] pt-2 text-[#7aa2f7] text-sm">
        <p>
          Type <span className="text-[#bb9af7]">projects</span> to view my projects or{" "}
          <span className="text-[#bb9af7]">experience</span> to see my work experience.
        </p>
      </div>
    </div>
  )
}

