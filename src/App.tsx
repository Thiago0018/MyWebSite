import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { CTASection } from './components/CTASection';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <div>
        <Navbar />
        <main>
          <Hero />
          <ProjectsSection />
        </main>
      </div>
      <CTASection />
    </div>
  );
}
