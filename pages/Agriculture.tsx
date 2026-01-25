import React, { useState } from 'react';
import { SAFFRON_STEPS, CCRA_PRODUCTION_OUTPUT, CCRA_FDI_PIPELINE, CCRA_INDUSTRY_ASSOCIATIONS } from '../constants';
import { Sprout, Thermometer, Clock, Scale, Users, Flower2, Leaf, TrendingUp, Building2 } from 'lucide-react';
import DataCard from '../components/DataCard';

interface AgricultureProps {
  initialTab?: 'cannabis' | 'saffron';
}

const Agriculture: React.FC<AgricultureProps> = ({ initialTab = 'saffron' }) => {
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
              onClick={() => setActiveTab('saffron')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all flex items-center ${activeTab === 'saffron'
                  ? 'bg-red-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
            >
              <Flower2 className="w-4 h-4 mr-2" />
              Saffron
            </button>
            <button
              onClick={() => setActiveTab('cannabis')}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all flex items-center ${activeTab === 'cannabis'
                  ? 'bg-green-600 text-white shadow-md'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                }`}
            >
              <Leaf className="w-4 h-4 mr-2" />
              Cannabis
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
                  <h2 className="text-3xl font-bold text-slate-900">Cannabis Project</h2>
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
                      <span className="text-xs font-normal text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                        CCRA Policy Approved
                      </span>
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left py-3 px-4 text-xs uppercase text-slate-500 font-semibold">Investor</th>
                          </tr>
                        </thead>
                        <tbody>
                          {CCRA_FDI_PIPELINE.map((item, idx) => (
                            <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                              <td className="py-3 px-4 text-slate-900 font-medium">{item.investor}</td>
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
                  <h2 className="text-3xl font-bold text-slate-900">Chitral Saffron Project</h2>
                  <p className="text-slate-600">Progress Update - Presented by Dr. Khalid Mehmood | 14 January 2025</p>
                  <p className="text-sm text-slate-500 mt-1">Organization: Infinite Mind Power</p>
                </div>
              </div>

              {/* Project Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Project Status</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Project land fully secured</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>All lease obligations cleared</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>Crop establishment phase completed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-600 mr-2">✓</span>
                      <span>First harvest executed as planned</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">First Year Harvest</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-slate-500 uppercase">Fresh Flowers</p>
                      <p className="text-2xl font-bold text-slate-900">5.5 kg</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase">After Drying</p>
                      <p className="text-2xl font-bold text-slate-900">4.5 kg</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase">Pure Saffron</p>
                      <p className="text-2xl font-bold text-red-600">46 grams</p>
                    </div>
                    <p className="text-xs text-slate-500 italic mt-4">Yield within expected biological norms for Year-1</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Location & Land</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-slate-500">Location</p>
                      <p className="font-medium text-slate-900">Ayun, Chitral</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Access Route</p>
                      <p className="font-medium text-slate-900">Main Der – Chitral Road</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Active Cultivation</p>
                      <p className="font-medium text-slate-900">15 kanal</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Total Available Land</p>
                      <p className="font-medium text-red-600">100 kanal</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Video */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Project Overview Video</h3>
                <div className="max-w-3xl mx-auto">
                  <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-lg">
                    <video
                      controls
                      className="w-full h-auto"
                      poster="/assets/saffron flower.jpeg"
                    >
                      <source src="/assets/saffron-project-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>

              {/* Technical Context */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-xl border border-red-200 mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Technical Context: Biological Crop Cycle</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-700 mb-4">Saffron follows a natural maturity cycle where yield increases significantly over time:</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start">
                        <span className="font-bold text-red-600 mr-2">Year 1:</span>
                        <span>Naturally low yield (establishment phase)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-red-600 mr-2">Year 2:</span>
                        <span>Significant yield increase as bulbs multiply</span>
                      </li>
                      <li className="flex items-start">
                        <span className="font-bold text-red-600 mr-2">Year 3:</span>
                        <span>Peak production as bulbs reach full maturity</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg">
                    <h4 className="font-bold text-slate-900 mb-3">Key Strengths</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• High-value, low-volume agricultural crop</li>
                      <li>• Easy storage and transport characteristics</li>
                      <li>• Returns improve over time (biological multiplication)</li>
                      <li>• Minimal recurring intervention after establishment</li>
                      <li>• 5-year cultivation horizon with continuous re-cultivation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Agronomic Activities */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Agronomic Activities Completed</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200 text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Sprout className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Land Preparation</h4>
                    <p className="text-sm text-slate-600">Bush clearing for clean growth environment</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-200 text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Scale className="w-6 h-6 text-amber-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Fertilization</h4>
                    <p className="text-sm text-slate-600">Applied according to crop requirements</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-200 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Leaf className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Protective Sprays</h4>
                    <p className="text-sm text-slate-600">Applied to support plant health</p>
                  </div>
                  <div className="bg-white p-5 rounded-xl border border-slate-200 text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">Field Monitoring</h4>
                    <p className="text-sm text-slate-600">Continuous care throughout season</p>
                  </div>
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

              {/* Technical Cultivation Details */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm mb-12">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Technical Details – Saffron Cultivation</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                      <Thermometer className="w-5 h-5 mr-2 text-red-600" />
                      Climate Requirements
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600 mb-6">
                      <li>• Temperate climate with hot, dry summers and cold winters</li>
                      <li>• Ideal growing temperature: 15°C – 30°C</li>
                      <li>• Winter tolerance: down to –5°C (with frost protection)</li>
                      <li>• Annual rainfall: 300–400 mm</li>
                      <li>• Full sunlight required (6–8 hours daily)</li>
                    </ul>

                    <h4 className="font-bold text-slate-900 mb-3">Soil Conditions</h4>
                    <ul className="space-y-2 text-sm text-slate-600 mb-6">
                      <li>• Well-drained loamy or sandy-loam soil</li>
                      <li>• pH range: 6.0 – 8.0</li>
                      <li>• Avoid waterlogging; raised beds/slopes preferred</li>
                    </ul>

                    <h4 className="font-bold text-slate-900 mb-3">Land Preparation</h4>
                    <ul className="space-y-2 text-sm text-slate-600 mb-6">
                      <li>• Deep plowing (20–30 cm)</li>
                      <li>• Organic compost or manure before planting</li>
                      <li>• Complete weed removal</li>
                    </ul>

                    <h4 className="font-bold text-slate-900 mb-3">Irrigation</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Light irrigation after planting</li>
                      <li>• Minimal watering during growth</li>
                      <li>• Overwatering strictly avoided</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 mb-3">Saffron Corm (Bulb) Specifications</h4>
                    <ul className="space-y-2 text-sm text-slate-600 mb-6">
                      <li>• Healthy, disease-free corms</li>
                      <li>• Minimum weight: 8–10 grams</li>
                      <li>• Planting depth: 10–15 cm</li>
                      <li>• Row spacing: 15–20 cm</li>
                      <li>• Corm spacing: 10–15 cm</li>
                    </ul>

                    <h4 className="font-bold text-slate-900 mb-3">Fertilization</h4>
                    <ul className="space-y-2 text-sm text-slate-600 mb-6">
                      <li>• Organic manure pre-planting</li>
                      <li>• Phosphorus & Potassium during growth</li>
                      <li>• Avoid excessive nitrogen</li>
                    </ul>

                    <h4 className="font-bold text-slate-900 mb-3">Pest & Disease Management</h4>
                    <ul className="space-y-2 text-sm text-slate-600 mb-6">
                      <li>• Pests: rodents, mites, nematodes</li>
                      <li>• Diseases: fusarium wilt, corm rot, rust</li>
                      <li>• Prevention via crop rotation, drainage, healthy corms</li>
                    </ul>

                    <h4 className="font-bold text-slate-900 mb-3">Harvesting & Post-Harvest</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>• Flowering: October–November</li>
                      <li>• Manual stigma harvesting (early morning)</li>
                      <li>• Drying at 30–35°C in ventilated shade</li>
                      <li>• Airtight storage away from light & moisture</li>
                      <li>• Shelf life: 2–3 years</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-3">Yield Expectation (Agronomic)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <p className="text-xs text-slate-500 uppercase mb-1">Average Yield</p>
                      <p className="text-xl font-bold text-red-600">1–5 kg/hectare</p>
                      <p className="text-xs text-slate-600 mt-1">Dried saffron</p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-lg">
                      <p className="text-xs text-slate-500 uppercase mb-1">Labor Intensity</p>
                      <p className="text-xl font-bold text-amber-600">High</p>
                      <p className="text-xs text-slate-600 mt-1">Manual harvesting required</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-xs text-slate-500 uppercase mb-1">Replanting Cycle</p>
                      <p className="text-xl font-bold text-blue-600">4–5 years</p>
                      <p className="text-xs text-slate-600 mt-1">Recommended interval</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team & Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-4">Team & Organizational Strengths</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">✓</span>
                      <span>Highly skilled and trained agricultural team</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">✓</span>
                      <span>Strong local relationship with Chitral region</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">✓</span>
                      <span>Proven on-ground farming experience (5 years)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-400 mr-2">✓</span>
                      <span>Successful execution history</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-slate-500">Email</p>
                      <p className="font-medium text-slate-900">info@inifinitemindpower.co</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Phone</p>
                      <p className="font-medium text-slate-900">0332-3274084</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Location</p>
                      <p className="font-medium text-slate-900">Chitral, Pakistan</p>
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
