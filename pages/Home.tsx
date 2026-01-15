import React from 'react';
import { PILLARS_METRICS } from '../constants';
import { ShieldCheck, Globe, Zap, BarChart3, Coins, Leaf, Gem, Factory, Atom, Droplets, TreePine } from 'lucide-react';
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
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
            Pakistan's Industrial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-echo-primary to-echo-accent">Transformation</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 font-light">
            Shifting Pakistan from resource-dependent to a vertically integrated global industrial powerhouse.
          </p>
        </div>
      </section>

      {/* The Strategic Pillars Dashboard */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Strategic Investment Pillars</h2>
              <p className="text-slate-500">Critical Sectors & Financial Engines</p>
            </div>
            <div className="hidden md:block w-64 h-32">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Projects by Sector */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Project Sectors</h2>
            <p className="text-slate-500 mt-2">Organized by strategic category</p>
          </div>

          {/* Strategic Projects */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-yellow-100 text-yellow-800 rounded-full mr-3">Strategic Projects</span>
              <div className="flex-grow h-px bg-yellow-200"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Platinum */}
              <button
                onClick={() => onNavigate('PLATINUM')}
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-100 transition-all text-center cursor-pointer w-full"
              >
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-50 text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                    <Gem size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Platinum (PGM)</h3>
                  <p className="text-slate-600 mb-4">Platinum Group Metals</p>
                  <span className="inline-flex items-center text-purple-600 font-medium group-hover:underline">
                    View Project
                  </span>
                </div>
              </button>

              {/* Gold Project */}
              <button
                onClick={() => onNavigate('PLACER_GOLD')}
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-100 transition-all text-center cursor-pointer w-full"
              >
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-50 text-yellow-600 mb-6 group-hover:scale-110 transition-transform">
                    <Coins size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Indus-K Gold Project</h3>
                  <p className="text-slate-600 mb-4">Placer Gold Details</p>
                  <span className="inline-flex items-center text-yellow-600 font-medium group-hover:underline">
                    View Project
                  </span>
                </div>
              </button>

              {/* REE Project */}
              <button
                onClick={() => onNavigate('REE')}
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-yellow-400 hover:shadow-xl hover:shadow-yellow-100 transition-all text-center cursor-pointer w-full"
              >
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                    <Atom size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Rare Earth</h3>
                  <p className="text-slate-600 mb-4">Strategic Sovereignty</p>
                  <span className="inline-flex items-center text-emerald-600 font-medium group-hover:underline">
                    View Project
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Agriculture */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-green-100 text-green-800 rounded-full mr-3">Agriculture</span>
              <div className="flex-grow h-px bg-green-200"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Agriculture Combined */}
              <button
                onClick={() => onNavigate('AGRICULTURE')}
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-green-400 hover:shadow-xl hover:shadow-green-100 transition-all text-center cursor-pointer w-full md:col-span-2"
              >
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-50 text-green-600 mb-6 group-hover:scale-110 transition-transform">
                    <Leaf size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Cash Crops: Cannabis & Saffron</h3>
                  <p className="text-slate-600 mb-4">Medicinal, Industrial & Premium Agriculture</p>
                  <span className="inline-flex items-center text-green-600 font-medium group-hover:underline">
                    View Project
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Industrial */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-800 rounded-full mr-3">Industrial</span>
              <div className="flex-grow h-px bg-blue-200"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Steel Project */}
              <button
                onClick={() => onNavigate('STEEL_MILL')}
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100 transition-all text-center cursor-pointer w-full md:col-span-2"
              >
                <div className="flex flex-col items-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <Factory size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Integrated Steel</h3>
                  <p className="text-slate-600 mb-4">5M Ton/Year Steel Mill Ecosystem</p>
                  <span className="inline-flex items-center text-blue-600 font-medium group-hover:underline">
                    View Project
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Environment */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 rounded-full mr-3">Environment</span>
              <div className="flex-grow h-px bg-teal-200"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Environment Project */}
              <button
                onClick={() => onNavigate('ENVIRONMENT')}
                className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-teal-400 hover:shadow-xl hover:shadow-teal-100 transition-all text-center cursor-pointer w-full md:col-span-2"
              >
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-teal-50 text-teal-600 group-hover:scale-110 transition-transform">
                      <Droplets size={28} />
                    </div>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
                      <TreePine size={28} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Clean Mining & Water Conservation</h3>
                  <p className="text-slate-600 mb-4">Sustainable Infrastructure & Climate Projects</p>
                  <span className="inline-flex items-center text-teal-600 font-medium group-hover:underline">
                    View Project
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;