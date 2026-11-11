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
      id: 1,
      monogram: 'VK',
      title: 'Fullstack Software Engineer',
      company: 'VELKAP Ltd',
      shortName: 'VELKAP Ltd',
      location: 'London, UK (Remote)',
      duration: 'May 2026 – Present',
      type: 'Contractual',
      status: 'Ongoing',
      description: 'Architecting and engineering two distinct enterprise systems for a UK-based fintech firm: an investment management platform and an investor portal backend powered by C#/.NET paired with a Next.js frontend deployed on Azure.',
      highlights: [
        'Architecting and engineering two distinct enterprise systems for a UK fintech firm: an investment management platform and an investor portal backend powered by C#/.NET paired with Next.js deployed on Azure',
        'Designing high-throughput backend APIs for financial transaction processing and investment portfolio tracking',
        'Developing highly responsive, accessible user interfaces using modern React patterns, TypeScript, and state management strategies',
        'Ensuring strict compliance with UK financial regulatory guidelines (FCA) and data security standards across all services',
        'Key Achievement: Engineered high-throughput backend services using .NET, implementing an FCA compliance rules engine, robust OIDC authentication, automated PII redaction, and Azure infrastructure automation for continuous deployment'
      ],
      skills: ['C#', '.NET', 'Next.js', 'React', 'TypeScript', 'Azure', 'REST APIs', 'Fintech', 'FCA Compliance'],
      link: 'https://velkap.com/'
    },
    {
      id: 2,
      monogram: 'AT',
      title: 'Backend Engineer, AI / RAG Development',
      company: 'Akilo Technology',
      shortName: 'Akilo Tech',
      location: 'Hong Kong, China (Remote)',
      duration: 'June 2025 – September 2025',
      type: 'Contractual',
      status: 'Completed',
      description: 'Engineered a production RAG AI system integrating LLMs with MongoDB vector search for high-accuracy document intelligence and conversational survey collection.',
      highlights: [
        'Built a RAG chatbot with two modes: a public, no-login mode that collects survey responses through conversation embedded in Qualtrics surveys via custom HTML/JS, and a private mode that answers questions from client documents',
        'Built pipelines for embedding storage and semantic retrieval with MongoDB vector search (HNSW), grounding LLM answers in client content',
        'Tuned HNSW parameters, embedding strategy, and semantic chunking to improve retrieval relevance and reduce hallucinated answers',
        'Deployed containerized vector search and embedding services on AWS infrastructure'
      ],
      skills: ['Python', 'RAG Development', 'MongoDB Vector Search', 'HNSW', 'OpenAI API', 'AWS', 'Docker', 'Qualtrics'],
      link: 'https://app.bitterlylab.com/'
    },
    {
      id: 3,
      monogram: 'EP',
      title: 'Fullstack Software Engineer',
      company: 'EtPay-Rent PLC',
      shortName: 'EtPay-Rent',
      location: 'Addis Ababa, Ethiopia (Hybrid)',
      duration: 'March 2025 – November 2025',
      type: 'Full-time / Hybrid',
      status: 'Completed',
      description: 'Led full-stack engineering for a real estate and rent collection application, establishing fault-tolerant digital payment integrations and high system reliability.',
      highlights: [
        'Led full-stack engineering for a real estate and rent collection application, ensuring high availability and system reliability',
        'Integrated local and international digital payment gateways, including Chapa and Telebirr, establishing fault-tolerant transaction workflows',
        'Investigated and resolved core payment integration edge cases, directly enhancing payment processing success rates',
        'Evaluated third-party integrations and modern architectural paradigms to drive continuous platform optimization',
        'Key Achievement: Boosted application throughput and reduced response latency by refactoring resource-intensive backend modules and optimizing database query executions'
      ],
      skills: ['React', 'Java Spring Boot', 'PostgreSQL', 'Chapa', 'Telebirr', 'Payment APIs', 'REST APIs'],
      link: 'https://etpayrent.com'
    },
    {
      id: 4,
      monogram: 'BG',
      title: 'Co-Founder & Technical Lead',
      company: 'Bego Healthcare Solution',
      shortName: 'Bego Healthcare',
      location: 'Addis Ababa, Ethiopia',
      duration: 'February 2025 – Present',
      type: 'Founding / Leadership',
      status: 'Ongoing',
      description: 'Co-founded and engineered BEGO (bego.et), an AI-powered EMR for dental and medical clinics, replacing paper-based workflows with digital patient records, clinical workflows, and branch analytics.',
      highlights: [
        'Built and operate BEGO, an AI-powered EMR for dental and medical clinics, replacing paper workflows with digital patient records, clinical workflows, and branch analytics (React, Flask)',
        'Developed a doctor-facing AI assistant that analyzes patient data and suggests evidence-based treatment plans for clinician review',
        'Selected for the prestigious Ethiopian Artificial Intelligence Institute (EAII) AI Startup Incubation Program',
        'Key Achievement: Scaled the platform to 5 active clinics and 4,000+ patients at 99% uptime, deployed with Docker and PM2 on production VPS infrastructure'
      ],
      skills: ['React', 'Flask', 'Python', 'Docker', 'PM2', 'VPS Infrastructure', 'AI/ML', 'PostgreSQL', 'EMR Systems'],
      link: 'https://bego.et'
    },
    {
      id: 5,
      monogram: 'EK',
      title: 'Technology Officer',
      company: 'Ethiopian Kidney Care NGO',
      shortName: 'Kidney Care NGO',
      location: 'Addis Ababa, Ethiopia',
      duration: 'April 2024 – November 2026',
      type: 'Volunteer',
      status: 'Volunteer',
      description: 'Directed technology strategy and deployed automated healthcare web systems to digitize patient health screening workflows and community campaigns.',
      highlights: [
        'Managed and maintained the organization’s website while integrating external systems to streamline data synchronization and workflows',
        'Designed and deployed an automated health screening web application, streamlining patient data validation and campaign analytics',
        'Expanded web application capabilities by building user-focused features and responsive user interfaces',
        'Key Achievement: Built a kidney health screening web app that processed 100+ patients across campaign initiatives, replacing manual spreadsheet entry'
      ],
      skills: ['React', 'Web Applications', 'Healthcare Tech', 'System Architecture', 'Patient Data Validation', 'NGO Tech']
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
                    <span>Visit {activeExp.company}</span>
                    <FiArrowUpRight className="text-base" />
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