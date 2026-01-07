import React from 'react';
import DataCard from '../components/DataCard';
import { GOLD_ROI_METRICS, GOLD_PROCESS_STEPS, SAFFRON_STEPS } from '../constants';
import { Sprout, Coins, Thermometer, Clock, CheckCircle, Mountain, Scale, Users, Flower2 } from 'lucide-react';

const Yield: React.FC = () => {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Operational Yield</h1>
          <p className="text-xl text-slate-500 max-w-3xl">
            Fast-cash metrics and specialized production techniques for Gold and Saffron.
          </p>
        </div>

        {/* Gold Section */}
        <section className="mb-24">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full mr-4 text-yellow-600">
                <Coins size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">The Indus-K Alluvial Gold Plant</h2>
                <p className="text-slate-600">Gilgit-Baltistan & Punjab | Developer: ECHO Consultants</p>
              </div>
            </div>
            <div className="bg-emerald-50 px-4 py-2 rounded-lg border border-emerald-100">
              <p className="text-sm text-emerald-800 font-medium flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Zero Cyanide / Zero Mercury
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Left Col: Geology & Process */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Mountain className="w-5 h-5 mr-2 text-slate-500" /> Geological Advantage
                </h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  Focusing on <strong>Placer Gold Deposits</strong> naturally concentrated by the Indus River.
                  <br /><br />
                  <strong>"Free Milling"</strong> status means gold is separated from rock by erosion, avoiding deep mining costs and chemicals.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Daily Output</p>
                    <p className="text-lg font-mono text-slate-900 font-bold">25g <span className="text-xs font-normal text-slate-400">(Min)</span></p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase">Annual Output</p>
                    <p className="text-lg font-mono text-slate-900 font-bold">7.5kg</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Indus-K System</h3>
                <ul className="space-y-4">
                  {GOLD_PROCESS_STEPS.map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-100 text-yellow-700 text-xs flex items-center justify-center font-bold mt-0.5">{i + 1}</span>
                      <div>
                        <span className="block text-sm font-bold text-slate-900">{step.title}</span>
                        <span className="block text-xs text-slate-500 leading-snug">{step.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Col: Financials */}
            <div className="lg:col-span-2">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mb-6">
                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center justify-between">
                  <span>Conservative Financial Model</span>
                  <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded">Based on 300 Operating Days</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {GOLD_ROI_METRICS.map((metric, idx) => (
                    <DataCard
                      key={idx}
                      label={metric.label}
                      value={metric.value}
                      subtext={metric.subtext}
                      highlight={metric.highlight}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Saffron Section */}
        <section className="border-t border-slate-200 pt-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-red-100 rounded-full mr-4 text-red-600">
              <Sprout size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">High-Value Saffron</h2>
              <p className="text-slate-600">Chitral Initiative - "Red Gold"</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">

            {/* Left: Processing Protocols */}
            <div className="md:col-span-5 lg:col-span-4">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Processing Protocol</h3>
              <div className="space-y-6 mb-8">
                {SAFFRON_STEPS.map((step, idx) => (
                  <div key={idx} className="flex">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-600 font-mono text-sm">
                        {idx + 1}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-medium">{step.title}</h4>
                      <p className="text-slate-600 text-sm mt-1">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-4">The Drying Standard</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center text-slate-600">
                      <Thermometer className="w-4 h-4 mr-3 text-red-500" />
                      <span className="text-sm">Constant Temp</span>
                    </div>
                    <span className="font-mono font-bold text-slate-900">65°C</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center text-slate-600">
                      <Clock className="w-4 h-4 mr-3 text-red-500" />
                      <span className="text-sm">Time Duration</span>
                    </div>
                    <span className="font-mono font-bold text-slate-900">10–15 mins</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Visual Evidence Galleries */}
            <div className="md:col-span-7 lg:col-span-8 space-y-8">

              {/* 1. Biological Asset Gallery */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Scale className="w-5 h-5 mr-2 text-slate-500" />
                  Biological Asset Verification <span className="ml-3 text-xs font-normal bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">Certified Premium Stock</span>
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="relative aspect-square bg-slate-100 rounded-xl overflow-hidden border border-slate-200 group">
                    <img src="/assets/19grams.jpeg" alt="19g Corm" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-mono px-2 py-1 rounded">19.0g</div>
                  </div>
                  <div className="relative aspect-square bg-slate-100 rounded-xl overflow-hidden border border-slate-200 group">
                    <img src="/assets/17.8grams.jpeg" alt="17.8g Corm" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs font-mono px-2 py-1 rounded">17.8g</div>
                  </div>
                  <div className="relative aspect-square bg-slate-100 rounded-xl overflow-hidden border border-slate-200 group">
                    <img src="/assets/flowergroup.jpeg" alt="Healthy Root System" className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/80 text-xs text-center font-medium">Robust Root Systems</div>
                  </div>
                </div>
              </div>

              {/* 2. Capacity Building Gallery */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-slate-500" />
                  Capacity Building & Training
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden border border-slate-200 group">
                    <img src="/assets/group picture.jpeg" alt="Farmer Training" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <p className="text-white text-sm font-medium">Technology & Marketing Training Program</p>
                    </div>
                  </div>
                  <div className="relative aspect-video bg-slate-100 rounded-xl overflow-hidden border border-slate-200 group">
                    <img src="/assets/fields (3).jpeg" alt="Field Prep" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                      <p className="text-white text-sm font-medium">Field Preparation & Soil Management</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Product Gallery */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center">
                  <Flower2 className="w-5 h-5 mr-2 text-slate-500" />
                  The Red Gold Cycle
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="aspect-square rounded-lg overflow-hidden border border-slate-200">
                    <img src="/assets/saffron flower.jpeg" alt="Blooming" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden border border-slate-200">
                    <img src="/assets/saffron.jpeg" alt="Harvest" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden border border-slate-200">
                    <img src="/assets/plant.jpeg" alt="Extraction" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-lg overflow-hidden border border-slate-200">
                    <img src="/assets/plant2.jpeg" alt="Purity" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Yield;