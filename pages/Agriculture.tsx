import React, { useState } from 'react';
import { SAFFRON_STEPS, CCRA_PRODUCTION_OUTPUT, CCRA_FDI_PIPELINE, CCRA_INDUSTRY_ASSOCIATIONS } from '../constants';
import { Sprout, Thermometer, Clock, Scale, Users, Flower2, Leaf, TrendingUp, Building2 } from 'lucide-react';
import DataCard from '../components/DataCard';

interface AgricultureProps {
  initialTab?: 'cannabis' | 'saffron';
}

const Agriculture: React.FC<AgricultureProps> = ({ initialTab = 'cannabis' }) => {
  const [activeTab, setActiveTab] = useState<'cannabis' | 'saffron'>(initialTab);

  // Update activeTab when initialTab prop changes (e.g. navigation)
  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  return (
    <div className="min-h-screen py-10 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 border-b border-slate-200 pb-8">
          <span className="inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider bg-green-100 text-green-800 rounded-full">Agriculture Sector</span>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Cash Crops</h1>
          <p className="text-xl text-slate-500 max-w-3xl">
            High-value agricultural initiatives: Medicinal & Industrial Cannabis and Premium Saffron Production
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="flex space-x-2 bg-white p-1 rounded-lg inline-flex border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveTab('cannabis')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all flex items-center ${activeTab === 'cannabis'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
            >
              <Leaf className="w-4 h-4 mr-2" />
              Cannabis (CCRA)
            </button>
            <button
              onClick={() => setActiveTab('saffron')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all flex items-center ${activeTab === 'saffron'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
            >
              <Flower2 className="w-4 h-4 mr-2" />
              Saffron
            </button>
          </div>
        </div>

        {/* Cannabis Content */}
        {activeTab === 'cannabis' && (
          <div className="animate-fadeIn">
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-emerald-100 rounded-full mr-4 text-emerald-600">
                  <TrendingUp size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Cannabis Control & Regulatory Authority</h2>
                  <p className="text-slate-600">Medicinal & Industrial Hemp Initiative</p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
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
          </div>
        )}

        {/* Saffron Content */}
        {activeTab === 'saffron' && (
          <div className="animate-fadeIn">
            <section className="mb-16">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-red-100 rounded-full mr-4 text-red-600">
                  <Sprout size={32} />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-slate-900">Saffron - The Red Gold</h2>
                  <p className="text-slate-600">Chitral Initiative: High-Value Precision Harvesting</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
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

                <div className="md:col-span-7 lg:col-span-8 space-y-8">
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
        )}
      </div>
    </div>
  );
};

export default Agriculture;
