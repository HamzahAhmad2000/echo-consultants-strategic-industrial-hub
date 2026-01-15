import React from 'react';
import { Droplets, Wind, Recycle, Leaf, TreePine, Factory } from 'lucide-react';

const Environment: React.FC = () => {
  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-slate-200 pb-8">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider bg-teal-100 text-teal-800 rounded-full">Environmental Sector</span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Environment & Climate</h1>
          <p className="text-xl text-slate-500 max-w-3xl">
            Clean Mining, Water Conservation, and Sustainable Infrastructure for Pakistan's Future
          </p>
        </div>

        {/* Hero Section with Background */}
        <section className="mb-16 relative rounded-2xl overflow-hidden" style={{background: 'linear-gradient(135deg, #0d9488 0%, #0f766e 100%)'}}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{backgroundImage: 'url("/assets/fields (1).jpeg")', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
          </div>
          <div className="relative p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Sustainable Development Initiative</h2>
            <p className="text-lg text-teal-100 max-w-2xl">
              Combining industrial progress with environmental stewardship through green energy, water management, and responsible extraction practices.
            </p>
          </div>
        </section>

        {/* Environmental Projects Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Key Focus Areas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Clean Mining */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-teal-50 text-teal-600 mb-6">
                <Factory size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Clean Mining</h3>
              <p className="text-slate-600 mb-4">
                Environmentally responsible extraction methods that minimize ecological impact while maximizing resource recovery.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  Zero Mercury/Cyanide Processing
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  Land Rehabilitation Programs
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></span>
                  Dust & Emission Control
                </li>
              </ul>
            </div>

            {/* Water Conservation */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 text-blue-600 mb-6">
                <Droplets size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Water Conservation</h3>
              <p className="text-slate-600 mb-4">
                Comprehensive water management strategies to preserve Pakistan's vital water resources for future generations.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Watershed Management
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Groundwater Recharge
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Industrial Water Recycling
                </li>
              </ul>
            </div>

            {/* Dam & Canal Dredging */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-cyan-50 text-cyan-600 mb-6">
                <Recycle size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dam & Canal Dredging</h3>
              <p className="text-slate-600 mb-4">
                Restoration of water infrastructure through sediment removal, increasing storage capacity and improving water flow.
              </p>
              <ul className="space-y-2 text-sm text-slate-500">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                  Reservoir Capacity Restoration
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                  Canal System Maintenance
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span>
                  Sediment Repurposing
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Green Energy Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl border border-emerald-200">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-emerald-100 rounded-full mr-4 text-emerald-600">
                <Wind size={32} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Green Energy Integration</h2>
                <p className="text-slate-600">Renewable energy solutions for industrial operations</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <Leaf className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Solar Integration</h4>
                <p className="text-sm text-slate-600">Industrial solar arrays for mining and processing operations</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <Wind className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Wind Power</h4>
                <p className="text-sm text-slate-600">Hybrid wind-solar systems for remote site operations</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-slate-200">
                <TreePine className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Carbon Offset</h4>
                <p className="text-sm text-slate-600">Reforestation and carbon credit programs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sustainability Metrics */}
        <section className="mb-16">
          <div className="bg-white p-8 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Sustainability Commitments</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-teal-600 mb-2">0%</div>
                <p className="text-sm text-slate-500">Mercury/Cyanide Use</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">80%</div>
                <p className="text-sm text-slate-500">Water Recycling Target</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 mb-2">50%</div>
                <p className="text-sm text-slate-500">Renewable Energy Goal</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-600 mb-2">100%</div>
                <p className="text-sm text-slate-500">Land Rehabilitation</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Environment;
