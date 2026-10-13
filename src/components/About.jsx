import { FiUser, FiPhone, FiMail, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { 
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss,
  SiPython, SiFastapi, SiFlask, SiLaravel, SiNodedotjs,
  SiMysql, SiPostgresql, SiMongodb, SiDocker, SiGit, SiDotnet
} from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'Python', icon: SiPython },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'Flask', icon: SiFlask },
    { name: 'C#', icon: TbBrandCSharp },
    { name: '.NET', icon: SiDotnet },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Docker', icon: SiDocker },
    { name: 'Git', icon: SiGit }
  ];

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects', value: '10+' },
    { label: 'Clients', value: '10+' },
    { label: 'Technologies', value: '15+' }
  ];

  return (
    <section id="about" className="py-16 bg-black text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-3 sm:mb-4">
              <div className="p-2.5 sm:p-3 bg-white rounded-lg">
                <FiUser className="text-black text-lg sm:text-xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                About Me
              </h2>
            </div>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto">
              Get to know more about my background and skills
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-6 mb-12 sm:mb-16 items-start">
            {/* Left - Profile Card */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 text-center hover:border-white/20 transition-all duration-300">
                {/* Profile Image */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden border-2 border-white/20 bg-white/10 flex items-center justify-center relative shadow-inner">
                  <img
                    src="/profile.png"
                    alt="Yonathan Wondosen"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement?.querySelector('.avatar-fallback');
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="avatar-fallback hidden w-full h-full flex items-center justify-center bg-white/10">
                    <FiUser className="text-white text-4xl sm:text-5xl" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  Yonathan Wondosen
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mb-5 sm:mb-6">Full-Stack Software Engineer</p>
                
                {/* Contact Info */}
                <div className="space-y-2.5 sm:space-y-3 text-left">
                  <div className="flex items-center gap-2.5 sm:gap-3 text-white/70 hover:text-white transition-colors">
                    <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg shrink-0">
                      <FiMail className="text-white text-xs sm:text-sm" />
                    </div>
                    <span className="text-xs truncate">yonathanwondosen@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 text-white/70 hover:text-white transition-colors">
                    <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg shrink-0">
                      <FiPhone className="text-white text-xs sm:text-sm" />
                    </div>
                    <span className="text-xs">+251 914 287 268</span>
                  </div>
                  <div className="flex items-center gap-2.5 sm:gap-3 text-white/70 hover:text-white transition-colors">
                    <div className="p-1.5 sm:p-2 bg-white/5 rounded-lg shrink-0">
                      <FiMapPin className="text-white text-xs sm:text-sm" />
                    </div>
                    <span className="text-xs">Addis Ababa, Ethiopia</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-2.5 sm:gap-3 mt-5 sm:mt-6 justify-center flex-wrap">
                  <a
                    href="https://github.com/yonathan001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-white/10 rounded-lg hover:bg-white/15 hover:scale-110 transition-all text-sm sm:text-base"
                    aria-label="GitHub Profile"
                  >
                    <FiGithub className="text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yonathan-wondosen-a025bb239/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-white/10 rounded-lg hover:bg-white/15 hover:scale-110 transition-all text-sm sm:text-base"
                    aria-label="LinkedIn Profile"
                  >
                    <FiLinkedin className="text-white" />
                  </a>
                  <a
                    href="https://t.me/yo_na_th_an"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 bg-white/10 rounded-lg hover:bg-white/15 hover:scale-110 transition-all text-sm sm:text-base"
                    aria-label="Telegram"
                  >
                    <FaTelegramPlane className="text-white" />
                  </a>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-3.5 sm:p-4 md:p-5 text-center hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
                  >
                    <div className="text-2xl sm:text-3xl font-bold text-white mb-0.5 sm:mb-1">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - About Content */}
            <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className="h-1 w-8 sm:w-12 bg-white rounded-full"></div>
                <h3 className="text-lg sm:text-xl font-bold text-white">My Story</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-5 text-white/70 leading-relaxed text-sm sm:text-base">
                <p>
                  Hey! I&apos;m Yonathan Wondosen, a <span className="text-white font-semibold">Full-Stack Software Engineer</span> specializing in enterprise system design, scalable web applications, and microservices architecture. I build and scale robust solutions using <span className="text-white font-semibold">React/Next.js</span>, <span className="text-white font-semibold">TypeScript</span>, <span className="text-white font-semibold">Python (FastAPI, Flask)</span>, <span className="text-white font-semibold">C# / .NET</span>, <span className="text-white font-semibold">Laravel</span>, <span className="text-white font-semibold">Node/Express</span>, and <span className="text-white font-semibold">SQL / NoSQL databases</span>.
                </p>
                <p>
                  I leverage <span className="text-white font-semibold">AI-assisted development</span> (Claude Code, Cursor) to accelerate delivery velocity while preserving clean code and strong architecture. My expertise spans <span className="text-white font-semibold">system architecture</span>, <span className="text-white font-semibold">containerization (Docker/Kubernetes)</span>, <span className="text-white font-semibold">cloud &amp; VPS infrastructure</span>, and <span className="text-white font-semibold">CI/CD automation</span>. I excel at delivering mission-critical solutions in fast-paced, asynchronous environments for distributed international teams.
                </p>
                
                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm">System Architecture</p>
                      <p className="text-white/60 text-[11px] sm:text-xs mt-0.5">Enterprise &amp; Scalable Design</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm">AI-Assisted Engineering</p>
                      <p className="text-white/60 text-[11px] sm:text-xs mt-0.5">Claude Code, Cursor &amp; Workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm">Critical Problem Solving</p>
                      <p className="text-white/60 text-[11px] sm:text-xs mt-0.5">Thriving under tight deadlines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium text-xs sm:text-sm">Global Collaboration</p>
                      <p className="text-white/60 text-[11px] sm:text-xs mt-0.5">Fluent async remote communication</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
              Technical Skills
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2.5 sm:gap-3.5 md:gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <skill.icon className="text-white text-2xl sm:text-3xl mx-auto mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] sm:text-xs text-white/80 font-medium truncate block">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;