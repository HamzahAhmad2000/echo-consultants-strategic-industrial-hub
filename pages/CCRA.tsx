import React from 'react';
import DataCard from '../components/DataCard';
import {
  CCRA_FDI_PIPELINE,
  CCRA_INDUSTRY_ASSOCIATIONS,
  CCRA_CELADON_TARGETS,
  CCRA_CELADON_STEPS,
  CCRA_PRODUCTION_OUTPUT,
  CCRA_LOCAL_REVENUE,
  CCRA_OPEX_BREAKDOWN
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
  Plane,
  CheckCircle,
  Target,
  Beaker,
  GraduationCap,
  DollarSign,
  Package,
  Truck
} from 'lucide-react';

const CCRA: React.FC = () => {
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
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
            <div className="flex items-center">
              <div className="p-3 bg-emerald-100 rounded-full mr-4 text-emerald-600">
                <TrendingUp size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Economic & Strategic Overview</h2>
                <p className="text-slate-600">National Requirements & FDI Pipeline</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Economic Potential */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-emerald-600" /> Import Deficit
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                    <p className="text-xs text-red-600 uppercase font-semibold mb-1">Annual Hemp Imports</p>
                    <p className="text-3xl font-bold text-red-700">$3-4 Billion</p>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                    <p className="text-xs text-amber-600 uppercase font-semibold mb-1">Cotton Deficit</p>
                    <p className="text-2xl font-bold text-amber-700">6-8 Million Bales</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Leaf className="w-5 h-5 mr-2 text-emerald-600" /> Solution Path
                </h3>
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                  <p className="text-sm text-emerald-700 mb-2">Cultivating hemp on</p>
                  <p className="text-3xl font-bold text-emerald-800 mb-1">300,000 Acres</p>
                  <p className="text-sm text-emerald-600">Could neutralize deficit within <strong>5 years</strong></p>
                </div>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  High national economic value with direct relevance to textile, pharmaceutical, and industrial supply chains.
                </p>
              </div>
            </div>

            {/* FDI Pipeline */}
            <div className="lg:col-span-2">
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
                        <th className="text-left py-3 px-4 text-xs uppercase text-slate-500 font-semibold">Investment</th>
                        <th className="text-left py-3 px-4 text-xs uppercase text-slate-500 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {CCRA_FDI_PIPELINE.map((item, idx) => (
                        <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 text-slate-900 font-medium">{item.investor}</td>
                          <td className="py-3 px-4 text-emerald-600 font-bold">{item.amount}</td>
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

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-sm text-blue-800 flex items-start">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0 text-blue-600" />
                    <span><strong>Assessment:</strong> Significant FDI will be activated immediately upon Cabinet approval of the National Cannabis Policy 2025.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Celadon Pharmaceuticals */}
        <section className="mb-24 border-t border-slate-200 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-full mr-4 text-purple-600">
                <FlaskConical size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Celadon Pharmaceuticals Proposal</h2>
                <p className="text-slate-600">Strategic Partnership for Cannabinoid Medicines</p>
              </div>
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
                    Address Pakistan's 90% dependency on imported APIs
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
                <h4 className="text-sm font-bold text-slate-700 mb-2">Production Model:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-slate-600 text-sm">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-xs flex items-center justify-center mr-2 mt-0.5">1</span>
                    "CBD Collective" for farming and extraction
                  </li>
                  <li className="flex items-start text-slate-600 text-sm">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-xs flex items-center justify-center mr-2 mt-0.5">2</span>
                    Refinement using Celadon's proprietary D9 process
                  </li>
                  <li className="flex items-start text-slate-600 text-sm">
                    <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-xs flex items-center justify-center mr-2 mt-0.5">3</span>
                    Pakistani contract manufacturer for final production
                  </li>
                </ul>
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
                  Pakistan's first pharmaceutical-grade cannabis R&D facility:
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start text-slate-600 text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-purple-400" />
                    <span><strong>Genetics:</strong> Proprietary strains for therapeutic targets</span>
                  </li>
                  <li className="flex items-start text-slate-600 text-sm">
                    <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-purple-400" />
                    <span><strong>Education:</strong> Training for doctors & regulators</span>
                  </li>
                </ul>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong>Economic Impact:</strong> Attract talent from Pakistan's 1 million STEM students
                  </p>
                </div>
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
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-4 text-green-600">
                <Leaf size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Feasibility Study: Integrated Cannabis Cultivation</h2>
                <p className="text-slate-600">Scalable, per-acre model for medicinal, industrial, and textile cannabis</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Production Output */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <Package className="w-5 h-5 mr-2 text-green-600" /> Production Output (Per Acre)
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
              <div className="mt-6 p-4 bg-slate-50 rounded-lg flex items-center">
                <Truck className="w-5 h-5 mr-3 text-slate-500" />
                <p className="text-sm text-slate-600">
                  <strong>Logistics:</strong> Farm → Peshawar → Karachi for export
                </p>
              </div>
            </div>

            {/* Financial Summary */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                <DollarSign className="w-5 h-5 mr-2 text-green-600" /> Financial Summary (Per Acre)
              </h3>

              <div className="space-y-6">
                {/* Local Revenue */}
                <div>
                  <h4 className="text-sm font-bold text-slate-700 mb-3">Local Market Revenue: <span className="text-emerald-600">2.22M PKR</span></h4>
                  <div className="grid grid-cols-2 gap-2">
                    {CCRA_LOCAL_REVENUE.map((item, idx) => (
                      <div key={idx} className="flex justify-between p-2 bg-slate-50 rounded text-sm">
                        <span className="text-slate-600">{item.item}</span>
                        <span className="font-mono font-semibold text-slate-900">{item.revenue}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Export Revenue */}
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                  <h4 className="text-sm font-bold text-emerald-800 mb-2">Export Revenue (Flowers)</h4>
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-emerald-600">Low Case</p>
                      <p className="text-xl font-bold text-emerald-800">$1.15M</p>
                    </div>
                    <ArrowRight className="text-emerald-400" />
                    <div className="text-right">
                      <p className="text-xs text-emerald-600">High Case</p>
                      <p className="text-xl font-bold text-emerald-800">$2.30M</p>
                    </div>
                  </div>
                </div>

                {/* OPEX */}
                <div>
                  <h4 className="text-sm font-bold text-slate-700 mb-3">
                    OPEX: <span className="text-amber-600">855,000 PKR</span> <span className="text-slate-400 font-normal">(≈ $3,546 USD)</span>
                  </h4>
                  <div className="space-y-2">
                    {CCRA_OPEX_BREAKDOWN.map((item, idx) => (
                      <div key={idx} className="flex justify-between p-2 bg-amber-50 rounded text-sm border border-amber-100">
                        <span className="text-amber-700">{item.item}</span>
                        <span className="font-mono font-semibold text-amber-800">{item.cost}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Chanelle McCoy Health Invitation */}
        <section className="border-t border-slate-200 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-full mr-4 text-blue-600">
                <Plane size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Chanelle McCoy Health Invitation</h2>
                <p className="text-slate-600">UK-Pakistan Strategic Partnership Proposal</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Letter Details */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm text-slate-500">From</p>
                  <p className="font-bold text-slate-900">Lady Chanelle McCoy</p>
                  <p className="text-sm text-slate-600">CEO, Chanelle McCoy Health, UK</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-slate-500">Date</p>
                  <p className="font-mono text-slate-900">October 16, 2025</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-slate-500">To</p>
                <p className="font-bold text-slate-900">Director General</p>
                <p className="text-sm text-slate-600">Cannabis Control & Regulatory Authority (CCRA), Pakistan</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 mb-6">
                <h4 className="font-bold text-slate-900 mb-2">Company Profile</h4>
                <p className="text-sm text-slate-600">
                  Chanelle McCoy Health specializes in high-quality, non-addictive synthetic CBD products approved by the <strong>UK Food Standards Agency (FSA)</strong>.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-2">Invitation</h4>
                <p className="text-sm text-blue-800">
                  A formal invitation for the DG to visit UK facilities for a <strong>4-day technical tour</strong> to observe GMP-certified manufacturing.
                </p>
                <p className="text-xs text-blue-600 mt-2 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  All travel and lodging costs sponsored by Chanelle McCoy Health
                </p>
              </div>
            </div>

            {/* Strategic Goals */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl shadow-lg text-white">
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <Target className="w-5 h-5 mr-2" /> Strategic Goals
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-bold">Foster Collaboration</p>
                    <p className="text-blue-200 text-sm">Knowledge exchange with the CCRA</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Factory className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-bold">Establish Manufacturing Facility</p>
                    <p className="text-blue-200 text-sm">FDI-backed facility in Pakistan</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4" />
                  </span>
                  <div>
                    <p className="font-bold">Enable Regional Production & Export</p>
                    <p className="text-blue-200 text-sm">Position Pakistan as a production hub</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-lg backdrop-blur">
                <p className="text-sm text-center">
                  <strong>Investment Commitment:</strong> USD 50 Million
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CCRA;
