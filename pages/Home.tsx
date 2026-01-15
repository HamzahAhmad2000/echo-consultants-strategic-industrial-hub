import React from 'react';
import { PILLARS_METRICS } from '../constants';
import { ShieldCheck, Globe, Zap, BarChart3, ArrowRight } from 'lucide-react';
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

// Map pillar IDs to their corresponding images and page routes
const pillarConfig: Record<string, { image: string; route: string; color: string }> = {
  'gold': { image: '/assets/cardimages/gold.jpg', route: 'PLACER_GOLD', color: 'yellow' },
  'cannabis': { image: '/assets/cardimages/cannabis.jpg', route: 'AGRICULTURE', color: 'green' },
  'saffron': { image: '/assets/cardimages/saffron.jpg', route: 'AGRICULTURE', color: 'red' },
  'pgm': { image: '/assets/cardimages/platinum.jpg', route: 'PLATINUM', color: 'purple' },
  'steel': { image: '/assets/cardimages/steel.jpg', route: 'STEEL_MILL', color: 'blue' },
  'ree': { image: '/assets/cardimages/REE.jpg', route: 'REE', color: 'emerald' },
};

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/70 to-slate-50"></div>
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
            {PILLARS_METRICS.map((pillar) => {
              const config = pillarConfig[pillar.id] || { image: '', route: 'HOME', color: 'slate' };
              
              return (
                <button
                  key={pillar.id}
                  onClick={() => onNavigate(config.route)}
                  className="group relative overflow-hidden bg-white border border-slate-200 hover:border-echo-primary rounded-xl transition-all hover:shadow-xl hover:shadow-emerald-100 cursor-pointer text-left"
                >
                  {/* Background Image with Gradient Overlay */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={config.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-white/60"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-6">
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
                    <p className="text-sm text-slate-600 border-t border-slate-100 pt-4 mb-4">
                      {pillar.description}
                    </p>
                    
                    {/* View Project Button */}
                    <div className="flex items-center text-echo-primary font-medium group-hover:underline">
                      View Project
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              );
            })}
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
    </div>
  );
};

export default Home;