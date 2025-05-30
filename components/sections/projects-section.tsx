import { FolderGit2, ExternalLink, Github } from "lucide-react"

type Project = {
  title: string
  description: string
  technologies: string[]
  github?: string
  demo?: string
  year: string
}

const projects: Project[] = [
  {
    title: "LLM-Based RAG Chatbot for Financial Market Insights",
    description:
      "Engineered a pipeline to process 11 market outlook reports (300 pages), producing 959 text segments and indexing them in ChromaDB for accurate retrieval. Implemented a Retrieval-Augmented Generation QA flow with Gemini 2.5 Flash Preview, fetching the top 6 documents in under 300 ms on average and delivering complete answers in under 1s.",
    technologies: ["Python", "ChromaDB", "Gemini 2.5 Flash Preview"],
    github: "https://github.com/Rizr09/RAG-Chatbot/",
    year: "2025",
  },
  {
    title: "Indonesia Portfolio Optimization Dashboard",
    description:
      "Developed a Stock Portfolio Optimization Dashboard with Streamlit, including interactive visualizations of the efficient frontier and key portfolio metrics. Applied a variety of optimization methods, including the Sharpe Ratio, Volatility, Sortino Ratio, Tracking Error, Information Ratio, and Conditional Value-at-Risk (CVaR).",
    technologies: ["Python", "Markowitz Model", "Convex Optimization"],
    demo: "https://portfolio-optimization-id.streamlit.app/",
    year: "2024",
  },
  {
    title: "Multivariate Time Series Forecasting of Staple Food Prices",
    description:
      "Developed and optimized a machine learning model using 5 years of data (2019-2024) to forecast prices for 10 key staple foods in West Java, achieving 60-day predictions with an RMSE between 900-1500 per item. Implemented the deep learning solution leveraging TensorFlow, utilized KerasTuner/TensorBoard for hyperparameter tuning, and built interactive forecast visualizations with Plotly.",
    technologies: ["Python", "TensorFlow", "Bidirectional LSTM", "Time Series Analysis", "KerasTuner", "Plotly"],
    github: "https://www.kaggle.com/code/rizr09/antasena",
    year: "2024",
  },
  {
    title: "Dentalify - Dental and Oral Disease Detection",
    description:
      "Contributed to a capstone project using Xception to detect 6 dental and 7 oral diseases, achieving 80% accuracy (76% validation). Part of the Bangkit Academy program led by Google, GoTo, & Traveloka.",
    technologies: ["Python", "TensorFlow", "Xception", "Computer Vision", "Mobile App Development"],
    github: "https://github.com/mnnur/Dentalify-Dental-Identify",
    year: "2023",
  },
]

export function ProjectsSection() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-xl font-bold text-[#bb9af7] flex items-center">
        <FolderGit2 className="mr-2 h-5 w-5 text-[#7aa2f7]" />
        Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="border border-[#3d59a1] rounded-lg p-4 hover:bg-[#24283b] transition-colors">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-[#7dcfff]">{project.title}</h3>
              <span className="text-xs bg-[#1a1b26] px-2 py-1 rounded text-[#7aa2f7]">{project.year}</span>
            </div>
            <p className="mt-2 text-[#a9b1d6]">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-[#1a1b26] border border-[#3d59a1] rounded-md text-xs text-[#7aa2f7]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-4 flex items-center space-x-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#7aa2f7] hover:text-[#bb9af7] transition-colors"
                >
                  <Github className="mr-1 h-4 w-4" />
                  <span>Code</span>
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[#7aa2f7] hover:text-[#bb9af7] transition-colors"
                >
                  <ExternalLink className="mr-1 h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="text-[#7aa2f7] text-sm mt-4">
        <p>
          You can also use the <span className="text-[#bb9af7]">goto [url]</span> command to open any project link if
          available.
        </p>
      </div> */}

      <div className="border-t border-[#3d59a1] pt-2 text-[#7aa2f7] text-sm">
        <p>
          Type <span className="text-[#bb9af7]">contact</span> to get in touch or{" "}
          <span className="text-[#bb9af7]">publication</span> to see my research work.
        </p>
      </div>
    </div>
  )
}

