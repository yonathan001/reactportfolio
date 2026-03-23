import { FiUser, FiPhone, FiMail, FiGithub, FiLinkedin, FiMapPin, FiInstagram } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';
import { 
  SiReact, SiJavascript, SiTypescript, SiTailwindcss,
  SiPython, SiDjango, SiFlask, SiLaravel, SiNodedotjs,
  SiMysql, SiPostgresql, SiMongodb, SiDocker, SiGit
} from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React', icon: SiReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Python', icon: SiPython },
    { name: 'Django', icon: SiDjango },
    { name: 'Flask', icon: SiFlask },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Docker', icon: SiDocker },
    { name: 'Git', icon: SiGit }
  ];

  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects', value: '15+' },
    { label: 'Clients', value: '10+' },
    { label: 'Technologies', value: '15+' }
  ];

  return (
    <section id="about" className="py-16 bg-black text-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-white rounded-lg">
                <FiUser className="text-black text-xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                About Me
              </h2>
            </div>
            <p className="text-white/60 text-base max-w-2xl mx-auto">
              Get to know more about my background and skills
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-5 gap-6 mb-12">
            {/* Left - Profile Card */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Image Placeholder */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-white/20 transition-all duration-300">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <FiUser className="text-white text-5xl" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  Yonathan Wondosen
                </h3>
                <p className="text-white/70 text-sm mb-6">Senior Software Engineer</p>
                
                {/* Contact Info */}
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                    <div className="p-2 bg-white/5 rounded-lg">
                      <FiMail className="text-white text-sm" />
                    </div>
                    <span className="text-xs">yonathanwondosen@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                    <div className="p-2 bg-white/5 rounded-lg">
                      <FiPhone className="text-white text-sm" />
                    </div>
                    <span className="text-xs">+251 914 287 268</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                    <div className="p-2 bg-white/5 rounded-lg">
                      <FiMapPin className="text-white text-sm" />
                    </div>
                    <span className="text-xs">Addis Ababa, Ethiopia</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 mt-6 justify-center flex-wrap">
                  <a
                    href="https://github.com/yonathan001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-white/15 hover:scale-110 transition-all"
                    aria-label="GitHub Profile"
                  >
                    <FiGithub className="text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yonathan-wondosen-a025bb239/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-white/15 hover:scale-110 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <FiLinkedin className="text-white" />
                  </a>
                  <a
                    href="https://www.instagram.com/yo_na_th_an/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-white/15 hover:scale-110 transition-all"
                    aria-label="Instagram"
                  >
                    <FiInstagram className="text-white" />
                  </a>
                  <a
                    href="https://t.me/yo_na_th_an"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/10 rounded-lg hover:bg-white/15 hover:scale-110 transition-all"
                    aria-label="Telegram"
                  >
                    <FaTelegramPlane className="text-white" />
                  </a>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/[0.07] hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - About Content */}
            <div className="lg:col-span-3 bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-white rounded-full"></div>
                <h3 className="text-xl font-bold text-white">My Story</h3>
              </div>
              
              <div className="space-y-5 text-white/70 leading-relaxed">
                <p className="text-base">
                  Hey! My Name is Yonathan Wondosen. I'm a senior full-stack software developer based in Ethiopia. I work extensively with <span className="text-white font-semibold">React/Next.js</span>, <span className="text-white font-semibold">TypeScript</span>, <span className="text-white font-semibold">Tailwind</span>, <span className="text-white font-semibold">Python (Django, Flask)</span>, <span className="text-white font-semibold">Node/Express</span>, <span className="text-white font-semibold">SQL and NO-SQL Databases</span>, building efficient, scalable, and user-friendly software solutions.
                </p>
                <p className="text-base">
                  In addition to full-stack development, I have hands-on experience with DevOps practices, including <span className="text-white font-semibold">Docker</span> containerization, deploying and managing applications on <span className="text-white font-semibold">AWS</span> and <span className="text-white font-semibold">VPS</span> environments, and implementing <span className="text-white font-semibold">CI/CD pipelines</span> using <span className="text-white font-semibold">GitHub Actions</span> to automate testing, building, and deployment processes.
                </p>
                
                {/* Highlights */}
                <div className="grid sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Full-Stack Expertise</p>
                      <p className="text-white/60 text-xs mt-1">End-to-end development</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">DevOps Ready</p>
                      <p className="text-white/60 text-xs mt-1">CI/CD & Cloud deployment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">AI Integration</p>
                      <p className="text-white/60 text-xs mt-1">RAG & LLM solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-white/10 rounded-lg mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Scalable Systems</p>
                      <p className="text-white/60 text-xs mt-1">Performance-focused</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8 text-white">
              Technical Skills
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all group"
                >
                  <skill.icon className="text-white text-3xl mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-white/80 font-medium">{skill.name}</span>
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