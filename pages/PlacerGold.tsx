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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {/* Geological Advantage with Image */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="h-48 relative">
                  <img 
                    src="/assets/goldmining/Gemini_Generated_Image_myrg4xmyrg4xmyrg.png" 
                    alt="Placer Gold Extraction" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-lg font-bold text-white flex items-center">
                      <Mountain className="w-5 h-5 mr-2 text-yellow-400" /> Geological Advantage
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Focusing on <strong>Placer Gold Deposits</strong> naturally concentrated by the Indus River.
                    <br /><br />
                    <strong>"Free Milling"</strong> status means gold is separated from rock by erosion, avoiding deep mining costs and chemicals.
                  </p>
                </div>
              </div>

              {/* Operational Highlights with Image */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="h-48 relative">
                   <img 
                    src="/assets/goldmining/Gemini_Generated_Image_ishsxcishsxcishs.png" 
                    alt="Processing Facility" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <h3 className="text-lg font-bold text-white">Operational Highlights</h3>
                  </div>
                </div>
                <div className="p-6">
                   <ul className="space-y-3">
                     <li className="flex items-center text-slate-700">
                       <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                       Rapid Deployment Model
                     </li>
                     <li className="flex items-center text-slate-700">
                       <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                       High-Margin Operations due to low OPEX
                     </li>
                     <li className="flex items-center text-slate-700">
                       <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></span>
                       Environmentally Responsible Extraction
                     </li>
                   </ul>
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
        </section>
      </div>
    </div>
  );
};

export default PlacerGold;
