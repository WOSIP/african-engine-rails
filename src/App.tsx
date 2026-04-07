import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronRight, Globe, Shield, Zap, CreditCard, 
  Users, BarChart3, Layers, Code, Database, Fingerprint,
  ArrowUpRight, Cpu, Network, Briefcase, Landmark,
  Wallet, Smartphone, Bot, Store, ShoppingCart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Toaster, toast } from 'sonner';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

// Import New Pages
import ModelsPage from '@/components/ModelsPage';
import ContactPage from '@/components/ContactPage';

// --- Constants & Data ---

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'Solutions', id: 'solutions' },
  { label: 'Models', id: 'models' },
  { label: 'Impact', id: 'impact' },
  { label: 'About', id: 'about' },
  { label: 'Developers', id: 'dev' },
  { label: 'Contact', id: 'contact' },
];

const IMAGES = {
  hero: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/76122caa-5b47-4e62-b479-06bc42d6786f/hero-africa-tech-18991f7a-1775524765712.webp",
  founder: "https://storage.googleapis.com/dala-prod-public-storage/attachments/2b04cbc3-7457-4f8b-bed7-cf47a1dea9c2/1775527940272_Vince_Mountaga_DIOP_-_CEO_BelCash_Group.jpeg",
  bridge: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/76122caa-5b47-4e62-b479-06bc42d6786f/global-remittance-bridge-3153fe7f-1775524765749.webp",
  engine: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/76122caa-5b47-4e62-b479-06bc42d6786f/triple-stack-engine-4f009e33-1775524765618.webp",
  solutions_fin_infra: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/76122caa-5b47-4e62-b479-06bc42d6786f/financial-infrastructure-paas-7f30b144-1775525718354.webp",
  solutions_remittance: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/76122caa-5b47-4e62-b479-06bc42d6786f/global-remittance-bridge-new-e7476a19-1775525718368.webp",
  solutions_commerce: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/76122caa-5b47-4e62-b479-06bc42d6786f/trade-funding-digital-commerce-c1714cec-1775525717913.webp",
};

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (id: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-3 border-b border-slate-800' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActivePage('home')}>
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center font-bold text-white text-xl">B</div>
          <span className="text-xl font-bold tracking-tighter text-white">BELCASH<span className="text-emerald-500">.COM</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`text-sm font-medium transition-colors hover:text-emerald-400 ${activePage === item.id ? 'text-emerald-500' : 'text-slate-300'}`}
            >
              {item.label}
            </button>
          ))}
          <Button 
            variant="outline" 
            onClick={() => setActivePage('contact')}
            className={`border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 ${activePage === 'contact' ? 'bg-emerald-500/10' : ''}`}
          >
            Contact Us
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActivePage(item.id); setIsOpen(false); }}
                  className={`text-left text-lg font-medium ${activePage === item.id ? 'text-emerald-500' : 'text-slate-300'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (id: string) => void }) => (
  <footer className="bg-slate-950 border-t border-slate-800 py-12">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="w-8 h-8 bg-emerald-600 rounded-md flex items-center justify-center font-bold text-white">B</div>
            <span className="text-lg font-bold tracking-tighter text-white">BELCASH.COM</span>
          </div>
          <p className="text-slate-400 max-w-sm mb-6">
            The Sovereign Engine for Pan-African financial infrastructure. 
            Engineering the rails for 54 Nations - <span className="text-emerald-500">Plug and Trade</span> to achieve economic independence.
          </p>
          <div className="text-xs text-slate-500 font-mono">
            &copy; {new Date().getFullYear()} World Open Services. All rights reserved.
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Engineering</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li>HelloCash Ledger</li>
            <li>MamaPays Bridge</li>
            <li>HellOOpass BNPL</li>
            <li>API Documentation</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-slate-400 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer">
              <a 
                href="https://www.linkedin.com/in/vince-mountaga-diop-06457a7/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="hover:text-emerald-400 cursor-pointer">Twitter / X</li>
            <li className="hover:text-emerald-400 cursor-pointer" onClick={() => setActivePage('contact')}>Institutional Sales</li>
            <li className="hover:text-emerald-400 cursor-pointer" onClick={() => setActivePage('contact')}>Developer Support</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = ({ setActivePage }: { setActivePage: (id: string) => void }) => (
  <div className="pt-20">
    {/* Hero Section */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={IMAGES.hero} alt="Africa Tech" className="w-full h-full object-cover opacity-30 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-3 py-1">WORLD OPEN SERVICES</Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            ENGINEERING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">
              PAN-AFRICAN <br />
              SOVEREIGNTY.
            </span>
          </h1>
          <p className="text-xl text-emerald-100/70 mb-8 max-w-lg leading-relaxed">
            The Rails for 54 Nations - <span className="text-emerald-500">Plug and Trade</span>. Ready to Start. From rural soil to the global market, we provide the Tokenized Value Chain that empowers communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePage('contact')}
              className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg shadow-emerald-900/40 hover:bg-emerald-500 transition-all flex items-center justify-center group"
            >
              Plug & Gain Your Sovereignty
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActivePage('impact')}
              className="bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg border border-slate-700 hover:bg-slate-700 transition-all"
            >
              The $7B Proof
            </motion.button>
          </div>
        </motion.div>
        
        <div className="hidden md:block">
           <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
           >
             <div className="absolute -inset-4 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
             <Card className="bg-slate-900/40 border-slate-800 backdrop-blur-sm p-8 border-2">
               <div className="grid grid-cols-2 gap-8">
                 <div className="space-y-1">
                   <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Pedigree</p>
                   <p className="text-3xl font-bold text-white">20 Years</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Processed</p>
                   <p className="text-3xl font-bold text-white">200M+</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Throughput</p>
                   <p className="text-3xl font-bold text-white">$7B USD</p>
                 </div>
                 <div className="space-y-1">
                   <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">Reach</p>
                   <p className="text-3xl font-bold text-white"> 54 Nations - <span className="text-emerald-500">Plug and Trade</span></p>
                 </div>
               </div>
             </Card>
           </motion.div>
        </div>
      </div>
    </section>

    {/* Financial Management Lifecycle Section */}
    <section className="py-20 bg-slate-950/40 border-y border-slate-900/60">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-emerald-500/50"></div>
            <h3 className="text-emerald-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.5em] text-center">
              Financial Management Lifecycle
            </h3>
            <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-emerald-500/50"></div>
          </div>
          
          <div className="w-full max-w-5xl bg-slate-900/40 border border-slate-800/50 rounded-[2rem] p-6 md:p-10 backdrop-blur-md relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className="flex flex-row justify-between items-center overflow-x-auto no-scrollbar pb-2 md:pb-0">
              {[
                { 
                  label: 'Funding', 
                  icon: <Wallet size={24} />,
                  versions: ['Agency Banking (v1)', 'Mobile Money (v2)']
                },
                { label: 'Store', icon: <Store size={24} /> },
                { label: 'Spending', icon: <ShoppingCart size={24} /> },
                { label: 'Credit', icon: <Landmark size={24} /> }
              ].map((item, i) => (
                <React.Fragment key={item.label}>
                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 px-4 md:px-10 relative z-10 min-w-[120px] md:min-w-0 transition-all duration-300 hover:translate-y-[-2px]">
                    <div className="w-14 h-14 md:w-16 md:h-16 bg-emerald-600/10 rounded-2xl flex items-center justify-center text-emerald-500 border border-emerald-500/20 group-hover:border-emerald-500/40 shadow-inner group-hover:shadow-emerald-500/10 transition-all">
                      {item.icon}
                    </div>
                    <div className="flex flex-col items-center md:items-start space-y-1">
                      <span className="text-[10px] md:text-sm font-black text-white/90 uppercase tracking-widest">{item.label}</span>
                      {item.versions && (
                        <div className="flex flex-col items-center md:items-start">
                          {item.versions.map((v) => (
                            <span key={v} className="text-[7px] md:text-[9px] text-slate-500 font-mono uppercase tracking-tighter leading-none mb-0.5">
                              {v}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="h-0.5 w-0 group-hover:w-full bg-emerald-500/30 transition-all duration-500 hidden md:block"></div>
                    </div>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block h-12 w-px bg-gradient-to-b from-transparent via-slate-800 to-transparent"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Mechanical Empathy */}
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-12">Mechanical Empathy.</h2>
            <div className="relative pl-8 border-l-4 border-emerald-600 mb-12">
              <p className="text-2xl text-slate-300 italic leading-relaxed">
                "We tokenize the cost of trust so that wealth stays where it is created."
              </p>
              <p className="mt-4 text-slate-400 font-semibold">\\\\u2014 Vince Mountaga Diop (VMD), Engineer, Polytechnique de Thies.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Rural to Global</h4>
                  <p className="text-slate-400">Bridging the gap from a farmer\\\\u2019s field to a Diaspora\\\\u2019s wallet.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-indigo-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-indigo-400">
                  <Landmark size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Under-banked to Banked</h4>
                  <p className="text-slate-400">Turning a simple mobile device into a Tier-1 financial hub.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-emerald-900/30 rounded-full flex items-center justify-center flex-shrink-0 text-emerald-400">
                  <Shield size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Hunger to Harvest</h4>
                  <p className="text-slate-400">Digitizing supply chains to ensure food security through transparency.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img src={IMAGES.founder} alt="Engineer VMD" className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" />
            <div className="absolute -bottom-6 -right-6 bg-emerald-600 p-8 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-4xl font-black text-white">VMD</p>
              <p className="text-emerald-100 text-sm font-mono tracking-tighter uppercase">The Architect</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

const SolutionsPage = () => (
  <div className="pt-32 pb-24">
    <section className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mb-20"
      >
        <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-3 py-1 uppercase tracking-widest">The Solutions Portfolio</Badge>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">The BelCash Group: <br />Solutions Portfolio</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
          Engineering the rails for sovereign financial systems. We provide the infrastructure that powers national-scale growth across Africa.
        </p>
      </motion.div>

      {/* Solutions Grid */}
      <div className="space-y-32 mb-32">
        {/* Solution 1: Financial Infrastructure */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-white text-xl">1</div>
               <h2 className="text-3xl font-bold text-white">Financial Infrastructure (PaaS)</h2>
            </div>
            <div className="space-y-8">
               <div>
                  <h4 className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2 font-bold">The Problem</h4>
                  <p className="text-slate-300 text-lg leading-relaxed">Banks and MFIs in emerging markets struggle with high-cost legacy systems that cannot reach the unbanked.</p>
               </div>
               <div>
                  <h4 className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2 font-bold">The Solution</h4>
                  <p className="text-white text-2xl font-bold mb-4">HelloCash (v1\\\\u2013v3)</p>
                  <ul className="space-y-4 text-slate-400">
                    <li className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded-full bg-emerald-900/30 flex items-center justify-center shrink-0 mt-1">
                          <ChevronRight size={14} className="text-emerald-500" />
                       </div>
                       <span><strong className="text-slate-200">Agency Banking:</strong> Turn any shop into a bank branch (v1).</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded-full bg-emerald-900/30 flex items-center justify-center shrink-0 mt-1">
                          <ChevronRight size={14} className="text-emerald-500" />
                       </div>
                       <span><strong className="text-slate-200">Mobile Money:</strong> Next-gen digital wallet ecosystem for the unbanked (v2).</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded-full bg-emerald-900/30 flex items-center justify-center shrink-0 mt-1">
                          <ChevronRight size={14} className="text-emerald-500" />
                       </div>
                       <span><strong className="text-slate-200">NeoBanking:</strong> A full mobile money engine for the digital generation (v3).</span>
                    </li>
                  </ul>
               </div>
               <div className="p-8 bg-emerald-900/10 border border-emerald-900/30 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-600/10 blur-2xl group-hover:bg-emerald-600/20 transition-all"></div>
                  <h4 className="text-emerald-400 font-bold mb-2 uppercase text-xs tracking-widest">The Result</h4>
                  <p className="text-2xl font-bold text-white">80% adult penetration in the Somali region; over $7B USD processed to date.</p>
               </div>
            </div>
          </motion.div>
          <div className="relative">
             <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] blur-3xl animate-pulse"></div>
             <motion.div
               whileHover={{ y: -10 }}
               transition={{ duration: 0.5 }}
               className="relative z-10 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl shadow-emerald-900/20"
             >
                <img src={IMAGES.solutions_fin_infra} alt="Financial Infrastructure" className="w-full aspect-square object-cover" />
             </motion.div>
          </div>
        </div>

        {/* Solution 2: Global Liquidity & Remittance */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -inset-4 bg-indigo-500/10 rounded-[2.5rem] blur-3xl"></div>
             <motion.div
               whileHover={{ y: -10 }}
               transition={{ duration: 0.5 }}
               className="relative z-10 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl shadow-indigo-900/20"
             >
                <img src={IMAGES.solutions_remittance} alt="Global Remittance" className="w-full aspect-square object-cover" />
             </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-white text-xl">2</div>
               <h2 className="text-3xl font-bold text-white">Global Liquidity & Remittance</h2>
            </div>
            <div className="space-y-8">
               <div>
                  <h4 className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2 font-bold">The Problem</h4>
                  <p className="text-slate-300 text-lg leading-relaxed">High fees and slow settlement times for Diaspora transfers into Africa.</p>
               </div>
               <div>
                  <h4 className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2 font-bold">The Solution</h4>
                  <p className="text-white text-2xl font-bold mb-4">MamaPays</p>
                  <ul className="space-y-4 text-slate-400">
                    <li className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded-full bg-indigo-900/30 flex items-center justify-center shrink-0 mt-1">
                          <ChevronRight size={14} className="text-indigo-500" />
                       </div>
                       <span><strong className="text-slate-200">Visa/Cybersource Integration:</strong> High-security, real-time cross-border rails.</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded-full bg-indigo-900/30 flex items-center justify-center shrink-0 mt-1">
                          <ChevronRight size={14} className="text-emerald-500" />
                       </div>
                       <span><strong className="text-slate-200">Closed-Loop Spending:</strong> Money goes directly into the HelloCash ecosystem, ready for immediate use.</span>
                    </li>
                  </ul>
               </div>
               <div className="p-8 bg-indigo-900/10 border border-indigo-900/30 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-600/10 blur-2xl group-hover:bg-indigo-600/20 transition-all"></div>
                  <h4 className="text-indigo-400 font-bold mb-2 uppercase text-xs tracking-widest">The Result</h4>
                  <p className="text-2xl font-bold text-white">Direct "Inbound" funding that avoids external leakage and reduces FX risk.</p>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Solution 3: Trade Funding & Digital Commerce */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center font-bold text-white text-xl">3</div>
               <h2 className="text-3xl font-bold text-white">Trade Funding & Digital Commerce</h2>
            </div>
            <div className="space-y-8">
               <div>
                  <h4 className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2 font-bold">The Problem</h4>
                  <p className="text-slate-300 text-lg leading-relaxed">SMEs and Merchants lack the working capital to grow; NGOs lack transparent disbursement tools.</p>
               </div>
               <div>
                  <h4 className="text-emerald-500 font-mono text-xs uppercase tracking-widest mb-2 font-bold">The Solution</h4>
                  <p className="text-white text-2xl font-bold mb-4">HellOOpass OS</p>
                  <ul className="space-y-4 text-slate-400">
                    <li className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded-full bg-emerald-900/30 flex items-center justify-center shrink-0 mt-1">
                          <ChevronRight size={14} className="text-emerald-500" />
                       </div>
                       <span><strong className="text-slate-200">The 5-Model Engine:</strong> Marketplace, InStore, Distribution, eCommerce, and Sponsored (Gift Cards).</span>
                    </li>
                    <li className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded-full bg-emerald-900/30 flex items-center justify-center shrink-0 mt-1">
                          <ChevronRight size={14} className="text-emerald-500" />
                       </div>
                       <span><strong className="text-slate-200">Merchant BNPL:</strong> Short-term inventory loans (5% for 15 days) based on real transaction data.</span>
                    </li>
                  </ul>
               </div>
               <div className="p-8 bg-emerald-900/10 border border-emerald-900/30 rounded-3xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-600/10 blur-2xl group-hover:bg-emerald-600/20 transition-all"></div>
                  <h4 className="text-emerald-400 font-bold mb-2 uppercase text-xs tracking-widest">The Result</h4>
                  <p className="text-2xl font-bold text-white">Currently scaling to 50,000 merchants and 300,000 WFP beneficiaries.</p>
               </div>
            </div>
          </motion.div>
          <div className="relative">
             <div className="absolute -inset-4 bg-emerald-500/10 rounded-[2.5rem] blur-3xl"></div>
             <motion.div
               whileHover={{ y: -10 }}
               transition={{ duration: 0.5 }}
               className="relative z-10 rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl shadow-emerald-900/20"
             >
                <img src={IMAGES.solutions_commerce} alt="Trade Funding" className="w-full aspect-square object-cover" />
             </motion.div>
          </div>
        </div>
      </div>

      {/* The Intel Inside Advantage */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-32"
      >
        <Card className="bg-slate-900/40 border-slate-800 p-8 md:p-16 overflow-hidden relative rounded-[3rem]">
           <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Cpu size={400} className="text-emerald-500" />
           </div>
           <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-12 mb-16">
                 <div className="max-w-3xl">
                    <Badge className="mb-6 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-4 py-1.5 uppercase tracking-widest text-xs">The "Intel Inside" Advantage</Badge>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">BelCash does not compete with banks; <span className="text-emerald-500 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-600">we power them.</span></h2>
                    <p className="text-xl text-slate-300 leading-relaxed">Our solutions are designed as an Engineering House model, providing the stability and security required for national-scale infrastructure.</p>
                 </div>
                 <div className="shrink-0">
                    <div className="w-40 h-40 bg-emerald-600 rounded-3xl flex items-center justify-center font-black text-white text-6xl shadow-2xl shadow-emerald-900/40">B</div>
                 </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                 {[
                   { title: 'Processor Fees', text: 'We earn a clean 1% average on every transaction.', icon: <Zap className="text-emerald-400" size={32} /> },
                   { title: 'Multi-Market Scalability', text: 'One engine, three countries (Ethiopia, Kenya, Ivory Coast).', icon: <Globe className="text-emerald-400" size={32} /> },
                   { title: 'Platform-as-a-Service (PaaS)', text: 'Partners own the customer; we own the stability, security, and scalability.', icon: <Layers className="text-emerald-400" size={32} /> }
                 ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ scale: 1.02 }}
                      className="p-8 bg-slate-950/60 border border-slate-800 rounded-3xl"
                    >
                       <div className="mb-6 w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center border border-slate-800">{item.icon}</div>
                       <h4 className="text-white text-xl font-bold mb-3">{item.title}</h4>
                       <p className="text-slate-400 leading-relaxed">{item.text}</p>
                    </motion.div>
                 ))}
              </div>
           </div>
        </Card>
      </motion.div>

      {/* Strategic Summary for Stakeholders */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
           <div>
              <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Strategic Summary for Stakeholders</h2>
              <p className="text-slate-400 max-w-xl">A consolidated view of our key operations and institutional metrics across the continent.</p>
           </div>
           <div className="h-1 w-24 bg-emerald-600 hidden md:block"></div>
        </div>
        
        <div className="bg-slate-900/50 border border-slate-800 rounded-[2.5rem] overflow-hidden backdrop-blur-sm">
          <Table>
            <TableHeader className="bg-slate-950/50">
              <TableRow className="border-slate-800 hover:bg-transparent">
                <TableHead className="text-slate-300 font-bold py-8 px-8 text-sm uppercase tracking-widest">Solution</TableHead>
                <TableHead className="text-slate-300 font-bold py-8 px-8 text-sm uppercase tracking-widest">Primary Client</TableHead>
                <TableHead className="text-slate-300 font-bold py-8 px-8 text-sm uppercase tracking-widest">Key Metric</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { solution: 'National Disbursement', client: 'WFP / NGOs', metric: '300k Beneficiaries' },
                { solution: 'Merchant Growth', client: 'VitaBirr Group', metric: '50,000 SMEs' },
                { solution: 'Energy & Retail', client: 'Elton (Ivory Coast)', metric: 'Loyalty & Fleet Wallets' },
                { solution: 'Healthcare Access', client: 'PSK (Kenya)', metric: 'Pharma Gift Cards' }
              ].map((row, i) => (
                <TableRow key={i} className="border-slate-800 hover:bg-emerald-900/10 transition-colors">
                  <TableCell className="py-8 px-8 font-bold text-white text-lg">{row.solution}</TableCell>
                  <TableCell className="py-8 px-8 text-slate-400 text-lg">{row.client}</TableCell>
                  <TableCell className="py-8 px-8">
                     <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 font-mono font-bold">
                        {row.metric}
                     </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </motion.div>
    </section>
  </div>
);

const ImpactPage = () => (
  <div className="pt-32 pb-24">
    <section className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mb-20"
      >
        <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-3 py-1">THE INSTITUTIONAL PROOF</Badge>
        <h1 className="text-5xl font-bold text-white mb-6">Institutional Engineering. <br />Real Impact.</h1>
      </motion.div>

      <div className="space-y-32">
        {/* Somali Region Case Study */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Scaling Where Others Failed.</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We proved that financial inclusion is an engineering problem. In one of the most challenging environments on earth, BelCash deployed Stack 1 to reach the unbanked at an unprecedented scale.
            </p>
            <div className="p-8 bg-emerald-900/10 border border-emerald-900/30 rounded-2xl">
              <h4 className="text-emerald-400 font-bold mb-2 uppercase text-sm tracking-widest">The Result</h4>
              <p className="text-2xl font-bold text-white">80% adult penetration achieved in the Somali Region of Ethiopia.</p>
              <div className="mt-4 flex items-center text-slate-400 text-sm">
                <BarChart3 size={16} className="mr-2" />
                Moving billions through a resilient, community-focused digital network.
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
             <div className="h-64 bg-slate-800 rounded-2xl flex flex-col justify-center items-center text-center p-6 border border-slate-700">
                <p className="text-4xl font-black text-white mb-2">80%</p>
                <p className="text-slate-500 text-xs font-mono">ADULT PENETRATION</p>
             </div>
             <div className="h-64 bg-slate-900 rounded-2xl flex flex-col justify-center items-center text-center p-6 border border-slate-700 mt-12">
                <p className="text-4xl font-black text-emerald-500 mb-2">Billion+</p>
                <p className="text-slate-500 text-xs font-mono">DOLLAR VOLUME</p>
             </div>
          </div>
        </div>

        {/* Visa Partnership */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-[500px]">
            <img src={IMAGES.bridge} alt="Bridge" className="w-full h-full object-cover rounded-3xl opacity-80" />
            <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay rounded-3xl"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Global Standards, African Engineering.</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Our collaboration with Visa and Cybersource on Stack 2 proves that African-engineered solutions meet and exceed global institutional standards.
            </p>
            <div className="p-8 bg-emerald-900/10 border border-emerald-900/30 rounded-2xl">
              <h4 className="text-emerald-400 font-bold mb-2 uppercase text-sm tracking-widest">Global Recognition</h4>
              <p className="text-xl font-bold text-white">Officially recognized by Visa as a global leader in financial evolution.</p>
              <div className="mt-6 flex items-center space-x-4">
                <div className="bg-white/10 px-4 py-2 rounded font-black text-slate-200">VISA</div>
                <div className="bg-white/10 px-4 py-2 rounded font-black text-slate-200">CYBERSOURCE</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* SME Crisis */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Fixing the Working Capital Crisis.</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              The heartbeat of Africa is the merchant, yet they are stifled by a lack of liquidity. With Stack 3, we digitized the trust between suppliers and shopkeepers.
            </p>
            <div className="space-y-4">
               <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900 transition-colors">
                  <div className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-400 shrink-0"><Briefcase size={20} /></div>
                  <div>
                    <h5 className="font-bold text-white">Supplier Credit Card</h5>
                    <p className="text-sm text-slate-500">Instant liquidity for inventory stocking.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-900 transition-colors">
                  <div className="w-10 h-10 bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-400 shrink-0"><Zap size={20} /></div>
                  <div>
                    <h5 className="font-bold text-white">15-Day BNPL Model</h5>
                    <p className="text-sm text-slate-500">Short-term credit for trade velocity.</p>
                  </div>
               </div>
            </div>
          </motion.div>
          <div className="bg-slate-900 p-12 rounded-3xl border border-slate-800 relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/5 blur-3xl"></div>
             <p className="text-slate-500 font-mono text-sm mb-4">OXYGEN LEVEL IN SME ECOSYSTEM</p>
             <div className="h-4 w-full bg-slate-800 rounded-full mb-8">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-full bg-emerald-500 rounded-full"
                ></motion.div>
             </div>
             <p className="text-5xl font-black text-white">92%</p>
             <p className="text-slate-400 mt-2">Reduction in trade friction via HellOOpass.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-24">
    <section className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-3 py-1">THE ARCHITECTS</Badge>
        <h1 className="text-5xl font-bold text-white mb-8">Engineering with Purpose. <br />Scaling with Integrity.</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-slate-800 grayscale">
            <img src={IMAGES.founder} alt="VMD Founder" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-10 -left-10 w-40 h-40 border-l-4 border-t-4 border-emerald-600 rounded-tl-3xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-4 border-b-4 border-emerald-600 rounded-br-3xl"></div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">The Legacy of VMD</h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            Vince Mountaga Diop (VMD) is an engineer trained at the prestigious Polytechnique de Thies. For 20 years, he has viewed code as a tool for national independence and infrastructure as the highest form of patriotism.
          </p>
          <div className="p-8 bg-slate-900 border-l-4 border-emerald-600 italic">
            <p className="text-2xl text-slate-200">
              "We don't build platforms to extract value; we build them as vectors of sovereignty."
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
        <div className="grid md:grid-cols-2 gap-16 relative z-10">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">The Elite 11</h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              BelCash is a "Special Forces" engineering unit. We don't scale through headcount; we scale through Architectural Excellence.
            </p>
            <div className="flex flex-wrap gap-4">
               {[1,2,3,4,5,6,7,8,9,10,11].map(i => (
                 <div key={i} className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xs border border-emerald-400/50">
                    OP_{i}
                 </div>
               ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <Card className="bg-slate-950 border-slate-800 p-8">
              <p className="text-slate-300 text-lg mb-4">
                "Our lean, 11-man core manages national-scale rails that power millions of lives daily. This is the definition of high-leverage engineering."
              </p>
              <div className="h-px w-20 bg-emerald-600 mb-4"></div>
              <p className="text-sm font-mono text-slate-500 uppercase tracking-widest">Engineering Standard Protocol</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const DeveloperPage = ({ setActivePage }: { setActivePage: (id: string) => void }) => (
  <div className="pt-32 pb-24">
    <section className="container mx-auto px-6">
      <div className="grid lg:grid-cols-3 gap-16 items-start mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <Badge className="mb-4 bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-3 py-1">DEVELOPER PORTAL</Badge>
          <h1 className="text-5xl font-bold text-white mb-8 leading-tight tracking-tight">Plug into the <br />Sovereign Engine.</h1>
          <p className="text-slate-400 text-lg mb-12 leading-relaxed max-w-lg">
            BelCash is API-First. We provide the high-concurrency rails for Banks, Governments, and Corporations to integrate national-scale finance into their existing systems.
          </p>
          
          <div className="flex flex-col gap-4">
            <Button className="bg-emerald-600 hover:bg-emerald-500 h-14 px-8 text-lg font-bold" onClick={() => setActivePage('contact')}>
              Request API Documentation
              <Code className="ml-2" />
            </Button>
            <Button variant="outline" className="h-14 px-8 text-lg font-bold border-slate-700 text-slate-300" onClick={() => setActivePage('contact')}>
              Access Sandbox
              <ChevronRight className="ml-2" />
            </Button>
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: 'The Gateway', icon: <Network />, text: 'Proprietary router bridging ISO 8583 with RESTful JSON.' },
            { title: 'Identity', icon: <Fingerprint />, text: 'Biometric ISO standards as utilized by the WFP.' },
            { title: 'Security', icon: <Shield />, text: 'AES-256 encryption and PCI-DSS compliance.' },
            { title: 'Endpoints', icon: <Cpu />, text: 'Dedicated modules for /wallet, /remit, and /bnpl.' },
            { title: 'Billing', icon: <CreditCard />, text: 'Automated invoicing, recurring payments, and tax-compliant billing cycles.' },
            { title: 'Payment Processing', icon: <Zap />, text: 'Unified API for credit cards, mobile money, and real-time bank transfers.' },
            { title: 'Smart Wallets', icon: <Wallet />, text: 'Programmable digital accounts with multi-signature security and conditional logic.' },
            { title: 'IOT', icon: <Smartphone />, text: 'Machine-to-machine payment protocols for autonomous devices and smart infrastructure.' },
            { title: 'AI Agents', icon: <Bot />, text: 'Neural-network driven financial autonomous agents for risk scoring and liquidity management.' },
            { title: 'ACH Automated Clearing House', icon: <Landmark />, text: 'High-volume, batch-processed electronic fund transfers for payroll, vendor payments, and recurring consumer billing.' },
          ].map((spec, idx) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="bg-slate-900 border-slate-800 p-5 hover:bg-slate-800 transition-colors h-full">
                <div className="text-emerald-500 mb-3">{spec.icon}</div>
                <h4 className="text-white font-bold mb-1.5">{spec.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-mono">{spec.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-slate-950 rounded-2xl border border-slate-800 p-8 font-mono">
        <div className="flex items-center space-x-2 mb-6 border-b border-slate-800 pb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-slate-500 text-xs ml-4">belcash-api-explorer.sh</span>
        </div>
        <div className="space-y-4">
          <p className="text-emerald-500 text-sm"># Initializing sovereign ledger connection...</p>
          <p className="text-slate-400 text-sm">$ curl -X POST https://api.belcash.com/v1/auth \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</p>
          <p className="text-slate-400 text-sm">    -H "Authorization: Bearer $SOVEREIGN_TOKEN" \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\</p>
          <p className="text-slate-400 text-sm">    -d '{`{"grant_type": "api_access"}`}'</p>
          <p className="text-emerald-400 text-sm">{`{ "status": "authorized", "scope": ["national_ledger", "remit_v2", "bnpl_credit"] }`}</p>
          <div className="animate-pulse flex space-x-2">
            <span className="text-white">_</span>
          </div>
        </div>
      </div>
    </section>
  </div>
);

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-emerald-500 selection:text-white overflow-x-hidden">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
            {activePage === 'solutions' && <SolutionsPage />}
            {activePage === 'models' && <ModelsPage />}
            {activePage === 'impact' && <ImpactPage />}
            {activePage === 'about' && <AboutPage />}
            {activePage === 'dev' && <DeveloperPage setActivePage={setActivePage} />}
            {activePage === 'contact' && <ContactPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />
      <Toaster position="bottom-right" theme="dark" />
    </div>
  );
}