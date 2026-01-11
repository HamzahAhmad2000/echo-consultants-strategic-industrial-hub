import React from 'react';
import DataCard from '../components/DataCard';
import {
  CCRA_FDI_PIPELINE,
  CCRA_INDUSTRY_ASSOCIATIONS,
  CCRA_CELADON_TARGETS,
  CCRA_CELADON_STEPS,
  CCRA_PRODUCTION_OUTPUT
} from '../constants';
import {
  TrendingUp,
  Building2,
  FlaskConical,
  Leaf,
  FileText,
  ArrowRight,
  Users,
  Factory,
  CheckCircle,
  Target,
  Beaker,
  GraduationCap
} from 'lucide-react';

const Cannabis: React.FC = () => {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Cannabis Control & Regulatory Authority</h1>
          <p className="text-xl text-slate-500 max-w-3xl">
            Strategic overview of Pakistan's cannabis industry potential, international partnerships, and cultivation feasibility.
          </p>
        </div>

        {/* Section 1: Economic & Strategic Overview */}
        <section className="mb-24">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-emerald-100 rounded-full mr-4 text-emerald-600">
              <TrendingUp size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Economic & Strategic Overview</h2>
              <p className="text-slate-600">National Requirements & FDI Pipeline</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Economic Potential */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Leaf className="w-5 h-5 mr-2 text-emerald-600" /> Solution Path
                </h3>
                  <p className="text-sm text-emerald-700 mb-2">Cultivating hemp on</p>
                  <p className="text-3xl font-bold text-emerald-800 mb-1">300,000 Acres</p>
                  <p className="text-sm text-emerald-600">Target to neutralize import deficits within <strong>5 years</strong></p>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  High national economic value with direct relevance to textile, pharmaceutical, and industrial supply chains.
                </p>
              </div>
            </div>

            {/* FDI Pipeline */}
            <div>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-full">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-between">
                  <span className="flex items-center">
                    <Building2 className="w-5 h-5 mr-2 text-blue-600" /> FDI Pipeline
                  </span>
                  <span className="text-xs font-normal text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                    Pending Cabinet Approval
                  </span>
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-200">
                        <th className="text-left py-3 px-4 text-xs uppercase text-slate-500 font-semibold">Investor</th>
                        <th className="text-left py-3 px-4 text-xs uppercase text-slate-500 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CCRA_FDI_PIPELINE.map((item, idx) => (
                        <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 text-slate-900 font-medium">{item.investor}</td>
                          <td className="py-3 px-4 text-slate-500 text-sm">{item.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 mb-4 flex items-center">
                    <Users className="w-4 h-4 mr-2 text-slate-500" /> Industry Associations Ready
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {CCRA_INDUSTRY_ASSOCIATIONS.map((assoc, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                        <p className="font-bold text-slate-900">{assoc.name}</p>
                        <p className="text-sm text-slate-600">{assoc.readiness}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Celadon Pharmaceuticals */}
        <section className="mb-24 border-t border-slate-200 pt-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-purple-100 rounded-full mr-4 text-purple-600">
              <FlaskConical size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Celadon Pharmaceuticals Proposal</h2>
              <p className="text-slate-600">Strategic Partnership for Cannabinoid Medicines</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Vision & Study */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-purple-600" /> Partnership Vision
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start text-slate-600 text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-purple-400" />
                    Seeking regulatory approval to identify local Pakistani pharmaceutical partner
                  </li>
                  <li className="flex items-start text-slate-600 text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-purple-400" />
                    Combine local market presence with Celadon's global IP and operational excellence
                  </li>
                  <li className="flex items-start text-slate-600 text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-purple-400" />
                    Address Pakistan's dependency on imported APIs
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Beaker className="w-5 h-5 mr-2 text-purple-600" /> Observational Study
                </h3>
                <p className="text-sm text-slate-600 mb-4">Pre-facility study to gather local clinical data:</p>
                <div className="space-y-3">
                  {CCRA_CELADON_TARGETS.map((target, idx) => (
                    <div key={idx} className="p-3 bg-purple-50 rounded-lg border border-purple-100">
                      <p className="font-bold text-purple-900 text-sm">{target.formulation}</p>
                      <p className="text-xs text-purple-700">{target.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle: Technology & R&D */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Factory className="w-5 h-5 mr-2 text-purple-600" /> Technology & IP (CLD-927)
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Focus on high-value, IP-protected cannabinoid medicines using one-step synthesis for high-purity API Delta 9.
                </p>
                <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100">
                  <p className="text-xs text-emerald-700">
                    <strong>Benefits:</strong> Leverages Pakistan's low-cost agricultural base while ensuring IP protection and GMP-certified quality.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2 text-purple-600" /> R&D Facility & Ecosystem
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Pakistan's first pharmaceutical-grade cannabis R&D facility.
                </p>
              </div>
            </div>

            {/* Right: Next Steps */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl shadow-lg h-full text-white">
                <h3 className="text-lg font-bold mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2" /> Next Steps
                </h3>
                <div className="space-y-4">
                  {CCRA_CELADON_STEPS.map((step, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 text-white text-sm flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="font-bold text-white">{step.step}</p>
                        <p className="text-purple-200 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Feasibility Study */}
        <section className="mb-24 border-t border-slate-200 pt-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-green-100 rounded-full mr-4 text-green-600">
              <Leaf size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Feasibility Study</h2>
              <p className="text-slate-600">Scalable, per-acre model for medicinal, industrial, and textile cannabis</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                 Production Output (Per Acre)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {CCRA_PRODUCTION_OUTPUT.map((item, idx) => (
                  <DataCard
                    key={idx}
                    label={item.product}
                    value={item.quantity}
                    highlight={item.product === 'Flowers'}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Cannabis;
