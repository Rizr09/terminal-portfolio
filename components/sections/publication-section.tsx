import { BookOpen, ExternalLink } from "lucide-react"

export function PublicationSection() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-xl font-bold text-[#bb9af7] flex items-center">
        <BookOpen className="mr-2 h-5 w-5 text-[#7aa2f7]" />
        Publications
      </h2>

      <div className="space-y-4 text-[#a9b1d6]">
        <div className="bg-[#24283b] p-4 rounded-lg border border-[#3d59a1]">
          <h3 className="text-[#7dcfff] font-medium">
            Analisis Relasi Data Support dan Demand Bahasa Pemrograman di Indonesia
          </h3>
          <div className="text-sm mt-1">
            <span className="text-[#7aa2f7]">INTECOMS: Journal of Information Technology and Computer Science</span>
            <span> | Volume 7, Issue 2, April 2024, pp. 419–432</span>
          </div>
          <div className="mt-3">
            <p className="italic">Sudjarmono, Rizky Ramadhan et al.</p>
          </div>
          <div className="mt-3">
            <p>
              This paper examines the relationship between programming language popularity (support) and job market demand in Indonesia. Using a quantitative descriptive approach, it analyzes PyPL and TIOBE indices over 12 months and job postings from LinkedIn. Findings suggest Python as the most recommended language, balancing high demand (1,675 jobs) and strong support (TIOBE: 12.60%, PyPL: 29.80%).
            </p>
          </div>
          <div className="mt-4">
            <a
              href="https://doi.org/10.31539/intecoms.v7i2.9443"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#7aa2f7] hover:text-[#bb9af7] transition-colors"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              <span>View Publication (DOI: 10.31539/intecoms.v7i2.9443)</span>
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-[#7dcfff]">Thesis Research</h3>
          <div className="bg-[#1a1b26] p-3 rounded-lg border border-[#3d59a1]">
            <div className="font-medium text-[#bb9af7]">
              Improving Stock Price Forecasts Through Deep Learning with Financial Sentiment Analysis and Technical
              Indicators
            </div>
            <p className="mt-2">
              My thesis research improves stock price prediction by incorporating deep learning, sentiment analysis, and technical indicators. Comparing IndoBERT (F1 score: 81%) and lexicon-based methods (F1 score: 22%), I tested six deep learning models. The best model, multivariate LSTM, achieved an RMSE of 257.32 for future stock price forecasting.
            </p>
          </div>
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

