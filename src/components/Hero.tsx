import { ArrowRight, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {

  const [showForm, setShowForm] = useState(false);
  const [success, setSuccess] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-8">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span className="text-white text-sm">Now serving Mancherial</span>
          </div>

          <h1 className="text-5xl font-bold text-white mb-6">
            India's #1 Smart
            <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Construction Platform
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-10">
            From dream to delivery — we build everything, stress-free.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center">

            <button
              onClick={() => setShowForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-full font-semibold hover:scale-105 transition"
            >
              Start Your Project
            </button>

            <button className="px-8 py-4 bg-white/10 text-white rounded-full border border-white/20">
              Get Free Consultation
            </button>

          </div>
        </div>
      </section>

      {/* POPUP FORM */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl relative">

            <h2 className="text-2xl font-bold mb-4 text-center">
              Start Your Project 🚀
            </h2>

            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSdIoHFlvVUmdKXrCMEX3QLGt-ukHSlskwU1Xt7g6b7_M99hZQ/formResponse"
              method="POST"
              target="hidden_iframe"
              onSubmit={() => {
                setTimeout(() => {
                  setSuccess(true);
                  setShowForm(false);
                }, 500);
              }}
              className="space-y-3"
            >

              <input name="entry.1617340518" placeholder="Full Name" required className="w-full p-3 border rounded-lg" />

              <input name="entry.1682103381" placeholder="Phone Number" required className="w-full p-3 border rounded-lg" />

              <input name="entry.541150817" placeholder="Project Location" required className="w-full p-3 border rounded-lg" />

              <input name="entry.1024267548" placeholder="Email Address" className="w-full p-3 border rounded-lg" />

              <select name="entry.1098961303" required className="w-full p-3 border rounded-lg">
                <option value="">Project Type</option>
                <option value="New Residential Construction (Home)">New Construction</option>
                <option value="Renovation">Renovation</option>
                <option value="Commercial Construction">Commercial</option>
              </select>

              <input name="entry.297200043" placeholder="Project Size" required className="w-full p-3 border rounded-lg" />

              <select name="entry.420976950" required className="w-full p-3 border rounded-lg">
                <option value="">Site Status</option>
                <option value="Yes, the site is secured and ready.">Site Ready</option>
                <option value="No, but we are actively searching.">Searching</option>
                <option value="Yes, but preliminary site assessments are ongoing.">Assessment</option>
              </select>

              <select name="entry.65491914" required className="w-full p-3 border rounded-lg">
                <option value="">Timeline</option>
                <option value="Within 6 months (Urgent)">6 months</option>
                <option value="6 months - 1 year">6-12 months</option>
                <option value="1 year - 2 years">1-2 years</option>
                <option value="More than 2 years">2+ years</option>
              </select>

              {/* hidden fields */}
              <input type="hidden" name="entry.1866620799_day" value="1" />
              <input type="hidden" name="entry.1866620799_month" value="1" />
              <input type="hidden" name="entry.1866620799_year" value="2026" />
              <input type="hidden" name="entry.1866620799_hour" value="12" />
              <input type="hidden" name="entry.1866620799_minute" value="00" />

              <button className="w-full bg-emerald-500 text-white py-3 rounded-lg">
                Submit Request
              </button>

            </form>

            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-3 text-xl"
            >
              ✕
            </button>

          </div>

          <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
        </div>
      )}

      {/* SUCCESS MESSAGE */}
      {success && (
        <p className="text-green-500 text-center mt-4">
          ✅ Request submitted successfully. We will contact you soon.
        </p>
      )}
    </>
  );
}