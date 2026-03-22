import { CheckCircle, Shield, Eye, Package, Award, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Verified Contractors',
    description: 'Pre-screened, background-checked professionals you can trust',
    color: 'from-emerald-400 to-teal-400'
  },
  {
    icon: TrendingUp,
    title: 'Transparent Pricing',
    description: 'No hidden costs. Know exactly what you pay, upfront',
    color: 'from-cyan-400 to-blue-400'
  },
  {
    icon: Shield,
    title: '5-Year Warranty',
    description: 'Industry-leading warranty on all construction work',
    color: 'from-orange-400 to-amber-400'
  },
  {
    icon: Eye,
    title: 'Live Project Tracking',
    description: 'Monitor your project progress in real-time, anytime',
    color: 'from-pink-400 to-rose-400'
  },
  {
    icon: Package,
    title: 'One-Stop Solution',
    description: 'Everything from design to delivery, under one roof',
    color: 'from-violet-400 to-purple-400'
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Multiple quality checks at every stage of construction',
    color: 'from-green-400 to-emerald-400'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why 10,000+ People Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building trust through transparency, quality, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
