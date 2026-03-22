import { useState } from 'react';
import { MessageCircle, X, Phone, Mail, MapPin, Send } from 'lucide-react';

export default function LeadGeneration() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    requirement: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
    setShowForm(false);
    setFormData({ name: '', phone: '', location: '', requirement: '' });
  };

  return (
    <>
      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-24 right-6 z-50 px-6 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
      >
        <Phone className="w-5 h-5" />
        Get Free Quote
      </button>

      <a
        href="https://wa.me/919876543210?text=Hi, I'm interested in your construction services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="absolute right-16 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slide-up">
            <div className="sticky top-0 bg-gradient-to-r from-emerald-500 to-cyan-500 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Get Free Quote</h3>
                  <p className="text-white/90 text-sm">We'll call you back in 10 minutes</p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Location *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                    placeholder="Your city/area"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Requirement *
                </label>
                <select
                  required
                  value={formData.requirement}
                  onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="">Select service</option>
                  <option value="home-construction">Home Construction</option>
                  <option value="interior-design">Interior Design</option>
                  <option value="renovation">Renovation</option>
                  <option value="electrical-plumbing">Electrical & Plumbing</option>
                  <option value="material-supply">Material Supply</option>
                  <option value="consultation">Just Consultation</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Submit Request
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to receive calls/messages from our team
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
