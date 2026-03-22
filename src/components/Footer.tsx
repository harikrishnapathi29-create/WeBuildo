import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Shield, Award, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">BuildPro</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's most trusted smart construction platform. Building dreams, delivering excellence.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-emerald-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {['Home Construction', 'Interior Design', 'Renovation', 'Electrical & Plumbing', 'Material Supply', 'Project Management'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Our Projects', 'Testimonials', 'Careers', 'Blog', 'FAQs'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    +91 95504 46819
                  </a>
                  <div className="text-sm text-gray-500">Mon-Sat: 9 AM - 7 PM</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <a href="mailto:info@buildpro.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  info@buildpro.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  Main Road, Mancherial<br />
                  Telangana, India
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <div className="font-semibold">5-Year Warranty</div>
                <div className="text-sm text-gray-400">On all projects</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center">
                <Award className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <div className="font-semibold">Verified Contractors</div>
                <div className="text-sm text-gray-400">100% background checked</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl">
              <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <div className="font-semibold">On-Time Delivery</div>
                <div className="text-sm text-gray-400">95% projects delivered on time</div>
              </div>
            </div>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 BuildPro. All rights reserved.</p>
            <div className="flex justify-center gap-6 mt-2">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
