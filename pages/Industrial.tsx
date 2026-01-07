import React, { useState } from 'react';
import DataCard from '../components/DataCard';
import { REE_PHASES, STEEL_PHASES } from '../constants';
import { Layers, Activity, Database, ArrowRight } from 'lucide-react';
import { ProjectPhase } from '../types';

const PhaseToggle: React.FC<{ phases: ProjectPhase[], activeIndex: number, setActiveIndex: (i: number) => void }> = ({ phases, activeIndex, setActiveIndex }) => (
  <div className="mb-8">
    <div className="flex space-x-2 bg-white p-1 rounded-lg inline-flex border border-slate-200 shadow-sm">
      {phases.map((phase, idx) => (
        <button
          key={idx}
          onClick={() => setActiveIndex(idx)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${activeIndex === idx
              ? 'bg-echo-primary text-white shadow-md'
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
            }`}
        >
          {phase.name}
        </button>
      ))}
    </div>
  </div>
);

const PhaseDetails: React.FC<{ phase: ProjectPhase }> = ({ phase }) => (
  <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm animate-fadeIn">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
          <Activity className="w-5 h-5 mr-2 text-echo-primary" />
          Key Metrics
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <DataCard label="Investment" value={phase.investment} size="sm" />
          <DataCard label="Outcome" value={phase.outcome} size="sm" highlight />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
          <Layers className="w-5 h-5 mr-2 text-echo-primary" />
          Operational Goals
        </h4>
        <ul className="space-y-3">
          {phase.details.map((detail, idx) => (
            <li key={idx} className="flex items-start text-slate-600">
              <ArrowRight className="w-4 h-4 mr-2 mt-1 text-slate-400" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const Industrial: React.FC = () => {
  const [activeReePhase, setActiveReePhase] = useState(0);
  const [activeSteelPhase, setActiveSteelPhase] = useState(0);

  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Industrial Sovereignty</h1>
          <p className="text-xl text-slate-500 max-w-3xl">
            Deep technical data on Rare Earth Elements, Specialized Steel, and PGMs for institutional investors.
          </p>
        </div>

        {/* REE Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <span className="text-echo-primary font-mono text-sm tracking-widest uppercase font-bold">Critical Minerals</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">The Tangir REE Project</h2>
              <p className="text-slate-600 mt-2">Gilgit-Baltistan | Lease Area: 256 sq. km</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
              <DataCard label="REE Content" value="25%" subtext="vs 5-7% Global Avg" highlight size="md" />
            </div>
          </div>

          <PhaseToggle phases={REE_PHASES} activeIndex={activeReePhase} setActiveIndex={setActiveReePhase} />
          <PhaseDetails phase={REE_PHASES[activeReePhase]} />
        </section>

        {/* Steel Section */}
        <section className="mb-24 border-t border-slate-200 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <span className="text-blue-500 font-mono text-sm tracking-widest uppercase font-bold">Infrastructure Backbone</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">Pakistan Integrated Steel Project</h2>
              <p className="text-slate-600 mt-2">Concept: Mine-to-Product (Ore → Beneficiation → DRI → Refining)</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-4">
              <DataCard label="Target Output" value="5M" subtext="Tons/Year" highlight size="md" />
              <DataCard label="Ore Grade" value="32-56%" subtext="Iron Ore" size="md" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {['High-Tensile (Pipelines)', 'Alloy/Stainless (Defense)', 'Automotive Grades'].map((grade, i) => (
              <div key={i} className="bg-white p-3 rounded border border-slate-200 text-center text-slate-600 text-sm font-semibold shadow-sm">
                {grade}
              </div>
            ))}
          </div>

          <PhaseToggle phases={STEEL_PHASES} activeIndex={activeSteelPhase} setActiveIndex={setActiveSteelPhase} />
          <PhaseDetails phase={STEEL_PHASES[activeSteelPhase]} />
        </section>

        {/* PGM Section */}
        <section className="border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-purple-600 font-mono text-sm tracking-widest uppercase font-bold">Future Tech</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-1 mb-4">Platinum Group Metals (PGM)</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Pakistan hosts ophiolite belts geologically analogous to South Africa’s Bushveld Complex.
                Targeting Podiform chromitites in Zhob and Lasbela.
              </p>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-4 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-purple-600" />
                  Confirmed Targets
                </h3>
                <ul className="space-y-2 mb-6">
                  <li className="flex justify-between text-sm border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Primary</span>
                    <span className="text-slate-900 font-medium">Muslim Bagh & Zhob</span>
                  </li>
                  <li className="flex justify-between text-sm pt-2">
                    <span className="text-slate-500">Geology</span>
                    <span className="text-slate-900 font-medium">Ophiolite Belts</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[300px] border border-slate-200 shadow-md">
              <img
                src="/assets/fields (2).jpeg"
                alt="Geological Survey Site"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="bg-white/90 backdrop-blur border border-slate-200 p-6 rounded-xl shadow-lg">
                  <p className="text-slate-500 text-xs uppercase mb-1">Market Potential (2033)</p>
                  <div className="text-4xl font-bold text-slate-900 mb-2">$33 Billion</div>
                  <p className="text-sm text-slate-600">Driven by Hydrogen Economy & Advanced Tech demand.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Industrial;