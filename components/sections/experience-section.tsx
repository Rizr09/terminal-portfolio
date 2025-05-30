import { Briefcase, Calendar } from "lucide-react"

export function ExperienceSection() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-xl font-bold text-[#bb9af7] flex items-center">
        <Briefcase className="mr-2 h-5 w-5 text-[#7aa2f7]" />
        Work Experience
      </h2>

      <div className="space-y-6 text-[#a9b1d6]">
        <div className="bg-[#24283b] p-4 rounded-lg border border-[#3d59a1]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-[#7dcfff] font-medium">Forecast Analyst Intern</h3>
              <div className="text-[#7aa2f7]">Ministry of Finance, Republic of Indonesia</div>
              <div className="flex items-center text-sm mt-1 sm:hidden">
                <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0 text-[#7aa2f7]" />
                <span>Mar - May 2025</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center text-sm whitespace-nowrap">
              <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0 text-[#7aa2f7]" />
              <span>Mar - May 2025</span>
            </div>
          </div>
          <div className="mt-3">
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>
                  Applied LLMs to automate sentiment analysis on 4,500+ Indonesia economic news articles (2017-2025) 
                  sourced from Bloomberg Terminal, tailored for fixed income investor insights.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>
                  Seek fair value of the upcoming SBSN issuance in Indonesia using 6 machine learning models with
                  macroeconomic and market sentiment data, achieving 0.08 RMSE.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#24283b] p-4 rounded-lg border border-[#3d59a1]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-[#7dcfff] font-medium">Financial Data Scientist Intern</h3>
              <div className="text-[#7aa2f7]">BPJS Ketenagakerjaan</div>
              <div className="flex items-center text-sm mt-1 sm:hidden">
                <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0 text-[#7aa2f7]" />
                <span>Sep - Dec 2024</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center text-sm whitespace-nowrap">
              <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0 text-[#7aa2f7]" />
              <span>Sep - Dec 2024</span>
            </div>
          </div>
          <div className="mt-3">
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>
                  Developed an interactive dashboard to optimize portfolios of Indonesian stocks and bonds using the
                  Modern Portfolio Theory.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>
                  Explored machine learning techniques to predict multiple stock prices and Indonesian 10-year
                  government bond yield for the remainder of 2024.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>
                  Prepared daily reports on profit sharing realization and mark-to-market valuations of fixed income
                  assets for a total AUM over Rp 604 trillion.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#24283b] p-4 rounded-lg border border-[#3d59a1]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-[#7dcfff] font-medium">Teaching Assistant</h3>
              <div className="text-[#7aa2f7]">Department of Computer Science Unpad</div>
              <div className="flex items-center text-sm mt-1 sm:hidden">
                <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0 text-[#7aa2f7]" />
                <span>Feb 2023 - Sep 2024</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center text-sm whitespace-nowrap">
              <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0 text-[#7aa2f7]" />
              <span>Feb 2023 - Sep 2024</span>
            </div>
          </div>
          <div className="mt-3">
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>
                  Formulated and delivered four-hour lectures each week, assessed students' knowledge through weekly
                  assignments, and assisted students with technical and professional questions outside of class time. In
                  total, I've taught about 129 students in 4 courses.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>Courses I teach/have taught:</span>
                <ul className="ml-6 mt-1 space-y-1">
                  <li className="flex items-start">
                    <span className="text-[#7aa2f7] mr-2">-</span>
                    <span>Algorithms & Programming (Twice) - Aug 2023 - Sep 2024</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7aa2f7] mr-2">-</span>
                    <span>Artificial Intelligence - Mar - Jun 2024</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7aa2f7] mr-2">-</span>
                    <span>Data Structures (Twice) - Mar 2023 - Jun 2024</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#7aa2f7] mr-2">-</span>
                    <span>Object-Oriented Programming - August - December 2023</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#24283b] p-4 rounded-lg border border-[#3d59a1]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-[#7dcfff] font-medium">IT Consultant</h3>
              <div className="text-[#7aa2f7]">Centre for Communication, Media and Culture Studies Unpad</div>
              <div className="flex items-center text-sm mt-1 sm:hidden">
                <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0 text-[#7aa2f7]" />
                <span>May - Jul 2024</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center text-sm whitespace-nowrap">
              <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0 text-[#7aa2f7]" />
              <span>May - Jul 2024</span>
            </div>
          </div>
          <div className="mt-3">
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>
                  Created a web scraping tool to collect content from 4 news websites (Kompas, CNNIndonesia, Detik, and
                  TribunNews) and 4 social media platforms (TikTok, X, YouTube, and Instagram).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>
                  Speed up data collection and cleansing by 57.14% using Google Search and BeautifulSoup Python
                  libraries in the development process.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>Provided training on the use of web scraping tools to 6+ study center members.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#24283b] p-4 rounded-lg border border-[#3d59a1]">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-[#7dcfff] font-medium">Machine Learning Cohort</h3>
              <div className="text-[#7aa2f7]">Bangkit Academy led by Google, GoTo, & Traveloka</div>
              <div className="flex items-center text-sm mt-1 sm:hidden">
                <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0 text-[#7aa2f7]" />
                <span>Aug 2023 - Jan 2024</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center text-sm whitespace-nowrap">
              <Calendar className="h-4 w-4 mr-1.5 flex-shrink-0 text-[#7aa2f7]" />
              <span>Aug 2023 - Jan 2024</span>
            </div>
          </div>
          <div className="mt-3">
            <ul className="space-y-1">
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>
                  Completed 24 Coursera courses, covering Python, Data Science, Machine Learning, TensorFlow, and Model
                  Deployment, with 4 specializations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>
                  Contributed to Dentalify, a capstone project using Xception to detect 6 dental and 7 oral diseases,
                  achieving 80% accuracy (76% validation).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#9ece6a] mr-2">•</span>
                <span>Graduated with distinction (96.79 WAM) and 100% attendance.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3d59a1] pt-2 text-[#7aa2f7] text-sm">
        <p>
          Type <span className="text-[#bb9af7]">projects</span> to view my projects or{" "}
          <span className="text-[#bb9af7]">skills</span> to see my technical skills.
        </p>
      </div>
    </div>
  )
}

