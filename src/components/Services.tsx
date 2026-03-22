import { Home, Palette, Hammer, Zap, Package, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Home Construction',
    description: 'Complete home building from foundation to finishing',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-emerald-600 to-teal-600'
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Modern, functional interiors tailored to your lifestyle',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    icon: Hammer,
    title: 'Renovation',
    description: 'Transform your existing space into your dream home',
    image: 'https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-orange-600 to-amber-600'
  },
  {
    icon: Zap,
    title: 'Electrical & Plumbing',
    description: 'Expert installations and maintenance services',
    image: 'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-rose-600 to-pink-600'
  },
  {
    icon: Package,
    title: 'Material Supply',
    description: 'Premium quality materials at competitive prices',
    image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-violet-600 to-purple-600'
  },
  {
    icon: Home,
    title: 'Project Management',
    description: 'End-to-end coordination for stress-free execution',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-green-600 to-emerald-600'
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Complete Construction Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to build or renovate, all in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className={`inline-flex p-3 rounded-xl bg-white/20 backdrop-blur-md mb-4 w-fit group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/90 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <button className="flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all duration-300">
                    Explore Service
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
