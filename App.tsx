import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1688413709025-5f085266935a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBkaWdpdGFsJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NzIyNDM4MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')] bg-cover bg-center opacity-10 pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
      
      {/* Animated grid background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-slate-400 border-t border-slate-800">
        <p>© 2026 Rakotoaromandimby Anjara. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
