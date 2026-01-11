import React from 'react';
import { PILLARS_METRICS } from '../constants';
import { ShieldCheck, Globe, Zap, BarChart3 } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface HomeProps {
  onNavigate: (id: any) => void;
}

const data = [
  { name: 'REE', value: 95, label: 'Grade Quality' },
  { name: 'Steel', value: 80, label: 'Capacity' },
  { name: 'PGM', value: 85, label: 'Market Demand' },
  { name: 'Gold', value: 100, label: 'ROI Potential' },
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/fields (1).jpeg"
            alt="Gilgit-Baltistan Industrial Landscape"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/80 to-slate-50"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 mb-6 border border-echo-primary/30 rounded-full bg-echo-light backdrop-blur-sm">
            <span className="text-echo-primary text-sm font-mono tracking-widest uppercase font-bold">Strategic Industrial Renaissance</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            The Fire is Lit. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-echo-primary to-echo-accent">The Anvil is Ready.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 font-light">
            Shifting Pakistan from resource-dependent to a vertically integrated global industrial powerhouse.
          </p>
        </div>
      </section>

      {/* The Four Pillars Dashboard */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">The Four Pillars</h2>
              <p className="text-slate-500">Strategic Critical Materials & Financial Engines</p>
            </div>
            <div className="hidden md:block w-64 h-32">
              {/* Tiny viz for dashboard feel */}
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                  <Tooltip cursor={{ fill: '#e2e8f0' }} contentStyle={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', color: '#1e293b' }} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 3 ? '#eab308' : '#059669'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS_METRICS.map((pillar) => (
              <div key={pillar.id} className="group bg-white border border-slate-200 hover:border-echo-primary p-6 rounded-xl transition-all hover:shadow-xl hover:shadow-emerald-100">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-lg ${pillar.id === 'gold' ? 'bg-yellow-50 text-yellow-600' : 'bg-emerald-50 text-emerald-600'}`}>
                    <BarChart3 size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{pillar.title}</h3>
                <p className="text-sm text-slate-500 mb-4">{pillar.subtitle}</p>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  {pillar.metrics.map((m, idx) => (
                    <div key={idx}>
                      <span className="block text-xs text-slate-400 uppercase">{m.label}</span>
                      <span className={`block font-mono font-bold ${m.highlight ? 'text-echo-primary' : 'text-slate-700'}`}>{m.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 border-t border-slate-100 pt-4">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Echo Advantage */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">The Echo Advantage</h2>
            <p className="text-slate-500 mt-2">De-risked execution via structured governance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center hover:bg-white hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Compliance & Standards</h3>
              <p className="text-slate-600">
                Adherence to <strong className="text-slate-900">JORC / NI 43-101</strong> reporting standards ensuring transparency and global institutional acceptance.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center hover:bg-white hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-echo-primary mb-6">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Governance & Structure</h3>
              <p className="text-slate-600">
                Operations structured via <strong className="text-slate-900">Special Purpose Vehicles (SPV)</strong> with phased de-risking and 73% price buffers.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center hover:bg-white hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-6">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Alignment</h3>
              <p className="text-slate-600">
                Strategic integration with <strong className="text-slate-900">CPEC, BRI</strong>, and the global energy transition (EVs/Hydrogen).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
            <p className="text-slate-500 mt-2">Explore our detailed project briefs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gold Project */}
            <button
              onClick={() => onNavigate('PLACER_GOLD')}
              className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-100 transition-all text-center cursor-pointer text-left w-full"
            >
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-50 text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Indus-K Gold Project</h3>
                <p className="text-slate-600 mb-4">Placer Gold Details</p>
                <span className="inline-flex items-center text-yellow-600 font-medium group-hover:underline">
                  View Project
                </span>
              </div>
            </button>

            {/* PGM / Aris */}
            <button
               onClick={() => onNavigate('ARIS')}
              className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-100 transition-all text-center cursor-pointer w-full"
            >
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Aris (PGM)</h3>
                <p className="text-slate-600 mb-4">Platinum Group Metals details</p>
                <span className="inline-flex items-center text-purple-600 font-medium group-hover:underline">
                  View Project
                </span>
              </div>
            </button>

            {/* Steel Project */}
            <button
               onClick={() => onNavigate('STEEL_MILL')}
              className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all text-center cursor-pointer w-full"
            >
              <div className="flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" /></svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Integrated Steel</h3>
                <p className="text-slate-600 mb-4">Steel Mill Ecosystem</p>
                <span className="inline-flex items-center text-blue-600 font-medium group-hover:underline">
                  View Project
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;