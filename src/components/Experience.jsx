import { useState } from 'react'
import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiArrowUpRight, 
  FiCheckCircle 
} from 'react-icons/fi'

const Experience = () => {
  const experiences = [
    {
      id: 8,
      monogram: 'VK',
      title: 'Full-Stack Software Engineer',
      company: 'VELKAP Ltd',
      shortName: 'VELKAP Ltd',
      location: 'Remote - London, UK',
      duration: '2026 - Present',
      type: 'Full-time',
      status: 'Ongoing',
      description: 'Developing an enterprise investment management platform for a UK-based fintech firm.',
      highlights: [
        'Engineering a high-performance investment management platform using C#, .NET, Next.js, and Laravel',
        'Architecting scalable backend REST APIs for investment portfolios and secure financial transaction processing',
        'Implementing responsive, accessible user interfaces with modern React patterns and TypeScript',
        'Collaborating cross-functionally with product, design, and engineering teams in an agile, async environment',
        'Ensuring strict compliance with UK financial regulations, data privacy, and security standards'
      ],
      skills: ['C#', '.NET', 'Laravel', 'Next.js', 'TypeScript', 'MySQL', 'REST APIs', 'Fintech'],
      link: 'https://velkap.com/'
    },
    {
      id: 4,
      monogram: 'AT',
      title: 'Backend Engineer (AI & RAG Systems)',
      company: 'Akilo Technology',
      shortName: 'Akilo Tech',
      location: 'Remote - Hong Kong, China',
      duration: '2025',
      type: 'Contract',
      status: 'Completed',
      description: 'Developed an enterprise RAG AI system integrating LLMs with MongoDB vector search for high-accuracy document intelligence.',
      highlights: [
        'Architected and implemented an end-to-end RAG system coupling OpenAI LLMs with MongoDB vector search',
        'Optimized semantic document retrieval using the HNSW index algorithm for sub-second similarity search',
        'Designed automated ingestion and embedding pipelines to chunk, vectorize, and store domain knowledge',
        'Engineered prompt evaluation workflows to minimize hallucinations and deliver context-grounded responses',
        'Delivered a production-ready AI solution meeting rigorous client accuracy benchmarks and delivery milestones'
      ],
      skills: ['Python', 'RAG', 'LLM', 'MongoDB', 'Vector Search', 'HNSW', 'AI/ML'],
      link: 'https://app.bitterlylab.com/'
    },
    {
      id: 2,
      monogram: 'EP',
      title: 'Full-Stack Software Engineer',
      company: 'EtPayRent',
      shortName: 'EtPayRent',
      location: 'Hybrid - Addis Ababa, Ethiopia',
      duration: 'Mar 2025 - Nov 2025',
      type: 'Full-time',
      status: 'Completed',
      description: 'Built a cloud property management platform with automated rent collection and local payment gateway integrations.',
      highlights: [
        'Developed full-stack property management features using React, Java Spring Boot, and PostgreSQL',
        'Integrated Telebirr and regional payment gateways for secure, automated transaction processing',
        'Designed and implemented robust RESTful APIs for property listings, tenant onboarding, and payment auditing',
        'Built reusable, responsive UI components ensuring a smooth cross-device user experience',
        'Collaborated with a cross-functional team to deliver core modules on schedule under tight deadlines'
      ],
      skills: ['React', 'Spring Boot', 'Java', 'Payment APIs', 'PostgreSQL'],
      link: 'https://etpayrent.com'
    },
    {
      id: 3,
      monogram: 'FL',
      title: 'Full-Stack Software Engineer',
      company: 'Freelance & Contract Work',
      shortName: 'Freelance & Contract',
      location: 'Remote - Addis Ababa, Ethiopia',
      duration: 'Dec 2020 - Present',
      type: 'Freelance',
      status: 'Ongoing',
      description: 'Delivering end-to-end web applications and architectures for international and local clients across diverse industries.',
      highlights: [
        'Successfully delivered 15+ production projects for clients across the US, UK, Europe, and Africa',
        'Architected, built, and deployed scalable full-stack web applications from discovery to production',
        'Leveraged modern AI-assisted workflows (Claude, Cursor) to double delivery velocity while preserving clean architecture',
        'Managed the complete project lifecycle: technical specs, schema design, coding, testing, and cloud deployment',
        'Configured and maintained containerized production environments using Docker, Nginx, and PM2 on Linux VPS',
        'Maintained long-term client relationships through proactive communication and reliable on-time delivery',
        'Specialized in healthcare tech, fintech, and AI-powered workflow automation'
      ],
      skills: ['React', 'Python', 'Flask', 'FastAPI', 'Node.js', 'Next.js', 'AI/ML', 'Docker', 'PM2', 'VPS'],
      link: 'https://www.upwork.com/freelancers/~01a7b27982e445e1a0'
    },
    {
      id: 1,
      monogram: 'EK',
      title: 'Technology Officer',
      company: 'Ethiopian Kidney Care NGO',
      shortName: 'Kidney Care NGO',
      location: 'Addis Ababa, Ethiopia',
      duration: 'Jun 2024 - Present',
      type: 'Volunteer',
      status: 'Volunteer',
      description: 'Directing technology strategy and digital transformation for a healthcare NGO.',
      highlights: [
        'Formulated technology roadmap and IT architecture aligned with healthcare service initiatives',
        'Architected and deployed web applications to streamline patient intake and clinical records',
        'Led digital transformation initiatives that digitized legacy paper-based workflows',
        'Mentored junior developers on Git workflows, code reviews, and software engineering best practices',
        'Partnered with healthcare professionals to translate clinical workflows into user-friendly digital tools'
      ],
      skills: ['Leadership', 'Healthcare Tech', 'System Architecture', 'Web Applications']
    }
  ]

  const [activeId, setActiveId] = useState(experiences[0].id)
  const activeExp = experiences.find(exp => exp.id === activeId) || experiences[0]

  return (
    <section id="experience" className="relative bg-black py-24 text-white overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute -top-32 right-10 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-32 h-96 w-96 rounded-full bg-blue-500/[0.03] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-3">
            <div className="rounded-xl bg-white p-2.5 text-black">
              <FiBriefcase className="text-xl" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-white">
              Work Experience
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-white/60 text-sm md:text-base">
            Track record of building enterprise platforms, AI systems, and fintech architectures
          </p>
        </div>

        {/* Mobile Horizontal Tabs */}
        <div className="lg:hidden mb-6">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none snap-x">
            {experiences.map(exp => {
              const isActive = exp.id === activeId
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`snap-start flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-black shadow-lg shadow-white/10 scale-100 font-semibold'
                      : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${
                    exp.status === 'Ongoing' ? 'bg-emerald-400 animate-pulse' : 'bg-white/40'
                  }`} />
                  {exp.shortName}
                </button>
              )
            })}
          </div>
        </div>

        {/* Desktop Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Company Selector Tabs */}
          <div className="hidden lg:flex lg:col-span-4 flex-col gap-3 sticky top-24">
            <div className="px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-white/40">
              Select Position
            </div>
            {experiences.map(exp => {
              const isActive = exp.id === activeId
              const isOngoing = exp.status === 'Ongoing'
              return (
                <button
                  key={exp.id}
                  onClick={() => setActiveId(exp.id)}
                  className={`group relative flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-300 border ${
                    isActive
                      ? 'bg-gradient-to-r from-white/10 to-white/5 border-white/20 shadow-xl shadow-black/60 translate-x-1'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.06] hover:border-white/10 text-white/70 hover:text-white'
                  }`}
                >
                  {/* Left accent indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-3 bottom-3 w-1 bg-white rounded-r-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  )}

                  {/* Company Monogram Avatar */}
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-xs tracking-wider transition-all duration-200 shrink-0 ${
                    isActive
                      ? 'bg-white text-black shadow-md'
                      : 'bg-white/10 text-white/80 group-hover:bg-white/15 group-hover:text-white'
                  }`}>
                    {exp.monogram}
                  </div>

                  {/* Company Info */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className={`text-sm font-semibold truncate ${
                        isActive ? 'text-white' : 'text-white/85 group-hover:text-white'
                      }`}>
                        {exp.company}
                      </h4>
                      {isOngoing && (
                        <span className="flex h-2 w-2 relative shrink-0" title="Current Role">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/50 truncate mt-0.5">
                      {exp.title}
                    </p>
                    <span className="text-[11px] text-white/40 block mt-1 font-mono">
                      {exp.duration}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Right Column: Active Role Detail Card */}
          <div className="lg:col-span-8">
            <article 
              key={activeExp.id}
              className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl p-6 md:p-8 shadow-2xl transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 pb-6 border-b border-white/10">
                <div>
                  {/* Status & Type Badges */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                      activeExp.status === 'Ongoing'
                        ? 'bg-emerald-500/15 border border-emerald-500/40 text-emerald-400'
                        : activeExp.status === 'Completed'
                        ? 'bg-purple-500/15 border border-purple-500/40 text-purple-300'
                        : 'bg-blue-500/15 border border-blue-500/40 text-blue-300'
                    }`}>
                      {activeExp.status === 'Ongoing' && (
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
                        </span>
                      )}
                      {activeExp.status === 'Ongoing' ? 'Active / Present' : activeExp.status}
                    </span>

                    <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-white/70">
                      {activeExp.type}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
                    {activeExp.title}
                  </h3>

                  <div className="flex items-center gap-2 text-lg text-white/90 font-medium">
                    {activeExp.link ? (
                      <a
                        href={activeExp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors group"
                      >
                        <span>{activeExp.company}</span>
                        <FiArrowUpRight className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <span>{activeExp.company}</span>
                    )}
                  </div>
                </div>

                {/* Date & Location Metas */}
                <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-2 text-xs md:text-sm text-white/60 shrink-0">
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    <FiCalendar className="text-white/50" />
                    <span>{activeExp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                    <FiMapPin className="text-white/50" />
                    <span>{activeExp.location}</span>
                  </div>
                </div>
              </div>

              {/* Role Scope & Summary */}
              <div className="my-6 rounded-2xl bg-white/[0.04] border border-white/10 p-4 md:p-5">
                <p className="text-white/85 text-sm md:text-base leading-relaxed">
                  {activeExp.description}
                </p>
              </div>

              {/* Highlights & Engineering Impact */}
              <div className="mb-6">
                <h4 className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-4 flex items-center gap-2">
                  <span className="h-px w-4 bg-white/20"></span>
                  Key Contributions & Engineering Impact
                </h4>
                <ul className="space-y-3">
                  {activeExp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-white/70 leading-relaxed group">
                      <div className="mt-1 flex-shrink-0 text-white/30 group-hover:text-emerald-400 transition-colors">
                        <FiCheckCircle className="text-base" />
                      </div>
                      <span className="group-hover:text-white/90 transition-colors">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="pt-6 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-wider text-white/40 font-semibold mb-3 flex items-center gap-2">
                  <span className="h-px w-4 bg-white/20"></span>
                  Technologies & Core Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeExp.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="rounded-xl bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Footer */}
              {activeExp.link && (
                <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
                  <a
                    href={activeExp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all shadow-lg hover:scale-105"
                  >
                    {activeExp.link.includes('upwork') ? (
                      <>
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                        </svg>
                        <span>View Upwork Profile</span>
                      </>
                    ) : (
                      <>
                        <span>Visit {activeExp.company}</span>
                        <FiArrowUpRight className="text-base" />
                      </>
                    )}
                  </a>
                </div>
              )}
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience