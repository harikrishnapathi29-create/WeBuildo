import { useState } from 'react';
import { ChevronLeft, ChevronRight, IndianRupee, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Modern Villa in Mancherial',
    before: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    cost: '45 Lakhs',
    duration: '8 Months',
    type: 'Full Construction'
  },
  {
    title: 'Luxury Interior Design',
    before: 'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
    cost: '12 Lakhs',
    duration: '3 Months',
    type: 'Interior Design'
  },
  {
    title: 'Complete Home Renovation',
    before: 'https://images.pexels.com/photos/3935333/pexels-photo-3935333.jpeg?auto=compress&cs=tinysrgb&w=800',
    after: 'https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg?auto=compress&cs=tinysrgb&w=800',
    cost: '28 Lakhs',
    duration: '5 Months',
    type: 'Renovation'
  }
];

export default function ProjectShowcase() {
  const [currentProject, setCurrentProject] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX - rect.left : e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setSliderPosition(50);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setSliderPosition(50);
  };

  const project = projects[currentProject];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects, real transformations
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div
              className="relative h-96 md:h-[500px] cursor-ew-resize select-none"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={handleMove}
            >
              <img
                src={project.after}
                alt="After"
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={project.before}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <ChevronLeft className="w-5 h-5 text-gray-600 absolute left-1" />
                  <ChevronRight className="w-5 h-5 text-gray-600 absolute right-1" />
                </div>
              </div>

              <div className="absolute top-4 left-4 px-4 py-2 bg-black/70 backdrop-blur-sm text-white rounded-lg font-semibold">
                BEFORE
              </div>
              <div className="absolute top-4 right-4 px-4 py-2 bg-black/70 backdrop-blur-sm text-white rounded-lg font-semibold">
                AFTER
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold">
                    {project.type}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prevProject}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <IndianRupee className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Project Cost</div>
                    <div className="text-lg font-bold text-gray-900">{project.cost}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="text-lg font-bold text-gray-900">{project.duration}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentProject(index);
                  setSliderPosition(50);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentProject ? 'w-8 bg-emerald-500' : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}