import { FiDownload, FiCode } from 'react-icons/fi';

const Hero = () => {
  const handleDownloadCV = () => {
    const cvUrl = '/yonathan-resume-nov.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Yonathan-Wondosen-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-black text-white pt-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white/60 text-2xl md:text-3xl font-normal mb-3">Hey, I'm</span>
                <span className="block text-white mb-2">Yonathan</span>
                <span className="block text-white">Wondosen</span>
              </h1>
              
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  <FiCode className="text-white text-xl" />
                </div>
                <p className="text-xl md:text-2xl text-white/90 font-semibold">
                  Senior Software Engineer
                </p>
              </div>
              
              <p className="text-base md:text-lg text-white/60 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Crafting scalable applications and intelligent solutions with 5+ years of experience in full-stack development and DevOps
              </p>

              {/* CTA Buttons */}
              <div className="flex justify-center lg:justify-start">
                <button
                  onClick={handleDownloadCV}
                  className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-200 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <FiDownload />
                  Download Resume
                </button>
              </div>
            </div>

            {/* Right Column - Coding Illustration */}
            <div className="relative">
              <div className="relative">
                {/* Code Editor Window */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-4 md:p-6 backdrop-blur-sm">
                  {/* Window Header */}
                  <div className="flex items-center gap-2 mb-3 md:mb-4 pb-3 md:pb-4 border-b border-white/10">
                    <div className="flex gap-1.5 md:gap-2">
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/50"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/50"></div>
                      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/50"></div>
                    </div>
                    <span className="text-white/40 text-xs md:text-sm ml-2 md:ml-4">portfolio.jsx</span>
                  </div>
                  
                  {/* Code Lines */}
                  <div className="space-y-2 md:space-y-3 font-mono text-xs md:text-sm">
                    <div className="flex gap-2 md:gap-4">
                      <span className="text-white/30">1</span>
                      <span className="text-purple-400">const</span>
                      <span className="text-blue-400">developer</span>
                      <span className="text-white/60">=</span>
                      <span className="text-white/60">{'{'}</span>
                    </div>
                    <div className="flex gap-2 md:gap-4 pl-4 md:pl-8">
                      <span className="text-white/30">2</span>
                      <span className="text-blue-300">name:</span>
                      <span className="text-green-400">'Yonathan'</span>
                      <span className="text-white/60">,</span>
                    </div>
                    <div className="flex gap-2 md:gap-4 pl-4 md:pl-8">
                      <span className="text-white/30">3</span>
                      <span className="text-blue-300">role:</span>
                      <span className="text-green-400">'Full-Stack Engineer'</span>
                      <span className="text-white/60">,</span>
                    </div>
                    <div className="flex gap-2 md:gap-4 pl-4 md:pl-8">
                      <span className="text-white/30">4</span>
                      <span className="text-blue-300">skills:</span>
                      <span className="text-white/60">[</span>
                      <span className="text-green-400">'React'</span>
                      <span className="text-white/60">,</span>
                      <span className="text-green-400">'Python'</span>
                      <span className="text-white/60">,</span>
                      <span className="text-green-400">'AI'</span>
                      <span className="text-white/60">],</span>
                    </div>
                    <div className="flex gap-2 md:gap-4 pl-4 md:pl-8">
                      <span className="text-white/30">5</span>
                      <span className="text-blue-300">experience:</span>
                      <span className="text-orange-400">5+</span>
                      <span className="text-white/60">,</span>
                    </div>
                    <div className="flex gap-2 md:gap-4 pl-4 md:pl-8">
                      <span className="text-white/30">6</span>
                      <span className="text-blue-300">passion:</span>
                      <span className="text-green-400">'Building Solutions'</span>
                    </div>
                    <div className="flex gap-2 md:gap-4">
                      <span className="text-white/30">7</span>
                      <span className="text-white/60">{'}'}</span>
                    </div>
                    <div className="flex gap-2 md:gap-4 mt-2 md:mt-4">
                      <span className="text-white/30">8</span>
                      <span className="text-white/60"></span>
                    </div>
                    <div className="flex gap-2 md:gap-4">
                      <span className="text-white/30">9</span>
                      <span className="text-purple-400">export default</span>
                      <span className="text-blue-400">developer</span>
                      <span className="text-white/60">;</span>
                    </div>
                  </div>
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