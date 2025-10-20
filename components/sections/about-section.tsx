import { User, Calendar, MapPin, Briefcase, GraduationCap, Mail, Globe, Linkedin, Award } from "lucide-react"

export function AboutSection() {
  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-xl font-bold text-[#bb9af7] flex items-center">
        <User className="mr-2 h-5 w-5 text-[#7aa2f7]" />
        About Me
      </h2>

      <div className="space-y-4 text-[#a9b1d6]">
        <div className="space-y-2">
          <h3 className="text-[#7dcfff] text-lg">Rizky Ramadhan Sudjarmono, S.Kom.</h3>
          <p>
            Fresh graduate of Computer Science from Padjadjaran University with a passion for data science, financial
            engineering, and automation. Experienced in Python, SQL, and Tableau, with strong skills in project
            management and teaching. Eager to apply my knowledge in real-world projects, make a positive impact, and
            grow as an IT professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="text-[#7dcfff] flex items-center">
              <Briefcase className="mr-2 h-4 w-4" />
              Contact Information
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4 text-[#7aa2f7]" />
                <span>business dot rizr09 at gmail dot com</span>
              </li>
              {/* <li className="flex items-center">
                <Globe className="mr-2 h-4 w-4 text-[#7aa2f7]" />
                <a
                  href="https://rizr09.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7aa2f7]"
                >
                  rizr09.me
                </a>
              </li> */}
              <li className="flex items-center">
                <Linkedin className="mr-2 h-4 w-4 text-[#7aa2f7]" />
                <a
                  href="https://www.linkedin.com/in/rizr09/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#7aa2f7]"
                >
                  linkedin.com/in/rizr09
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-[#7dcfff] flex items-center">
              <GraduationCap className="mr-2 h-4 w-4" />
              Education
            </h3>
            <ul className="space-y-2">
              <li>
                <div className="font-medium">Bachelor of Computer Science</div>
                <div className="text-sm text-[#7aa2f7]">Padjadjaran University (2021 - 2025)</div>
                <div className="text-sm flex items-center mt-1">
                  GPA: 3.93/4.0
                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-[#1a1b26] border border-[#9ece6a] text-[#9ece6a]">
                    <Award className="mr-1 h-3 w-3" />
                    Cum Laude
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-[#7dcfff] flex items-center">
            <Briefcase className="mr-2 h-4 w-4" />
            Current Position
          </h3>
          <div className="bg-[#24283b] p-3 rounded-lg border border-[#3d59a1]">
            <div className="font-medium text-[#bb9af7]">TEC Associate - IT Operations & Business Support</div>
            <div className="text-[#7aa2f7]">Telkomsel</div>
            <div className="text-sm">Oct 2025 - Present</div>
            <div className="mt-2">
              Part of Data Center Operations and Software Development Squad.
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm text-[#7aa2f7]">
          <div className="flex items-center">
            <MapPin className="mr-1 h-4 w-4" />
            <span>Indonesia</span>
          </div>
          <div className="flex items-center">
            <Calendar className="mr-1 h-4 w-4" />
            <span>Open to Work</span>
          </div>
        </div>
      </div>

      <div className="border-t border-[#3d59a1] pt-2 text-[#7aa2f7] text-sm">
        <p>
          Type <span className="text-[#bb9af7]">resume</span> to see my full resume or{" "}
          <span className="text-[#bb9af7]">contact</span> to get in touch.
        </p>
      </div>
    </div>
  )
}

