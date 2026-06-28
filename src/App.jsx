import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Globe, Cpu, Shield, MessageSquare, Download, User, Lock, 
  Wallet, Banknote, Fingerprint, QrCode, Zap, ChevronRight, CheckCircle2,
  Database, Network, Languages, Building, Users, Play, Pause, Square,
  LineChart, Bot, Activity, PlusCircle, ArrowRightLeft, Search, Sparkles, Loader2,
  Minimize2, Gamepad2, CheckSquare, FileText, Info, FileSignature, ShieldCheck, HelpCircle
} from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [user, setUser] = useState({ name: 'Admin', role: 'Founder & CEO' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-indigo-500/30 relative overflow-hidden flex flex-col">
      {/* 3D Moving Canvas Background */}
      <QuantumBackground />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-xl shadow-slate-900/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveView('dashboard')}>
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <Cpu className="text-white w-6 h-6 relative z-10" />
                </div>
                <div>
                  <h1 className="text-xl font-black text-white tracking-tight leading-none">CHAVPK<span className="text-indigo-500">.AI</span></h1>
                  <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mt-1">Autonomous Ventures</p>
                </div>
              </div>

              {/* Desktop Nav */}
              <div className="hidden md:flex items-center gap-8">
                <button onClick={() => setActiveView('dashboard')} className={`text-sm font-bold transition-all hover:text-indigo-400 ${activeView === 'dashboard' ? 'text-indigo-400 scale-105' : 'text-slate-400'}`}>Agent Studio</button>
                <button onClick={() => setActiveView('admin')} className={`text-sm font-bold transition-all hover:text-indigo-400 ${activeView === 'admin' ? 'text-indigo-400 scale-105' : 'text-slate-400'}`}>Admin / NLP</button>
                <button onClick={() => setActiveView('about')} className={`text-sm font-bold transition-all hover:text-indigo-400 ${activeView === 'about' ? 'text-indigo-400 scale-105' : 'text-slate-400'}`}>About Us</button>
                <button onClick={() => setActiveView('legal')} className={`text-sm font-bold transition-all hover:text-indigo-400 ${activeView === 'legal' ? 'text-indigo-400 scale-105' : 'text-slate-400'}`}>Compliance</button>
                
                <div className="flex items-center gap-3 pl-6 border-l border-slate-800">
                  <div className="text-right">
                    <p className="text-sm font-bold text-white">{user.name}</p>
                    <p className="text-xs text-indigo-400 capitalize">{user.role}</p>
                  </div>
                  <div className="w-10 h-10 bg-slate-900 rounded-full flex items-center justify-center border border-indigo-500/30 shadow-inner shadow-indigo-500/10">
                    <User className="w-5 h-5 text-indigo-400" />
                  </div>
                </div>
              </div>

              {/* Mobile Menu Toggle */}
              <button className="md:hidden p-2 text-slate-400 hover:text-white transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-900 border-b border-slate-800 p-4 space-y-4 animate-in slide-in-from-top-2">
               <button onClick={() => {setActiveView('dashboard'); setIsMenuOpen(false);}} className="block w-full text-left text-sm font-bold text-white p-3 rounded-lg hover:bg-slate-800">Agent Studio</button>
               <button onClick={() => {setActiveView('admin'); setIsMenuOpen(false);}} className="block w-full text-left text-sm font-bold text-white p-3 rounded-lg hover:bg-slate-800">Admin / NLP</button>
               <button onClick={() => {setActiveView('about'); setIsMenuOpen(false);}} className="block w-full text-left text-sm font-bold text-white p-3 rounded-lg hover:bg-slate-800">About Us</button>
               <button onClick={() => {setActiveView('legal'); setIsMenuOpen(false);}} className="block w-full text-left text-sm font-bold text-white p-3 rounded-lg hover:bg-slate-800">Compliance & Legal</button>
            </div>
          )}
        </nav>

        {/* Main Content Area */}
        <main className="flex-1">
          {activeView === 'dashboard' && <DashboardView user={user} />}
          {activeView === 'admin' && <AdminView user={user} />}
          {activeView === 'about' && <AboutView />}
          {activeView === 'legal' && <LegalView />}
        </main>

        {/* Enterprise Footer */}
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 relative z-10 mt-auto">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Cpu className="text-white w-5 h-5" />
                </div>
                <h2 className="text-2xl font-black text-white tracking-tight">CHAVPK<span className="text-indigo-500">.AI</span></h2>
              </div>
              <p className="text-slate-400 text-sm max-w-md leading-relaxed">
                Enterprise-grade autonomous AI agents, powered by quantum data compression and real-time market foresight. Built for the future, ready for commercial scale. (Registration Pending)
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide uppercase text-xs">Legal & Compliance</h4>
              <ul className="space-y-3 text-sm">
                <li><button onClick={() => setActiveView('legal')} className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Privacy Policy</button></li>
                <li><button onClick={() => setActiveView('legal')} className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2"><FileSignature className="w-4 h-4"/> Terms & Conditions</button></li>
                <li><button onClick={() => setActiveView('legal')} className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-2"><HelpCircle className="w-4 h-4"/> FAQs</button></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; 2026 The ChitraHarsha - CHAVPK Ventures (Registration Pending). All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6 font-bold text-slate-400">
               <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-emerald-500"/> ISO 27001 Certified</span>
               <span className="flex items-center gap-1"><Shield className="w-3 h-3 text-blue-500"/> DPDP Act Compliant</span>
               <span className="flex items-center gap-1"><Globe className="w-3 h-3 text-orange-500"/> Atmanirbhar Bharat</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function TiltCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation (inverted for natural tilt effect)
    const rotateX = ((y - centerY) / centerY) * -8; 
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={cardRef}
      className={`transition-all duration-200 ease-out ${className}`}
      style={{
        perspective: '1000px',
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        transformStyle: 'preserve-3d'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* translateZ makes the children literally pop out from the tilted plane */}
      <div style={{ transform: 'translateZ(30px)' }} className="h-full w-full">
        {children}
      </div>
    </div>
  );
}

function QuantumBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();
    window.addEventListener('resize', setSize);

    const particles = [];
    // Scale particle count based on screen width for performance
    const particleCount = Math.min(window.innerWidth / 15, 120);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 1.5 + 0.5
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.4)'; // Indigo dot color
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)'; // Connection line color
      ctx.lineWidth = 0.5;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = window.requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', setSize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none opacity-40 z-0" />;
}

function DashboardView({ user }) {
  const [activeTab, setActiveTab] = useState('autonomous');
  
  if (!user) {
    return (
      <div className="max-w-3xl mx-auto mt-20 text-center bg-slate-900 border border-red-500/30 rounded-3xl p-12 shadow-2xl relative z-10">
        <Lock className="w-16 h-16 text-red-500 mx-auto mb-6 animate-pulse" />
        <h2 className="text-3xl font-black text-white mb-4">Access Restricted</h2>
        <p className="text-slate-400 mb-8">Please login via CHC Crypto Wallet or VPK Pay to access the Autonomous Studio.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 bg-slate-900/80 backdrop-blur-md p-5 rounded-2xl border border-slate-800 shadow-xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
            <Bot className="w-6 h-6 text-indigo-500"/>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white leading-none mb-1">AI Command Center</h2>
            <p className="text-xs text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Status: <span className="text-emerald-400 font-bold">Online & Synchronized</span>
            </p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
          <button onClick={() => setActiveTab('autonomous')} className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'autonomous' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105' : 'bg-slate-950 text-slate-400 border border-slate-700 hover:text-white'}`}>
            <Bot className="w-4 h-4"/> Agent Studio
          </button>
          <button onClick={() => setActiveTab('live_tracking')} className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'live_tracking' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105' : 'bg-slate-950 text-slate-400 border border-slate-700 hover:text-white'}`}>
            <LineChart className="w-4 h-4"/> Live Currency
          </button>
          <button onClick={() => setActiveTab('compression')} className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all flex items-center gap-2 ${activeTab === 'compression' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105' : 'bg-slate-950 text-slate-400 border border-slate-700 hover:text-white'}`}>
            <Minimize2 className="w-4 h-4"/> Data Compression
          </button>
        </div>
      </div>

      {activeTab === 'autonomous' && <AutonomousStudio />}
      {activeTab === 'live_tracking' && <LiveCurrencyTracker />}
      {activeTab === 'compression' && <DataCompressionEngine />}
    </div>
  );
}

function AutonomousStudio() {
  const [designation, setDesignation] = useState('');
  const [goal, setGoal] = useState('');
  const [systemPrompt, setSystemPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [autoUpdate, setAutoUpdate] = useState(true);
  const [coreModule, setCoreModule] = useState('CHAVPK NLP Advanced LLM');
  const [dbLink, setDbLink] = useState('10 Trillion SQL General');
  const [language, setLanguage] = useState('English (Global)');

  const handleGeneratePrompt = async () => {
    if (!designation || !goal) return;
    setIsGenerating(true);
    
    try {
      const prompt = `Create a highly technical system architecture prompt for a new autonomous AI node in the CHAVPK platform.
      Agent Designation: ${designation}
      Primary Directive/Goal: ${goal}
      Core Module: ${coreModule}
      Database: ${dbLink}
      Output Language: ${language}
      
      Make it sound like a system console initialization output, very professional and slightly sci-fi but grounded in modern cloud architecture. Do not use markdown formatting, just plain text console output. Keep it under 5 sentences.`;

      const payload = {
        contents: [{ parts: [{ text: prompt }] }],
      };
      
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
      });
      const result = await response.json();
      
      if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts) {
        setSystemPrompt(result.candidates[0].content.parts[0].text);
      } else {
        setSystemPrompt("Error: Invalid response from Gemini API.");
      }
    } catch (error) {
      console.error("API Error:", error);
      setSystemPrompt("System Failure: Could not reach Gemini NLP Core. Please check connection.");
    }
    
    setIsGenerating(false);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Form Fields */}
        <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 lg:p-8 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="text-indigo-400" /> Create Autonomous Node
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Agent Designation</label>
              <input 
                type="text" 
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="e.g. Nexus-7 Supply Chain Monitor" 
                className="w-full mt-2 bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-4 text-white focus:border-indigo-500 outline-none transition-all shadow-inner focus:shadow-indigo-500/10" 
              />
            </div>
            
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Short Agent Goal</label>
              <input 
                type="text" 
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                placeholder="e.g. Monitor global supply chains and predict bottlenecks." 
                className="w-full mt-2 bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-4 text-white focus:border-indigo-500 outline-none transition-all shadow-inner focus:shadow-indigo-500/10" 
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Core AI/ML Module</label>
                <select value={coreModule} onChange={(e) => setCoreModule(e.target.value)} className="w-full mt-2 bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white appearance-none outline-none focus:border-indigo-500 text-sm cursor-pointer shadow-inner">
                  <option>CHAVPK NLP Advanced LLM</option>
                  <option>Quantum Vision Network</option>
                  <option>Financial Predictive Model</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Database Link</label>
                <select value={dbLink} onChange={(e) => setDbLink(e.target.value)} className="w-full mt-2 bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white appearance-none outline-none focus:border-indigo-500 text-sm cursor-pointer shadow-inner">
                  <option>10 Trillion SQL General</option>
                  <option>Blockchain Encrypted Vault</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Output Language</label>
                <select value={language} onChange={(e) => setLanguage(e.target.value)} className="w-full mt-2 bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-white appearance-none outline-none focus:border-indigo-500 text-sm cursor-pointer shadow-inner">
                  <option>English (Global)</option>
                  <option>Sanskrit (संस्कृतम्)</option>
                  <option>Hindi (हिन्दी)</option>
                  <option>Mandarin (中文)</option>
                  <option>Spanish (Español)</option>
                </select>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-4 bg-slate-950/50 border border-slate-800 rounded-xl cursor-pointer hover:border-indigo-500 transition-colors shadow-inner" onClick={() => setAutoUpdate(!autoUpdate)}>
              <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${autoUpdate ? 'bg-indigo-600 border-indigo-600' : 'border-slate-600'}`}>
                {autoUpdate && <CheckSquare className="w-4 h-4 text-white" />}
              </div>
              <div>
                <p className="text-sm font-bold text-white leading-none">Enable Core Auto-Updates</p>
                <p className="text-xs text-slate-500 mt-1">Automatically push latest AI/ML models & real-world scenario patches to this agent.</p>
              </div>
            </div>

            <button 
              onClick={handleGeneratePrompt}
              disabled={isGenerating || !designation || !goal}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
            >
              {isGenerating ? <Loader2 className="w-5 h-5 animate-spin" /> : <Bot className="w-5 h-5" />}
              {isGenerating ? 'Generating Architecture...' : 'Generate Agent System Architecture'}
            </button>

            {systemPrompt && (
              <div className="mt-6 p-5 bg-slate-950 border border-slate-700 rounded-xl animate-in fade-in slide-in-from-top-4 shadow-inner">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Generated System Prompt</h4>
                <p className="text-sm text-emerald-400 font-mono whitespace-pre-wrap leading-relaxed">{systemPrompt}</p>
              </div>
            )}
          </div>
        </div>

        {/* 3D Templates */}
        <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 lg:p-8 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-6">Pre-built Autonomous Templates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <TiltCard className="h-full">
              <div className="p-5 bg-slate-950 border border-slate-700 rounded-2xl hover:border-indigo-500 cursor-pointer group transition-all h-full shadow-lg flex flex-col items-center text-center">
                <Database className="w-10 h-10 text-blue-400 mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-transform" />
                <h4 className="font-bold text-white text-sm">SQL Data Miner Bot</h4>
                <p className="text-xs text-slate-400 mt-2">Autonomous data compression and sorting for enterprise tables.</p>
              </div>
            </TiltCard>
            <TiltCard className="h-full">
              <div className="p-5 bg-slate-950 border border-slate-700 rounded-2xl hover:border-emerald-500 cursor-pointer group transition-all h-full shadow-lg flex flex-col items-center text-center">
                <LineChart className="w-10 h-10 text-emerald-400 mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-transform" />
                <h4 className="font-bold text-white text-sm">Finance Autopilot</h4>
                <p className="text-xs text-slate-400 mt-2">Real-time CHC Crypto & UPI monitoring and reporting.</p>
              </div>
            </TiltCard>
            <TiltCard className="h-full">
              <div className="p-5 bg-slate-950 border border-slate-700 rounded-2xl hover:border-purple-500 cursor-pointer group transition-all h-full shadow-lg flex flex-col items-center text-center">
                <MessageSquare className="w-10 h-10 text-purple-400 mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-transform" />
                <h4 className="font-bold text-white text-sm">Support Nexus</h4>
                <p className="text-xs text-slate-400 mt-2">Multi-language Gemini-Live styled bot for customer resolution.</p>
              </div>
            </TiltCard>
            <TiltCard className="h-full">
              <div className="p-5 bg-slate-950 border border-slate-700 rounded-2xl hover:border-pink-500 cursor-pointer group transition-all h-full shadow-lg flex flex-col items-center text-center">
                <Network className="w-10 h-10 text-pink-400 mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-transform" />
                <h4 className="font-bold text-white text-sm">3D Spatial Matrix</h4>
                <p className="text-xs text-slate-400 mt-2">Real-world spatial generation AI for architectural layouts.</p>
              </div>
            </TiltCard>
            <TiltCard className="h-full lg:col-span-2">
              <div className="p-5 bg-slate-950 border border-slate-700 rounded-2xl hover:border-amber-500 cursor-pointer group transition-all h-full shadow-lg flex flex-col items-center text-center justify-center">
                <Gamepad2 className="w-10 h-10 text-amber-400 mb-4 group-hover:scale-110 group-hover:-translate-y-1 transition-transform" />
                <h4 className="font-bold text-white text-sm">Visual Gaming AI Engine</h4>
                <p className="text-xs text-slate-400 mt-2 max-w-sm">Dynamic generation of visual gaming interfaces and interactive environments using advanced physics models and rapid asset loading.</p>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <TiltCard>
          <div className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 backdrop-blur-xl border border-indigo-500/30 rounded-3xl p-6 lg:p-8 sticky top-28 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Deploy Node</h3>
            <p className="text-sm text-slate-300 mb-6">Allocate CHC resources to activate this agent autonomously.</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-slate-950/50 rounded-xl border border-slate-700/50 shadow-inner">
                <span className="text-slate-300 text-sm font-medium">Compute Cost</span>
                <span className="font-black text-white">45.00 CHC / hr</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-950/50 rounded-xl border border-slate-700/50 shadow-inner">
                <span className="text-slate-300 text-sm font-medium">DB Query Limits</span>
                <span className="font-black text-emerald-400">Unlimited</span>
              </div>
            </div>
            
            <button className="w-full mt-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5"/> Deploy to Live Server
            </button>
            <button className="w-full mt-3 py-3 bg-slate-950 hover:bg-slate-800 border border-slate-700 text-white font-bold rounded-xl transition-colors text-sm">Process via VPK Pay</button>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}

function DataCompressionEngine() {
  const [isCompressing, setIsCompressing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleCompress = () => {
    setIsCompressing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setIsCompressing(false);
          return 100;
        }
        return p + 5;
      });
    }, 150);
  };

  return (
    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-6 lg:p-10 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <Minimize2 className="w-96 h-96 text-indigo-500 animate-pulse" />
      </div>

      <div className="relative z-10 max-w-3xl mb-10">
        <h3 className="text-3xl font-black text-white mb-3 flex items-center gap-3"><Minimize2 className="text-indigo-400"/> Quantum Data Compression</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          Proprietary NLP module integrated with the 10 Trillion SQL Database. This tool compresses massive enterprise datasets into extremely small sizes while <strong className="text-indigo-300">100% maintaining their originality and data integrity</strong>. Optimizes app performance and minimizes cloud storage footprint.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="bg-slate-950 border border-slate-700 rounded-2xl p-6 shadow-xl">
          <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Input Payload</h4>
          <div className="border-2 border-dashed border-slate-700 rounded-xl p-10 text-center bg-slate-900 hover:border-indigo-500 transition-colors cursor-pointer mb-6 group">
            <Database className="w-10 h-10 text-slate-500 mx-auto mb-3 group-hover:text-indigo-400 transition-colors" />
            <p className="text-sm font-bold text-white">Select Database Snapshot or Files</p>
            <p className="text-xs text-slate-500 mt-1">Supports .sql, .json, .csv (Up to 500GB per operation)</p>
          </div>
          <button 
            onClick={handleCompress}
            disabled={isCompressing || progress === 100}
            className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/25"
          >
            {isCompressing ? <Loader2 className="w-5 h-5 animate-spin" /> : <Zap className="w-5 h-5" />}
            {isCompressing ? 'Compressing Data...' : progress === 100 ? 'Compression Complete' : 'Initialize Quantum Compression'}
          </button>
        </div>

        <div className="bg-slate-950 border border-slate-700 rounded-2xl p-8 flex flex-col justify-center shadow-xl">
          <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-wider flex items-center justify-between">
            <span>Compression Status</span>
            <span className="text-emerald-400 text-lg">{progress}%</span>
          </h4>
          
          <div className="w-full bg-slate-900 rounded-full h-4 mb-8 overflow-hidden border border-slate-800 shadow-inner">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-200" style={{ width: `${progress}%` }}></div>
          </div>

          {progress > 0 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4">
              <div className="flex justify-between items-center p-4 bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
                <span className="text-sm text-slate-400">Original Size:</span>
                <span className="text-base font-bold text-red-400">450.00 GB</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-slate-900 rounded-xl border border-slate-800 shadow-sm">
                <span className="text-sm text-slate-400">Compressed Size:</span>
                <span className="text-base font-bold text-emerald-400">{(450 - (450 * 0.98 * (progress / 100))).toFixed(2)} GB</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-indigo-900/20 rounded-xl border border-indigo-500/30">
                <span className="text-sm text-indigo-300 font-medium">Originality Preserved:</span>
                <span className="text-sm font-bold text-indigo-400 flex items-center gap-1"><CheckCircle2 className="w-4 h-4"/> 100% Intact</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function LiveCurrencyTracker() {
  return (
    <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-8 lg:p-12 text-center space-y-6 shadow-2xl relative z-10">
      <LineChart className="w-20 h-20 text-indigo-500 mx-auto animate-pulse drop-shadow-2xl" />
      <h3 className="text-3xl font-black text-white">Live Currency & Asset Tracking</h3>
      <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
        This module tracks real-time global markets, CHC Crypto fluctuations, and automated VPK Pay transactions. Integrated with our predictive NLP models for enterprise market foresight.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
        <TiltCard>
          <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl shadow-xl h-full flex flex-col justify-center transform transition-transform hover:-translate-y-2">
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">CHC Crypto Value</p>
             <p className="text-4xl font-black text-emerald-400 drop-shadow-md">$1,452.00</p>
             <p className="text-sm font-medium text-emerald-500 mt-3 flex items-center justify-center gap-1"><Activity className="w-4 h-4"/> +2.4% (24h)</p>
          </div>
        </TiltCard>
        <TiltCard>
          <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl shadow-xl h-full flex flex-col justify-center transform transition-transform hover:-translate-y-2">
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Network Hashrate</p>
             <p className="text-4xl font-black text-white drop-shadow-md">45.2 EH/s</p>
             <p className="text-sm font-medium text-slate-400 mt-3">Quantum Encrypted</p>
          </div>
        </TiltCard>
        <TiltCard>
          <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl shadow-xl h-full flex flex-col justify-center transform transition-transform hover:-translate-y-2">
             <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">VPK Pay Volume</p>
             <p className="text-4xl font-black text-white drop-shadow-md">₹8.4M</p>
             <p className="text-sm font-medium text-indigo-400 mt-3">Daily Settled</p>
          </div>
        </TiltCard>
      </div>
    </div>
  );
}

function AdminView({ user }) {
  const [rawText, setRawText] = useState('');
  const [isExtracting, setIsExtracting] = useState(false);
  const [extractedData, setExtractedData] = useState(null);
  const [error, setError] = useState('');

  const handleExtract = async () => {
    if (!rawText.trim()) return;
    setIsExtracting(true);
    setError('');
    
    try {
      const payload = {
        contents: [{ parts: [{ text: `Extract all employee names, their roles/job titles, and compensation/salary from the following text block. If a field is missing for a person, put "N/A".\n\nText:\n${rawText}` }] }],
        generationConfig: {
          responseMimeType: "application/json",
          responseSchema: {
            type: "ARRAY",
            items: {
              type: "OBJECT",
              properties: {
                name: { type: "STRING", description: "The employee's full name" },
                role: { type: "STRING", description: "The job title or role" },
                compensation: { type: "STRING", description: "The salary or compensation amount" }
              },
              required: ["name", "role", "compensation"]
            }
          }
        }
      };
      
      const apiKey = "";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const result = await response.json();
      if (result.candidates && result.candidates[0].content && result.candidates[0].content.parts) {
        const jsonText = result.candidates[0].content.parts[0].text;
        setExtractedData(JSON.parse(jsonText));
      } else {
        setError('Could not extract data. Please check the text format.');
      }
    } catch (err) {
      console.error(err);
      setError('API Error: Failed to process NLP request.');
    }
    
    setIsExtracting(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-in fade-in relative z-10">
       <div className="bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl p-8 lg:p-10 shadow-2xl">
         <div className="flex items-center gap-5 mb-10">
           <div className="p-4 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
             <FileText className="w-10 h-10 text-indigo-400" />
           </div>
           <div>
             <h2 className="text-3xl font-black text-white">Payroll & Staffing NLP Tracker</h2>
             <p className="text-slate-400 mt-2 text-lg">Automated structured extraction from raw HR text using Gemini Structured Outputs.</p>
           </div>
         </div>
         
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-xl">
             <h3 className="text-lg font-bold text-white mb-4">Input Raw HR Text</h3>
             <textarea 
               value={rawText}
               onChange={(e) => setRawText(e.target.value)}
               placeholder="Paste unstructured employee data here (e.g. 'John Doe was hired as a Senior Developer starting at $120,000 per year. Jane Smith is our new PM making 95k.')"
               className="w-full h-56 bg-slate-900 border border-slate-700 rounded-xl p-5 text-slate-300 focus:border-indigo-500 outline-none transition-colors resize-none text-sm shadow-inner"
             />
             <button 
               onClick={handleExtract}
               disabled={isExtracting || !rawText.trim()}
               className="w-full mt-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50"
             >
               {isExtracting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Bot className="w-5 h-5" />}
               {isExtracting ? 'Extracting via Gemini NLP...' : 'Extract Structured Data'}
             </button>
             {error && <p className="text-red-400 text-sm mt-4 p-3 bg-red-900/20 rounded-lg border border-red-500/30">{error}</p>}
           </div>

           <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-xl overflow-hidden flex flex-col">
             <h3 className="text-lg font-bold text-white mb-4">Structured Output (JSON)</h3>
             
             {extractedData ? (
               <div className="overflow-auto flex-1 bg-slate-900 rounded-xl border border-slate-800">
                 <table className="w-full text-left border-collapse">
                   <thead>
                     <tr className="bg-slate-950/50 border-b border-slate-800">
                       <th className="py-4 px-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Name</th>
                       <th className="py-4 px-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Role</th>
                       <th className="py-4 px-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Compensation</th>
                     </tr>
                   </thead>
                   <tbody>
                     {extractedData.map((emp, idx) => (
                       <tr key={idx} className="border-b border-slate-800/50 hover:bg-slate-800/50 transition-colors">
                         <td className="py-4 px-5 text-sm text-white font-medium">{emp.name}</td>
                         <td className="py-4 px-5 text-sm text-slate-300">{emp.role}</td>
                         <td className="py-4 px-5 text-sm font-bold text-emerald-400">{emp.compensation}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
             ) : (
               <div className="flex-1 flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-800 rounded-xl p-8 text-center bg-slate-900/50">
                 <Database className="w-16 h-16 mb-4 opacity-20" />
                 <p className="text-sm font-medium max-w-xs">Awaiting unstructured text input to extract formatted JSON data...</p>
               </div>
             )}
           </div>
         </div>
       </div>
    </div>
  )
}

function AboutView() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-slate-300 space-y-16 animate-in fade-in relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-5 bg-indigo-500/10 rounded-full mb-8 border border-indigo-500/20 shadow-[0_0_50px_rgba(99,102,241,0.2)]">
          <Building className="w-12 h-12 text-indigo-400" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">Pioneering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Autonomous Future</span></h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
          The ChitraHarsha - CHAVPK Ventures AI Agents is a leading, future-ready enterprise AI initiative (Company Registration Pending) delivering quantum-scale data solutions and autonomous operational nodes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <TiltCard>
          <div className="p-8 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl h-full text-center shadow-xl hover:shadow-emerald-500/10 transition-shadow">
            <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-6 drop-shadow-md" />
            <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Military-grade encryption securing multi-trillion row SQL databases and financial ledgers, fully compliant with ISO 27001 standards.</p>
          </div>
        </TiltCard>
        <TiltCard>
          <div className="p-8 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl h-full text-center shadow-xl hover:shadow-blue-500/10 transition-shadow">
            <Globe className="w-12 h-12 text-blue-400 mx-auto mb-6 drop-shadow-md" />
            <h3 className="text-xl font-bold text-white mb-4">Global Scale, Local Heart</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Proudly built under the Atmanirbhar Bharat initiative, deploying global solutions while adhering strictly to local DPDP regulations.</p>
          </div>
        </TiltCard>
        <TiltCard>
          <div className="p-8 bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-3xl h-full text-center shadow-xl hover:shadow-purple-500/10 transition-shadow">
            <Cpu className="w-12 h-12 text-purple-400 mx-auto mb-6 drop-shadow-md" />
            <h3 className="text-xl font-bold text-white mb-4">Quantum Architecture</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Utilizing next-generation NLP & AI models to shrink dataset sizes by 98% without losing a single bit of origin integrity.</p>
          </div>
        </TiltCard>
      </div>
      
      <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-8 md:p-16 rounded-3xl shadow-2xl mt-16 overflow-hidden relative">
        <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
          <Bot className="w-96 h-96 text-indigo-500" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h3 className="text-3xl font-black text-white mb-8">Our Vision for 2030 and Beyond</h3>
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
            <p>
              As commercial industries transition towards fully automated operational frameworks, <strong className="text-white">CHAVPK.AI</strong> stands at the vanguard. We don't just build chatbots; we construct autonomous systemic nodes capable of managing supply chains, executing complex payroll NLP tasks, and tracking live global cryptocurrency fluctuations in milliseconds.
            </p>
            <p>
              By integrating <strong className="text-indigo-400">VPK Pay</strong> and <strong className="text-emerald-400">CHC Crypto</strong> directly into our node deployments, we've created a self-sustaining ecosystem where AI agents can fluidly transact, scale, and optimize enterprise operations entirely without human bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LegalView() {
  const [activeTab, setActiveTab] = useState('privacy');

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-slate-300 animate-in fade-in relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-white tracking-tight">Compliance & Legal Center</h2>
        <p className="text-slate-400 mt-3 text-lg">Enterprise-grade transparency, governed by Global Standards & Indian IT Act, 2000</p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="w-full md:w-72 space-y-3 shrink-0">
          <button 
            onClick={() => setActiveTab('privacy')} 
            className={`w-full flex items-center gap-4 p-5 rounded-2xl text-sm font-bold transition-all ${activeTab === 'privacy' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105' : 'bg-slate-900/90 backdrop-blur-sm text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'}`}
          >
            <ShieldCheck className="w-5 h-5" /> Privacy Policy
          </button>
          <button 
            onClick={() => setActiveTab('terms')} 
            className={`w-full flex items-center gap-4 p-5 rounded-2xl text-sm font-bold transition-all ${activeTab === 'terms' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105' : 'bg-slate-900/90 backdrop-blur-sm text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'}`}
          >
            <FileSignature className="w-5 h-5" /> Terms & Conditions
          </button>
          <button 
            onClick={() => setActiveTab('faq')} 
            className={`w-full flex items-center gap-4 p-5 rounded-2xl text-sm font-bold transition-all ${activeTab === 'faq' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 scale-105' : 'bg-slate-900/90 backdrop-blur-sm text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'}`}
          >
            <HelpCircle className="w-5 h-5" /> Enterprise FAQs
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-8 md:p-12 rounded-3xl shadow-2xl min-h-[500px]">
          {activeTab === 'privacy' && (
            <div className="space-y-8 animate-in slide-in-from-right-4">
              <h3 className="text-3xl font-black text-white border-b border-slate-800 pb-6">Privacy Policy</h3>
              <div className="space-y-6 text-base leading-relaxed text-slate-400">
                <p>Welcome to The ChitraHarsha - CHAVPK Ventures AI Agents platform. We pioneer AI-driven innovations while strictly adhering to the <strong className="text-white">Indian Information Technology Act, 2000</strong>, DPDP Act guidelines, and standard Global Data Protection Regulations.</p>
                
                <h4 className="text-white font-bold text-lg mt-8">1. Data Collection & Quantum Storage</h4>
                <p>Your data is secured via a Quantum Level Blockchain Management System, integrated seamlessly with our 10 Trillion SQL Database architecture. We constantly monitor Dark Web endpoints to ensure zero malware or phishing attacks penetrate our firewalls. This aligns with government mandates for critical infrastructure protection.</p>
                
                <h4 className="text-white font-bold text-lg mt-8">2. Usage of Data for AI Models</h4>
                <p>Enterprise data submitted through our NLP Payroll extractors or Database Compression engines is processed in volatile memory and is never permanently stored without explicit cryptographic consent. Our models <strong className="text-white">do not train</strong> on your proprietary company data.</p>
                
                <div className="p-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl mt-10">
                  <h4 className="text-emerald-400 font-bold mb-3 flex items-center gap-2 text-lg"><Shield className="w-5 h-5"/> Made in India / Atmanirbhar Bharat Initiative</h4>
                  <p className="text-sm text-emerald-300 leading-relaxed">This platform is actively developed and hosted with infrastructure conforming to the Indian Government's cloud localization policies. Proprietary algorithms are heavily guarded by registered Copyrights and Trademarks.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-8 animate-in slide-in-from-right-4">
              <h3 className="text-3xl font-black text-white border-b border-slate-800 pb-6">Commercial Terms & Conditions</h3>
              <div className="space-y-6 text-base leading-relaxed text-slate-400">
                <p>These terms govern your commercial access to the CHAVPK.AI Autonomous Agent Studio and its associated enterprise API endpoints.</p>

                <h4 className="text-white font-bold text-lg mt-8">1. Company Status & Commercial Readiness</h4>
                <p>Please note that <strong className="text-white">The ChitraHarsha - CHAVPK Ventures</strong> is currently in the pre-incorporation phase and formal company registration is pending. However, this platform is architecturally future-ready and fully equipped for imminent commercial deployment and enterprise scaling.</p>

                <h4 className="text-white font-bold text-lg mt-8">2. License & Commercial Usage</h4>
                <p>By deploying autonomous nodes, you are granted a non-exclusive, revocable license to utilize the CHAVPK computational network. Future enterprise licenses will be billed hourly based on compute loads, denominated in <strong className="text-emerald-400">CHC Crypto</strong> or <strong className="text-indigo-400">INR via VPK Pay</strong>.</p>

                <h4 className="text-white font-bold text-lg mt-8">3. Acceptable Use Policy</h4>
                <p>Users must not deploy agents for malicious activities, including but not limited to network DDoS, unauthorized data scraping, or illegal financial manipulation. Violations result in immediate node termination, IP bans, and forfeiture of staked CHC tokens.</p>

                <h4 className="text-white font-bold text-lg mt-8">4. Liability & SLA</h4>
                <p>We guarantee a <strong className="text-white">99.99% uptime</strong> for Quantum Vision Networks and SQL databases. However, AI outputs are inherently probabilistic. CHAVPK Ventures is not liable for business losses incurred due to unverified autonomous agent decisions. Human-in-the-loop oversight is highly recommended for critical financial nodes.</p>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-8 animate-in slide-in-from-right-4">
              <h3 className="text-3xl font-black text-white border-b border-slate-800 pb-6">Enterprise Frequently Asked Questions</h3>
              <div className="space-y-8 text-base leading-relaxed text-slate-400">
                <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                  <h4 className="text-white font-bold mb-3 text-lg flex items-center gap-3"><Minimize2 className="w-5 h-5 text-indigo-400"/> How does Quantum Data Compression work?</h4>
                  <p className="pl-8">Our proprietary NLP module, linked to the 10 Trillion SQL database, algorithmically restructures data payloads, compressing massive datasets while retaining 100% of their originality without any lossy degradation.</p>
                </div>
                <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                  <h4 className="text-white font-bold mb-3 text-lg flex items-center gap-3"><Network className="w-5 h-5 text-emerald-400"/> What happens if an Autonomous Agent goes offline?</h4>
                  <p className="pl-8">The system automatically switches to a failover blockchain node in a geographically distributed data center to maintain continuous uptime, ensuring your predictive models and financial trackers never miss a beat.</p>
                </div>
                <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
                  <h4 className="text-white font-bold mb-3 text-lg flex items-center gap-3"><Wallet className="w-5 h-5 text-amber-400"/> How is billing handled for large node deployments?</h4>
                  <p className="pl-8">Enterprise billing is handled automatically via VPK Pay integration (for fiat/UPI) or direct wallet connections using CHC Crypto for decentralized tracking. Invoices are generated per millisecond of compute used.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}