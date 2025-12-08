import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Download, Mic, Zap, Shield, Globe, Users, Github, Twitter, MessageSquare, ChevronRight, Sparkles, Check, X, Server, Cpu } from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const [downloadUrl, setDownloadUrl] = React.useState("https://github.com/MuratGuelr/netrex-standalone/releases");
  const [version, setVersion] = React.useState("v1.0.0");

  useEffect(() => {
    fetch("https://api.github.com/repos/MuratGuelr/netrex-standalone/releases/latest")
      .then(res => res.json())
      .then(data => {
        if (data.tag_name) {
          setVersion(data.tag_name);
        }
        const exeAsset = data.assets?.find(asset => asset.name.endsWith('.exe'));
        if (exeAsset) {
          setDownloadUrl(exeAsset.browser_download_url);
        }
      })
      .catch(err => console.error("Failed to fetch latest release", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-purple-500/30 font-sans">
      
      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] bg-pink-900/10 rounded-full blur-[100px] transform -translate-x-1/2" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[url('/grid.svg')] opacity-[0.03] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-white/5 bg-black/40 supports-[backdrop-filter]:bg-black/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500 blur-lg opacity-40"></div>
              <img src="/logo.ico" alt="Netrex" className="w-8 h-8 relative z-10" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Netrex</span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            {['Features', 'Comparison', 'Community'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a href="https://github.com/MuratGuelr/netrex-standalone" target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all">
              <Github size={20} />
            </a>
            <motion.a 
              href={downloadUrl}
              target={downloadUrl.includes("releases") ? "_blank" : "_self"}
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex bg-white text-black px-5 py-2 rounded-full font-medium hover:bg-gray-200 transition-colors text-sm items-center gap-2 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
            >
              Download
              <Download size={16} />
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 pt-32 pb-20 px-6 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Hero Text */}
            <motion.div 
              style={{ opacity, scale }}
              className="flex-1 text-center lg:text-left z-20"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm mb-8 backdrop-blur-md"
              >
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="font-semibold tracking-wide">{version} RELEASED</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-6xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]"
              >
                Future of <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient-x bg-300%">Voice Chat</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg lg:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                Low latency, crystal clear audio, and self-hosted privacy. 
                <span className="text-white font-medium"> Netrex</span> is built for those who demand quality.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
              >
                <a 
                  href={downloadUrl}
                  target={downloadUrl.includes("releases") ? "_blank" : "_self"}
                  rel="noreferrer"
                  className="group relative px-8 py-4 bg-white text-black rounded-full font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-blue-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Download size={20} className="relative z-10" />
                  <span className="relative z-10">Download Now</span>
                </a>
                <a 
                  href="https://github.com/MuratGuelr/netrex-standalone"
                  target="_blank"
                  rel="noreferrer"
                  className="group px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold transition-all flex items-center gap-2 backdrop-blur-sm"
                >
                  <Github size={20} className="group-hover:text-white transition-colors" />
                  <span>GitHub</span>
                  <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 -ml-2 group-hover:ml-0 transition-all" />
                </a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
              >
                {/* Tech Stack Icons (Placeholders) */}
                <div className="flex items-center gap-2"><Cpu size={20} /> Electron</div>
                <div className="flex items-center gap-2"><Zap size={20} /> WebRTC</div>
                <div className="flex items-center gap-2"><Server size={20} /> Node.js</div>
              </motion.div>
            </motion.div>

            {/* Hero Image / Mockup */}
            <div className="flex-1 w-full max-w-lg lg:max-w-none perspective-1000">
              <motion.div 
                initial={{ opacity: 0, rotateY: -20, rotateX: 10, scale: 0.9 }}
                animate={{ opacity: 1, rotateY: -10, rotateX: 5, scale: 1 }}
                whileHover={{ rotateY: 0, rotateX: 0, scale: 1.02 }}
                transition={{ duration: 1.2, type: "spring", bounce: 0.4 }}
                className="relative z-10"
              >
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/50 to-blue-600/50 rounded-3xl blur-2xl opacity-40 animate-pulse-slow"></div>
                
                <div className="relative bg-[#0a0a0a] rounded-2xl border border-white/10 shadow-2xl overflow-hidden aspect-[16/10]">
                  <img 
                    src="/app-mockup.jpg" 
                    alt="Netrex Application" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
                </div>
                
                {/* Floating Elements with Parallax */}
                <FloatingBadge 
                  icon={<Mic size={18} />} 
                  label="Noise Suppression" 
                  value="Active" 
                  color="green" 
                  position="-top-8 -right-8" 
                  delay={0}
                />
                
                <FloatingBadge 
                  icon={<Zap size={18} />} 
                  label="Latency" 
                  value="12ms" 
                  color="purple" 
                  position="-bottom-8 -left-8" 
                  delay={1.5}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      {/* Scrolling Text / Technologies */}
      <div className="py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex items-center gap-16 text-2xl font-bold text-white/20 uppercase tracking-widest"
        >
          <span>WebRTC Optimized</span> • <span>End-to-End Encrypted</span> • <span>High Fidelity Audio</span> • <span>Open Source</span> • <span>Self Hosted</span> • 
          <span>WebRTC Optimized</span> • <span>End-to-End Encrypted</span> • <span>High Fidelity Audio</span> • <span>Open Source</span> • <span>Self Hosted</span> •
        </motion.div>
      </div>

      {/* Features Grid */}
      <section id="features" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader title="Why Choose Netrex?" subtitle="Engineered for performance, designed for humans." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Mic className="text-purple-400" />}
              title="Advanced Voice Processing"
              description="Built-in Noise Gate, Echo Cancellation, and RNNoise suppression for studio-quality communication."
            />
            <FeatureCard 
              icon={<Zap className="text-yellow-400" />}
              title="LiveKit Powered"
              description="Low latency WebRTC architecture ensuring your voice reaches your team the moment you speak."
            />
            <FeatureCard 
              icon={<Shield className="text-green-400" />}
              title="Secure Authentication"
              description="Login securely with Google OAuth or stay anonymous. Your session is protected by Firebase Auth."
            />
            <FeatureCard 
              icon={<Users className="text-blue-400" />}
              title="Global Hotkeys"
              description="Control your microphone and audio even when Netrex is in the background. Perfect for gaming."
            />
            <FeatureCard 
              icon={<Globe className="text-cyan-400" />}
              title="Hybrid Cloud"
              description="Powered by Firebase and LiveKit Cloud for maximum reliability and zero server maintenance."
            />
            <FeatureCard 
              icon={<Sparkles className="text-pink-400" />}
              title="Modern Dark UI"
              description="A beautiful, clutter-free dark interface with smooth animations and custom themes."
            />
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-24 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader title="Better by Design" subtitle="See how Netrex compares to the competition." />
          
          <div className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 p-6 border-b border-white/10 bg-white/5 text-sm font-semibold uppercase tracking-wider text-gray-400">
              <div>Feature</div>
              <div className="text-center">Legacy App</div>
              <div className="text-center text-purple-400">Netrex</div>
            </div>
            <ComparisonRow feature="Global Hotkeys" legacy={false} netrex={true} />
            <ComparisonRow feature="Noise Gate" legacy="Manual" netrex="AI Powered" />
            <ComparisonRow feature="Architecture" legacy="P2P/Slow" netrex="LiveKit SFU" />
            <ComparisonRow feature="Authentication" legacy="Complex" netrex="Google / Anon" />
            <ComparisonRow feature="Audio Codec" legacy="Standard" netrex="Opus + RNNoise" />
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0a] border border-white/10 p-12 lg:p-20 rounded-[2rem] shadow-2xl relative overflow-hidden group"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-purple-500/10 blur-[100px] group-hover:bg-purple-500/20 transition-colors" />

            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
              Ready to switch?
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join the community of users who value privacy, performance, and design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href={downloadUrl}
                target={downloadUrl.includes("releases") ? "_blank" : "_self"}
                rel="noreferrer"
                className="px-10 py-5 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-xl flex items-center gap-3"
              >
                <Download size={24} />
                Download for Windows
              </a>
              <a 
                href="https://github.com/MuratGuelr/netrex-standalone/releases"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-white font-medium transition-colors flex items-center gap-2"
              >
                All Platforms <ChevronRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-16 bg-[#020202]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src="/logo.ico" alt="Netrex" className="w-8 h-8 opacity-80" />
                <span className="text-2xl font-bold text-gray-200">Netrex</span>
              </div>
              <p className="text-gray-500 max-w-xs leading-relaxed">
                New generation voice communication client focused on privacy and performance.
              </p>
              <div className="flex gap-4 pt-2">
                <SocialIcon icon={<Twitter size={20} />} />
                <SocialIcon icon={<Github size={20} />} href="https://github.com/MuratGuelr/netrex-standalone" />
                <SocialIcon icon={<MessageSquare size={20} />} />
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-16 text-sm">
              <FooterColumn title="Product" links={['Features', 'Download', 'Changelog', 'Roadmap']} />
              <FooterColumn title="Community" links={['Discord', 'GitHub', 'Forum', 'Twitter']} />
              <FooterColumn title="Legal" links={['Privacy', 'Terms', 'Security', 'License']} />
            </div>
          </div>
          
          <div className="border-t border-white/5 mt-16 pt-8 text-center text-gray-600 text-sm">
            &copy; 2024 Netrex Project. Built with &hearts; by @MuratGuelr.
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-gray-400 text-lg"
      >
        {subtitle}
      </motion.p>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="p-8 rounded-3xl bg-[#111] border border-white/5 hover:border-purple-500/30 transition-all group hover:shadow-2xl hover:shadow-purple-900/10"
    >
      <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 group-hover:scale-110 transition-all duration-300 ring-1 ring-white/5 group-hover:ring-purple-500/40">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3 text-gray-200 group-hover:text-white transition-colors">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-[15px]">{description}</p>
    </motion.div>
  );
}

function FloatingBadge({ icon, label, value, color, position, delay }) {
  const colors = {
    green: "text-green-400 bg-green-900/20 border-green-500/30",
    purple: "text-purple-400 bg-purple-900/20 border-purple-500/30",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{ 
        y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay },
        opacity: { duration: 0.5, delay: 0.5 + delay }
      }}
      className={`absolute ${position} z-20 backdrop-blur-md bg-[#1a1a1a]/90 p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-4`}
    >
      <div className={`p-2 rounded-lg ${colors[color]}`}>
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">{label}</div>
        <div className="font-bold text-white">{value}</div>
      </div>
    </motion.div>
  );
}

function ComparisonRow({ feature, legacy, netrex }) {
  return (
    <div className="grid grid-cols-3 p-6 border-b border-white/5 hover:bg-white/5 transition-colors items-center">
      <div className="font-medium text-gray-300">{feature}</div>
      <div className="text-center text-gray-500">
        {legacy === false ? <X className="mx-auto text-red-500/50" size={20} /> : legacy}
      </div>
      <div className="text-center font-bold text-purple-400 flex justify-center">
        {netrex === true ? <Check className="text-green-400" size={20} /> : netrex}
      </div>
    </div>
  );
}

function SocialIcon({ icon, href = "#" }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white text-gray-400 hover:text-black transition-all">
      {icon}
    </a>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-bold text-white">{title}</h4>
      {links.map(link => (
        <a key={link} href="#" className="text-gray-500 hover:text-purple-400 transition-colors">{link}</a>
      ))}
    </div>
  );
}

export default App;
