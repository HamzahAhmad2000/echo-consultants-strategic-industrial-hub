import React from 'react';
import { GOLD_PROCESS_STEPS } from '../constants';
import { Coins, Mountain, CheckCircle } from 'lucide-react';

const PlacerGold: React.FC = () => {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Placer Gold</h1>
          <p className="text-xl text-slate-500 max-w-3xl">
            Indus-K Alluvial Gold Plant: Swift, low-impact extraction with rapid operational deployment.
          </p>
        </div>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-6">
            <div className="flex items-center">
              <div className="p-3 bg-yellow-100 rounded-full mr-4 text-yellow-600">
                <Coins size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Project Overview</h2>
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

          {/* Project Video */}
          <div className="mb-12">
            <div className="max-w-4xl mx-auto">
              <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                <video
                  controls
                  className="w-full h-auto"
                  poster="/assets/goldmining/Gemini_Generated_Image_myrg4xmyrg4xmyrg.png"
                >
                  <source src="/assets/placer-gold-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Location & Resource */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="h-48 relative">
                  <img 
                    src="/assets/goldmining/Gemini_Generated_Image_myrg4xmyrg4xmyrg.png" 
                    alt="Placer Gold Extraction" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-lg font-bold text-white flex items-center">
                      <Mountain className="w-5 h-5 mr-2 text-yellow-400" /> Location & Resource
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">Region</p>
                      <p className="text-slate-900 font-medium">Indus River across Gilgit-Baltistan & Punjab</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase font-semibold">Resource Type</p>
                      <p className="text-slate-900 font-medium">Proven Placer Gold Deposits</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The gold is <strong>"Free Milling"</strong> — already liberated from host rock by natural erosion. 
                    This eliminates the need for deep mining, rock crushing, or chemical processing.
                  </p>
                </div>
              </div>

              {/* Economic Advantages */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl border border-yellow-200 shadow-sm p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-4">Economic Advantages</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-1.5"></span>
                    <div>
                      <p className="font-semibold text-slate-900">Cost Efficiency</p>
                      <p className="text-sm text-slate-600">Significantly lower CAPEX & OPEX vs. imported alternatives</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-1.5"></span>
                    <div>
                      <p className="font-semibold text-slate-900">Scalability</p>
                      <p className="text-sm text-slate-600">Simplified, scalable system designed for rapid deployment</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 mt-1.5"></span>
                    <div>
                      <p className="font-semibold text-slate-900">High ROI</p>
                      <p className="text-sm text-slate-600">High yield with rapid return on investment</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {/* Indus-K Technology */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-900">Indus-K Technology</h3>
                  <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">Proprietary System</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">
                  Designed and engineered indigenously in Pakistan to handle the unique conditions of the Indus River.
                </p>
                <div className="bg-slate-50 p-4 rounded-lg mb-4">
                  <p className="text-xs text-slate-500 uppercase font-semibold mb-2">Methodology</p>
                  <p className="text-sm text-slate-700">Integrates suction dredging with gravity-based separation</p>
                </div>
                <h4 className="font-bold text-slate-900 mb-3 text-sm">Process Flow:</h4>
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
                <div className="mt-6 pt-4 border-t border-slate-200">
                  <p className="text-xs text-slate-500 mb-1">Product Branding</p>
                  <p className="text-sm font-semibold text-slate-900">Gold bars stamped: "Product by Indus K"</p>
                </div>
              </div>

              {/* Environmental & Safety Standards */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="h-48 relative">
                   <img 
                    src="/assets/goldmining/Gemini_Generated_Image_ishsxcishsxcishs.png" 
                    alt="Processing Facility" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-lg font-bold text-white">Environmental & Safety Standards</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-emerald-50 p-4 rounded-lg mb-4 border border-emerald-200">
                    <p className="text-sm font-bold text-emerald-900 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      100% Chemical-Free Operation
                    </p>
                    <p className="text-xs text-emerald-700">Entirely without cyanide or mercury</p>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-600">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>No toxic chemicals used in extraction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>No blasting or deep mining required</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Gravity-based separation only</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Environmentally responsible extraction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PlacerGold;
