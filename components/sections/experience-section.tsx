import { Briefcase, Calendar } from "lucide-react"

// Data structure for experiences. Nested bullet points (like courses) supported via children.
interface ExperienceBullet {
  text: string
  subItems?: string[]
}

interface ExperienceItem {
  role: string
  organization: string
  period: string
  bullets: (string | ExperienceBullet)[]
}

const experiences: ExperienceItem[] = [
  {
    role: "Machine Learning Cohort",
    organization: "Bangkit Academy led by Google, GoTo, & Traveloka",
    period: "Aug 2023 - Jan 2024",
    bullets: [
      "Completed 24 Coursera courses, covering Python, Data Science, Machine Learning, TensorFlow, and Model Deployment, with 4 specializations.",
      "Contributed to Dentalify, a capstone project using Xception to detect 6 dental and 7 oral diseases, achieving 80% accuracy (76% validation).",
      "Graduated with distinction (96.79 WAM) and 100% attendance."
    ]
  },
  {
    role: "IT Consultant",
    organization: "Centre for Communication, Media and Culture Studies Unpad",
    period: "May - Jul 2024",
    bullets: [
      "Created a web scraping tool to collect content from 4 news websites (Kompas, CNNIndonesia, Detik, and TribunNews) and 4 social media platforms (TikTok, X, YouTube, and Instagram).",
      "Speed up data collection and cleansing by 57.14% using Google Search and BeautifulSoup Python libraries in the development process.",
      "Provided training on the use of web scraping tools to 6+ study center members."
    ]
  },
  {
    role: "Teaching Assistant",
    organization: "Department of Computer Science Unpad",
    period: "Feb 2023 - Sep 2024",
    bullets: [
      "Formulated and delivered four-hour lectures each week, assessed students' knowledge through weekly assignments, and assisted students with technical and professional questions outside of class time. In total, I've taught about 129 students in 4 courses.",
      {
        text: "Courses I teach/have taught:",
        subItems: [
          "Algorithms & Programming (Twice) - Aug 2023 - Sep 2024",
          "Artificial Intelligence - Mar - Jun 2024",
          "Data Structures (Twice) - Mar 2023 - Jun 2024",
          "Object-Oriented Programming - August - December 2023"
        ]
      }
    ]
  },
  {
    role: "Quantitative Analysis Intern",
    organization: "BPJS Ketenagakerjaan",
    period: "Sep - Dec 2024",
    bullets: [
      "Developed a risk-adjusted portfolio optimization system for Indonesian equities and fixed-income asset classes using convex optimization and Markowitz model, achieving Sharpe ratio of 1.19 (RFR 7%).",
      "Prepared daily reports on profit sharing realization and mark-to-market valuations of fixed income assets for a total AUM over Rp 604 trillion."
    ]
  },
  {
    role: "Market & Pricing Analyst Intern",
    organization: "Ministry of Finance, Republic of Indonesia",
    period: "Mar - May 2025",
    bullets: [
      "Applied LLMs to automate sentiment analysis on 4,500+ Indonesia economic news articles (2017-2025) sourced from Bloomberg Terminal, tailored for fixed income investor insights.",
      "Seek fair value of the upcoming SBSN issuance in Indonesia using 6 machine learning models with macroeconomic and market sentiment data, achieving 0.08 RMSE."
    ]
  },
]

export function ExperienceSection() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-xl font-bold text-[#bb9af7] flex items-center">
        <Briefcase className="mr-2 h-5 w-5 text-[#7aa2f7]" />
        Work Experience
      </h2>

      <div className="space-y-6 text-[#a9b1d6]">
        {experiences.map(exp => (
          <div key={exp.role + exp.period} className="bg-[#24283b] p-4 rounded-lg border border-[#3d59a1]">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-[#7dcfff] font-medium">{exp.role}</h3>
                <div className="text-[#7aa2f7]">{exp.organization}</div>
                <div className="flex items-center text-sm mt-1 sm:hidden">
                  <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0 text-[#7aa2f7]" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center text-sm whitespace-nowrap">
                <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0 text-[#7aa2f7]" />
                <span>{exp.period}</span>
              </div>
            </div>
            <div className="mt-3">
              <ul className="space-y-1">
                {exp.bullets.map((b, i) => {
                  const bullet = typeof b === 'string' ? { text: b } : b
                  return (
                    <li key={i} className="flex flex-col">
                      <div className="flex items-start">
                        <span className="text-[#9ece6a] mr-2">•</span>
                        <span>{bullet.text}</span>
                      </div>
                      {bullet.subItems && (
                        <ul className="ml-6 mt-1 space-y-1">
                          {bullet.subItems.map((s, si) => (
                            <li key={si} className="flex items-start">
                              <span className="text-[#7aa2f7] mr-2">-</span>
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-[#3d59a1] pt-2 text-[#7aa2f7] text-sm">
        <p>
          Type <span className="text-[#bb9af7]">projects</span> to view my projects or <span className="text-[#bb9af7]">skills</span> to see my technical skills.
        </p>
      </div>
    </div>
  )
}

