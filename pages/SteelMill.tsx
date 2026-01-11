import React, { useState } from 'react';
import DataCard from '../components/DataCard';
import { STEEL_PHASES } from '../constants';
import { Layers, Activity, ArrowRight } from 'lucide-react';
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
          Key Focus
        </h4>
        <div className="grid grid-cols-2 gap-4">
           {/* Removed Investment for sanitization */}
          <DataCard label="Start" value={phase.outcome} size="sm" highlight />
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

const SteelMill: React.FC = () => {
    const [activeSteelPhase, setActiveSteelPhase] = useState(0);

  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Steel Mill</h1>
          <p className="text-xl text-slate-500 max-w-3xl">
            Pakistan Integrated Steel Project: Mines-to-Product national ecosystem.
          </p>
        </div>

        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <span className="text-blue-500 font-mono text-sm tracking-widest uppercase font-bold">Infrastructure Backbone</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">Integrated Steel Ecosystem</h2>
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
      </div>
    </div>
  );
};

export default SteelMill;
