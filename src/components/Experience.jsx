import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'

const Experience = () => {
  const experiences = [
    {
      id: 8,
      title: 'Full-Stack Software Engineer',
      company: 'VELKAP Ltd',
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
      title: 'Backend Engineer (AI & RAG Systems)',
      company: 'Akilo Technology',
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
      title: 'Full-Stack Software Engineer',
      company: 'EtPayRent',
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
      title: 'Full-Stack Software Engineer',
      company: 'Freelance & Contract Work',
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
      title: 'Technology Officer',
      company: 'Ethiopian Kidney Care NGO',
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

  return (
    <section id="experience" className="relative bg-black py-24 text-white overflow-hidden">
      {/* Ambient accents */}
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />
      <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-white/[0.02] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-5 inline-flex items-center gap-4">
            <div className="rounded-xl bg-white p-3">
              <FiBriefcase className="text-xl text-black" />
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Work Experience
            </h2>
          </div>
          <p className="mx-auto max-w-2xl text-white/60">
            A timeline of roles, responsibilities, and real-world impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-8" />

          <div className="space-y-14">
            {experiences.map(exp => (
              <ExperienceCard key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const ExperienceCard = ({ exp }) => {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`relative pl-12 md:pl-24 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-4 top-6 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-black bg-white md:left-8 group-hover:scale-125 transition-transform duration-300" />

      {/* Card */}
      <article className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/5">
        {/* Header */}
        <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            {exp.status && (
              <span className={`mb-3 inline-block rounded-full px-3 py-1 text-xs ${
                exp.status === 'Volunteer' 
                  ? 'bg-green-500/20 border border-green-500/40 text-green-400' 
                  : exp.status === 'Ongoing'
                  ? 'bg-blue-500/20 border border-blue-500/40 text-blue-400'
                  : exp.status === 'Completed'
                  ? 'bg-purple-500/20 border border-purple-500/40 text-purple-400'
                  : 'border border-white/20 bg-white/10'
              }`}>
                {exp.status}
              </span>
            )}
            <h3 className="mb-1 text-xl font-medium tracking-tight">
              {exp.title}
            </h3>
            <p className="text-lg text-white/80">{exp.company}</p>
            <span className="mt-2 inline-block rounded-md bg-white/5 px-2 py-1 text-xs text-white/60">
              {exp.type}
            </span>
          </div>

          {/* Meta */}
          <div className="space-y-2 text-sm text-white/60 lg:text-right">
            <div className="flex items-center gap-2 lg:justify-end">
              <FiCalendar />
              <span>{exp.duration}</span>
            </div>
            <div className="flex items-center gap-2 lg:justify-end">
              <FiMapPin />
              <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-white/70">
          {exp.description}
        </p>

        {/* Highlights/Bullet Points */}
        {exp.highlights && (
          <ul className="mb-6 space-y-2 text-sm text-white/70">
            {exp.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-white/40 mt-1">•</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Link if available */}
        {exp.link && (
          <a 
            href={exp.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mb-6 inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            {exp.link.includes('upwork') ? (
              <>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                </svg>
                View Upwork Profile →
              </>
            ) : (
              'View Project →'
            )}
          </a>
        )}

        {/* Skills */}
        <div>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill, i) => (
              <span
                key={i}
                className="rounded-lg bg-white/10 px-3 py-1 text-xs text-white/80 transition hover:bg-white/15"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

export default Experience