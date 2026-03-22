import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Comparison from './components/Comparison';
import HowItWorks from './components/HowItWorks';
import ProjectShowCase from './components/ProjectShowCase';
import Testimonials from './components/Testimonials';
import CostEstimator from './components/CostEstimator';
import Footer from './components/Footer';
import LeadGeneration from './components/LeadGeneration';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Services />
      <Comparison />
      <HowItWorks />
      <ProjectShowCase />
      <Testimonials />
      <CostEstimator />
      <Footer />
      <LeadGeneration />
    </div>
  );
}

export default App;
