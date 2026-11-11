import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiGlobe } from 'react-icons/fi';
import { FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white border-t border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-white rounded-lg">
              <FiMail className="text-black text-xl" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Get In Touch
            </h2>
          </div>
          
          <p className="text-white/70 text-base mb-10 max-w-xl mx-auto leading-relaxed">
            I&apos;m currently open to new high-impact software engineering opportunities, enterprise fintech projects, and technical collaborations. Let&apos;s build something great together.
          </p>

          {/* Quick Info Grid */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto text-left">
            <a
              href="mailto:yonathanwondosen@gmail.com"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all group"
            >
              <div className="p-2 w-fit bg-white/10 rounded-lg text-white mb-2 group-hover:scale-110 transition-transform">
                <FiMail />
              </div>
              <p className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">Email</p>
              <p className="text-xs text-white/90 font-medium truncate mt-0.5">yonathanwondosen@gmail.com</p>
            </a>

            <a
              href="tel:+251914287268"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08] transition-all group"
            >
              <div className="p-2 w-fit bg-white/10 rounded-lg text-white mb-2 group-hover:scale-110 transition-transform">
                <FiPhone />
              </div>
              <p className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">Phone</p>
              <p className="text-xs text-white/90 font-medium truncate mt-0.5">+251 914 287 268</p>
            </a>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-left">
              <div className="p-2 w-fit bg-white/10 rounded-lg text-white mb-2">
                <FiMapPin />
              </div>
              <p className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">Location</p>
              <p className="text-xs text-white/90 font-medium truncate mt-0.5">Addis Ababa · Remote UK/US</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://github.com/yonathan001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all text-xs font-medium"
              aria-label="GitHub"
            >
              <FiGithub className="text-white text-base" />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/yonathan-wondosen-a025bb239/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all text-xs font-medium"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-white text-base" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://t.me/yo_na_th_an"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all text-xs font-medium"
              aria-label="Telegram"
            >
              <FaTelegramPlane className="text-white text-base" />
              <span>Telegram</span>
            </a>
            <a
              href="https://yonathans.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all text-xs font-medium"
              aria-label="Portfolio"
            >
              <FiGlobe className="text-white text-base" />
              <span>yonathans.vercel.app</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;