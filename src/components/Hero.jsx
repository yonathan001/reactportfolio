import { FiDownload, FiCode } from 'react-icons/fi';

const Hero = () => {
  const handleDownloadCV = () => {
    const cvUrl = '/Yonathan-Wondosen-Resume.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Yonathan-Wondosen-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-0 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="block text-white/60 text-lg sm:text-2xl md:text-3xl font-normal mb-1.5 sm:mb-2">Hey, I&apos;m</span>
              <span className="block text-white">Yonathan Wondosen</span>
            </h1>
            
            <div className="flex items-center gap-2.5 sm:gap-3 justify-center lg:justify-start mb-5 sm:mb-6">
              <div className="p-1.5 sm:p-2 bg-white/10 rounded-lg shrink-0">
                <FiCode className="text-white text-lg sm:text-xl" />
              </div>
              <p className="text-base sm:text-xl md:text-2xl text-white/90 font-semibold">
                Full-Stack Software Engineer
              </p>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-white/60 mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building scalable, production-ready web applications with 5+ years of experience. Focused on full-stack development, AI-assisted engineering, and shipping high-performance solutions for distributed global teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex justify-center lg:justify-start">
              <button
                onClick={handleDownloadCV}
                className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg text-sm sm:text-base"
              >
                <FiDownload />
                Download Resume
              </button>
            </div>
          </div>

          {/* Right Column - Coding Illustration */}
          <div className="relative mt-4 sm:mt-6 lg:mt-0">
            {/* Code Editor Window */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-sm shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-white/10">
                <div className="flex gap-1.5 sm:gap-2">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/50"></div>
                </div>
                <span className="text-white/40 text-xs sm:text-sm ml-2 sm:ml-4 font-mono">portfolio.jsx</span>
              </div>
              
              {/* Code Lines */}
              <div className="space-y-1.5 sm:space-y-2.5 font-mono text-[11px] sm:text-xs md:text-sm overflow-x-auto scrollbar-none">
                <div className="flex gap-2 sm:gap-4">
                  <span className="text-white/30 select-none w-3 sm:w-4 text-right shrink-0">1</span>
                  <span className="text-purple-400">const</span>
                  <span className="text-blue-400">Developer</span>
                  <span className="text-white/60">=</span>
                  <span className="text-white/60">{'{'}</span>
                </div>
                <div className="flex gap-2 sm:gap-4 pl-3 sm:pl-6">
                  <span className="text-white/30 select-none w-3 sm:w-4 text-right shrink-0">2</span>
                  <span className="text-blue-300">name:</span>
                  <span className="text-green-400">&apos;Yonathan Wondosen&apos;</span>
                  <span className="text-white/60">,</span>
                </div>
                <div className="flex gap-2 sm:gap-4 pl-3 sm:pl-6">
                  <span className="text-white/30 select-none w-3 sm:w-4 text-right shrink-0">3</span>
                  <span className="text-blue-300">role:</span>
                  <span className="text-green-400">&apos;Full-Stack Engineer&apos;</span>
                  <span className="text-white/60">,</span>
                </div>
                <div className="flex gap-2 sm:gap-4 pl-3 sm:pl-6">
                  <span className="text-white/30 select-none w-3 sm:w-4 text-right shrink-0">4</span>
                  <span className="text-blue-300">skills:</span>
                  <span className="text-white/60">[</span>
                  <span className="text-green-400">&apos;React&apos;</span>
                  <span className="text-white/60">,</span>
                  <span className="text-green-400">&apos;Python&apos;</span>
                  <span className="text-white/60">,</span>
                  <span className="text-green-400">&apos;.NET&apos;</span>
                  <span className="text-white/60">],</span>
                </div>
                <div className="flex gap-2 sm:gap-4 pl-3 sm:pl-6">
                  <span className="text-white/30 select-none w-3 sm:w-4 text-right shrink-0">5</span>
                  <span className="text-blue-300">experience:</span>
                  <span className="text-orange-400">&apos;5+ Years&apos;</span>
                  <span className="text-white/60">,</span>
                </div>
                <div className="flex gap-2 sm:gap-4 pl-3 sm:pl-6">
                  <span className="text-white/30 select-none w-3 sm:w-4 text-right shrink-0">6</span>
                  <span className="text-blue-300">passion:</span>
                  <span className="text-green-400">&apos;Building Solutions&apos;</span>
                </div>
                <div className="flex gap-2 sm:gap-4">
                  <span className="text-white/30 select-none w-3 sm:w-4 text-right shrink-0">7</span>
                  <span className="text-white/60">{'}'}</span>
                  <span className="text-white/60">;</span>
                </div>
                <div className="flex gap-2 sm:gap-4 pt-1 sm:pt-2">
                  <span className="text-white/30 select-none w-3 sm:w-4 text-right shrink-0">8</span>
                  <span className="text-purple-400">export default</span>
                  <span className="text-blue-400">Developer</span>
                  <span className="text-white/60">;</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;