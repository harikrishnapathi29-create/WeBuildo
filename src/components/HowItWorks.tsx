import { FileText, Users, PenTool, Hammer, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Submit Requirement',
    description: 'Share your project details and vision with us',
    time: 'Day 1'
  },
  {
    icon: Users,
    title: 'Get Consultation',
    description: 'Free expert consultation and cost estimation',
    time: 'Day 2-3'
  },
  {
    icon: PenTool,
    title: 'Design & Planning',
    description: 'Detailed architectural plans and 3D visualization',
    time: 'Week 1-2'
  },
  {
    icon: Hammer,
    title: 'Execution',
    description: 'Professional execution with live tracking',
    time: 'As per timeline'
  },
  {
    icon: CheckCircle,
    title: 'Delivery with Warranty',
    description: 'Final handover with 5-year warranty',
    time: 'Project completion'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, transparent process from start to finish
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-cyan-200 to-emerald-200 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center group">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center font-bold text-emerald-600 shadow-lg border-2 border-emerald-200">
                        {index + 1}
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-6 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                      <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-3">
                        {step.time}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-cyan-300 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-100 to-amber-100 rounded-full border-2 border-orange-200">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            <span className="font-semibold text-orange-700">Limited slots available this month</span>
          </div>
        </div>
      </div>
    </section>
  );
}
