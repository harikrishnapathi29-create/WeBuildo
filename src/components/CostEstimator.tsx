import { useState } from 'react';
import { Calculator, Home, Ruler, IndianRupee } from 'lucide-react';

export default function CostEstimator() {
  const [area, setArea] = useState('');
  const [projectType, setProjectType] = useState('');
  const [estimate, setEstimate] = useState<number | null>(null);

  const calculateEstimate = () => {
    if (!area || !projectType) return;

    const areaNum = parseFloat(area);
    let costPerSqFt = 0;

    switch (projectType) {
      case 'basic':
        costPerSqFt = 1500;
        break;
      case 'standard':
        costPerSqFt = 2000;
        break;
      case 'premium':
        costPerSqFt = 2500;
        break;
      case 'luxury':
        costPerSqFt = 3500;
        break;
    }

    setEstimate(areaNum * costPerSqFt);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Instant Cost Estimator
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get a rough estimate for your dream project in seconds
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Ruler className="w-4 h-4" />
                    Area (Sq. Ft.) *
                  </div>
                </label>
                <input
                  type="number"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  placeholder="e.g., 1200"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Project Type *
                  </div>
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors text-lg"
                >
                  <option value="">Select type</option>
                  <option value="basic">Basic (₹1,500/sq.ft)</option>
                  <option value="standard">Standard (₹2,000/sq.ft)</option>
                  <option value="premium">Premium (₹2,500/sq.ft)</option>
                  <option value="luxury">Luxury (₹3,500/sq.ft)</option>
                </select>
              </div>
            </div>

            <button
              onClick={calculateEstimate}
              disabled={!area || !projectType}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              <Calculator className="w-5 h-5" />
              Calculate Estimate
            </button>

            {estimate && (
              <div className="mt-8 p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-xl border-2 border-emerald-200 animate-fade-in">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-2">Estimated Project Cost</div>
                  <div className="flex items-center justify-center gap-2">
                    <IndianRupee className="w-8 h-8 text-emerald-600" />
                    <div className="text-4xl font-bold text-gray-900">
                      {estimate.toLocaleString('en-IN')}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mt-2">
                    This is a rough estimate. Final cost may vary based on materials and design.
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-emerald-200">
                  <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
                    Get Detailed Quote
                  </button>
                </div>
              </div>
            )}

            <div className="mt-8 p-4 bg-orange-50 border border-orange-200 rounded-xl flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 animate-pulse"></div>
              </div>
              <div className="text-sm text-orange-800">
                <strong>Limited Time Offer:</strong> Book a free site visit this month and get 10% off on material costs!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
