import { X, Check } from 'lucide-react';

const comparisons = [
  {
    aspect: 'Time Management',
    traditional: 'Unpredictable delays, no accountability',
    platform: '30% faster with milestone tracking'
  },
  {
    aspect: 'Cost Transparency',
    traditional: 'Hidden costs, surprise bills',
    platform: 'Fixed quotes, zero surprises'
  },
  {
    aspect: 'Quality Assurance',
    traditional: 'No quality checks, DIY supervision',
    platform: 'Multi-stage QC by experts'
  },
  {
    aspect: 'Warranty',
    traditional: 'No warranty or limited 1 year',
    platform: '5-year comprehensive warranty'
  },
  {
    aspect: 'Communication',
    traditional: 'Endless calls, no updates',
    platform: 'Live tracking & instant updates'
  },
  {
    aspect: 'Peace of Mind',
    traditional: 'Constant stress and worry',
    platform: 'Fully managed, stress-free'
  }
];

export default function Comparison() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-orange-100 rounded-full text-orange-600 font-semibold text-sm mb-4">
            THE DIFFERENCE IS CLEAR
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Traditional vs Our Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See why smart builders choose the modern way
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <div className="text-center p-6 bg-red-50 rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl border-2 border-red-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-red-500 rounded-full mb-3">
                <X className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Traditional Way</h3>
              <p className="text-gray-600 mt-2">Old, unreliable methods</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-t-2xl lg:rounded-tl-none lg:rounded-r-2xl border-2 border-emerald-200">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mb-3">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Platform</h3>
              <p className="text-gray-600 mt-2">Smart, reliable, guaranteed</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 ${
                  index !== comparisons.length - 1 ? 'border-b border-gray-200' : ''
                }`}
              >
                <div className="p-6 bg-red-50/30 flex items-start gap-4 border-b lg:border-b-0 lg:border-r border-gray-200">
                  <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{item.aspect}</div>
                    <div className="text-gray-600">{item.traditional}</div>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-emerald-50/30 to-cyan-50/30 flex items-start gap-4">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">{item.aspect}</div>
                    <div className="text-gray-600">{item.platform}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
              Choose The Smart Way
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}