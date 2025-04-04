import { GraduationCap, BookOpen, Award } from "lucide-react"

export function EducationSection() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-xl font-bold text-[#bb9af7] flex items-center">
        <GraduationCap className="mr-2 h-5 w-5 text-[#7aa2f7]" />
        Education
      </h2>

      <div className="space-y-4 text-[#a9b1d6]">
        <div className="bg-[#24283b] p-4 rounded-lg border border-[#3d59a1]">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[#7dcfff] font-medium">Bachelor of Computer Science</h3>
              <div className="text-[#7aa2f7]">Padjadjaran University</div>
            </div>
            <div className="text-sm">2021 - 2025</div>
          </div>
          <div className="mt-2">
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2 text-[#9ece6a]" />
              <span className="font-medium">GPA: 3.93/4.0</span>
              <div className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1a1b26] border border-[#9ece6a] text-[#9ece6a]">
                <Award className="mr-1 h-3 w-3" />
                Cum Laude
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="font-medium text-[#bb9af7]">Thesis</div>
            <p>
              Improving Stock Price Forecasts Through Deep Learning with Financial Sentiment Analysis and Technical
              Indicators
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-[#7dcfff]">Certifications & Specializations</h3>
          <ul className="space-y-2">
            <li className="bg-[#1a1b26] p-3 rounded-lg border border-[#3d59a1]">
              <div className="font-medium">Mathematics for Machine Learning and Data Science</div>
            </li>
            <li className="bg-[#1a1b26] p-3 rounded-lg border border-[#3d59a1]">
              <div className="font-medium">Machine Learning Specialization by Stanford University</div>
            </li>
            <li className="bg-[#1a1b26] p-3 rounded-lg border border-[#3d59a1]">
              <div className="font-medium">DeepLearning.AI TensorFlow Developer</div>
            </li>
            <li className="bg-[#1a1b26] p-3 rounded-lg border border-[#3d59a1]">
              <div className="font-medium">TensorFlow: Data and Deployment</div>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-[#7dcfff]">Languages</h3>
          <ul className="space-y-1">
            <li className="flex items-center">
              <span className="text-[#9ece6a] mr-2">•</span>
              <span>English (Scored 540 in the English Language Test by Pusat Bahasa Unpad)</span>
            </li>
            <li className="flex items-center">
              <span className="text-[#9ece6a] mr-2">•</span>
              <span>Bahasa Indonesia</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#3d59a1] pt-2 text-[#7aa2f7] text-sm">
        <p>
          Type <span className="text-[#bb9af7]">experience</span> to view my work experience or{" "}
          <span className="text-[#bb9af7]">skills</span> to see my technical skills.
        </p>
      </div>
    </div>
  )
}

