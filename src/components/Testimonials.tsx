import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    location: 'Mancherial',
    project: 'Villa Construction',
    rating: 5,
    text: 'Outstanding service! They completed our dream home exactly as promised. The live tracking feature gave us complete peace of mind. Highly recommended!',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Priya Sharma',
    location: 'Mancherial',
    project: 'Interior Design',
    rating: 5,
    text: 'Best decision we made! The interior design team transformed our house into a modern masterpiece. Quality work and transparent pricing throughout.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Vikram Reddy',
    location: 'Mancherial',
    project: 'Home Renovation',
    rating: 5,
    text: 'Professional team, timely delivery, and excellent quality. The 5-year warranty shows their confidence. Worth every rupee spent!',
    image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200'
  },
  {
    name: 'Anjali Patel',
    location: 'Mancherial',
    project: 'Commercial Space',
    rating: 5,
    text: 'They handled our commercial project with utmost professionalism. No hidden costs, excellent coordination, and beautiful result.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real feedback from real people who built with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-emerald-100" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-emerald-100">
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center border-4 border-white">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{currentTestimonial.location}</p>
                  <div className="inline-flex items-center gap-1">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <div className="px-4 py-2 bg-emerald-50 rounded-full">
                  <span className="text-sm font-semibold text-emerald-700">
                    {currentTestimonial.project}
                  </span>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8 italic">
                "{currentTestimonial.text}"
              </p>

              <div className="flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8 bg-emerald-500' : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-gray-900 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-gray-900 mb-1">1000+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">Projects Done</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <div className="text-3xl font-bold text-gray-900 mb-1">5 Years</div>
              <div className="text-sm text-gray-600">Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
