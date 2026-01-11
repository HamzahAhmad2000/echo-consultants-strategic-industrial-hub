import React from 'react';
import { Database } from 'lucide-react';

const Aris: React.FC = () => {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-slate-200 pb-8">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Aris (PGM)</h1>
          <p className="text-xl text-slate-500 max-w-3xl">
            Strategic Platinum Group Metals Project. First-mover access to underexplored Ophiolite belts in Pakistan.
          </p>
        </div>

        <section className="border-t border-slate-200 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-purple-600 font-mono text-sm tracking-widest uppercase font-bold">Future Tech</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-1 mb-4">Platinum Group Metals (PGM)</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Pakistan hosts ophiolite belts geologically analogous to South Africa’s legendary <strong>Bushveld Complex</strong>.
                Our project targets Podiform chromitites in the Zhob and Lasbela belts.
              </p>
              
              <div className="mb-6 p-4 bg-purple-50 rounded-xl border border-purple-100">
                 <h4 className="font-bold text-purple-900 mb-2">Target Metals</h4>
                 <p className="text-sm text-purple-800">
                    Platinum, Palladium, Rhodium, Iridium, Ruthenium, Osmium.
                 </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-slate-900 font-bold mb-4 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-purple-600" />
                  Confirmed Targets & Grades
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex justify-between text-sm border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Primary Targets</span>
                    <span className="text-slate-900 font-medium">Muslim Bagh & Zhob (Balochistan)</span>
                  </li>
                  <li className="flex justify-between text-sm border-b border-slate-100 pb-2">
                    <span className="text-slate-500">Secondary Exploration</span>
                    <span className="text-slate-900 font-medium">Waziristan (KP)</span>
                  </li>
                  <li className="flex justify-between text-sm border-b border-slate-100 pb-2">
                    <span className="text-slate-500">High Altitude</span>
                    <span className="text-slate-900 font-medium">Supat Complex (Gilgit-Baltistan)</span>
                  </li>
                  <li className="flex justify-between text-sm pt-2">
                    <span className="text-slate-500">Initial Sample Grade (Total PGM)</span>
                    <span className="text-slate-900 font-mono font-bold">4-8 g/t</span>
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
                  <p className="text-slate-500 text-xs uppercase mb-1">Market Driver</p>
                  <div className="text-2xl font-bold text-slate-900 mb-2">Strategic Supply Chain</div>
                  <p className="text-sm text-slate-600">Critical for hydrogen fuel cells, catalysts, and advanced electronics.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Aris;
