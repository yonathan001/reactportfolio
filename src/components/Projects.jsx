import { FiExternalLink, FiGithub, FiCode } from 'react-icons/fi'
import { useEffect, useRef, useState } from 'react'

const Projects = () => {
  const projects = [
    {
      id: 8,
      title: 'Velkap - Investment Platform',
      description:
        'Fintech investment management platform featuring a client-facing Investor Portal and internal systems—delivering real-time portfolio analytics, secure multi-asset transactions, and high-throughput financial REST APIs.',
      image: 'assets/images/velkap.png',
      tags: ['C#', '.NET', 'Next.js', 'TypeScript', 'Laravel', 'Fintech'],
      github: '#',
      demo: 'https://velkap.com/',
      year: '2026'
    },
    {
      id: 1,
      title: 'RAG AI Platform',
      description:
        'Production-grade Retrieval-Augmented Generation system combining OpenAI LLMs with MongoDB vector search for accurate, context-grounded document intelligence.',
      image: 'assets/images/rag.png',
      tags: ['Python', 'Flask', 'OpenAI', 'MongoDB Vector Search'],
      github: 'https://github.com/akilocorp/rag_platform',
      demo: 'https://app.bitterlylab.com',
      year: '2025'
    },
    {
      id: 2,
      title: 'AI-Powered EMR & Clinic Management System',
      description:
        'Healthcare operations platform designed to digitize clinical workflows, manage patient records, and streamline appointment scheduling.',
      image: 'assets/images/cms.png',
      tags: ['React', 'Flask', 'PostgreSQL'],
      github: '#',
      demo: 'https://bego.et',
      year: '2026'
    },
    {
      id: 3,
      title: 'EtPayRent - Property & Payment Platform',
      description:
        'Full-stack property management solution featuring automated rent billing, maintenance tracking, and integrated digital payment processing.',
      image: 'assets/images/epr.png',
      tags: ['React', 'Java Spring Boot', 'PostgreSQL'],
      github: '#',
      demo: 'https://www.etpayrent.com/',
      year: '2025'
    },
    {
      id: 4,
      title: 'Chapa Payment Gateway Integration',
      description:
        'Modular payment processing engine for Chapa featuring automated webhook handling, transaction reconciliation, and idempotent payment verification.',
      image: 'assets/images/chapa.png',
      tags: ['Laravel', 'MySQL', 'Chapa API', 'REST API'],
      github: 'https://github.com/yonathan001/Chapa_Payment_Laravel',
      demo: '#',
      year: '2024'
    },
    {
      id: 5,
      title: 'OAuth 2.0 Authentication & Session Service',
      description:
        'Secure authentication architecture implementing multi-provider OAuth login, cryptographically signed session management, and Prisma ORM integration.',
      image: 'assets/images/ba.png',
      tags: ['Node.js', 'Next.js', 'Prisma', 'OAuth 2.0', 'Better Auth'],
      github: 'https://github.com/yonathan001/ecom-node',
      demo: '',
      year: '2025'
    },
    {
      id: 6,
      title: 'EmployTrack - HR Management System',
      description:
        'Full-stack HR management platform featuring multi-tenant isolation, role-based access control (RBAC), biometric attendance, and leave management.',
      image: 'assets/images/et.png',
      tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'TypeScript'],
      github: 'https://github.com/yonathan001/EmployTrack',
      demo: '#',
      year: '2026'
    },
    {
      id: 7,
      title: 'AI-Driven Microfinance Credit Platform',
      description:
        'Machine learning-assisted credit appraisal system evaluating borrower creditworthiness using digital behavioral signals and verified identity data.',
      image: 'assets/images/mf.png',
      tags: ['Python', 'Flask', 'React', 'Machine Learning', 'JWT'],
      github: 'https://github.com/mckienzie7/MicroFinance-Solution',
      demo: 'https://addismicrofinance.tech/',
      year: '2025'
    },
  ]

  return (
    <section id="projects" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-5">
            <div className="p-3 rounded-xl bg-white">
              <FiCode className="text-black text-xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Featured Projects
            </h2>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto">
            Selected works focused on performance, scalability, and real-world impact
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project }) => {
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
    <article
      ref={cardRef}
      className={`group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 hover:-translate-y-1 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden bg-white/5">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover scale-100 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Overlay actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub`}
              className="p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110 transition-all duration-200"
            >
              <FiGithub />
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live demo of ${project.title}`}
              className="p-3 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110 transition-all duration-200"
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-medium tracking-tight">
            {project.title}
          </h3>
          <span className="text-xs text-white/50">{project.year}</span>
        </div>

        <p className="text-sm text-white/70 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="rounded-lg bg-white/10 px-2.5 py-1 text-xs text-white/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {project.github && project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 py-2 text-sm transition-all duration-200"
            >
              <FiGithub /> Code
            </a>
          )}
          {project.demo && project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 py-2 text-sm transition-all duration-200"
            >
              Demo <FiExternalLink />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default Projects
