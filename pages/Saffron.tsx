import React from 'react';
import { SAFFRON_STEPS } from '../constants';
import { Sprout, Thermometer, Clock, Scale, Users, Flower2 } from 'lucide-react';

const Saffron: React.FC = () => {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Saffron</h1>
          <p className="text-xl text-slate-500 max-w-3xl">
            Chitral Initiative - "Red Gold": High-Value Saffron with precision harvesting and processing.
          </p>
        </div>

        <section className="mb-24">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-red-100 rounded-full mr-4 text-red-600">
              <Sprout size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">High-Value Saffron Production</h2>
              <p className="text-slate-600">Chitral Initiative</p>
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

export default Saffron;
