import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="min-h-screen bg-base-950 text-txt-primary noise-bg">
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Ambient gradient blobs */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full animate-blob opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #DFFF00 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full animate-blob opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, #DFFF00 0%, transparent 70%)',
            animationDelay: '4s',
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] rounded-full animate-blob opacity-[0.04]"
          style={{
            background: 'radial-gradient(circle, #DFFF00 0%, transparent 70%)',
            animationDelay: '8s',
          }}
        />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
