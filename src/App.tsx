import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import AnimatedBackground from '@/components/AnimatedBackground';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Linkedin, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import resumeData from '@/data/resume.json';

function App() {
  const [loading, setLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen text-foreground font-sans selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden">
        <AnimatedBackground />
        <ScrollProgress />

        <AnimatePresence>
          {loading ? (
            <motion.div
              key="splash"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-foreground font-mono mb-8 tracking-tighter">
                  SD
                </div>
                <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full animate-pulse-glow" />
              </motion.div>
              <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          ) : (
            <motion.main
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative z-0"
            >
              {/* Navbar */}
              <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-background/80 border-b border-border">
                <div className="text-xl font-bold text-foreground font-mono tracking-tighter">SD.</div>
                
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                  {navLinks.map((link) => (
                    <a 
                      key={link.name}
                      href={link.href} 
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-400 ease-in-out relative group"
                    >
                      {link.name}
                      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-400 ease-in-out group-hover:w-full" />
                    </a>
                  ))}
                  <a 
                    href="/Somesh_Resume...pdf" 
                    download="Somesh_Resume...pdf"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-400 ease-in-out relative group"
                  >
                    Resume
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-400 ease-in-out group-hover:w-full" />
                  </a>
                  <div className="h-4 w-px bg-border mx-2" />
                  <div className="flex gap-4">
                    <button onClick={scrollToContact} className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-400 ease-in-out">
                      <Mail className="h-5 w-5" />
                    </button>
                    <a href={`https://${resumeData.basics.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-400 ease-in-out">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                  <ModeToggle />
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                  <ModeToggle />
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </div>
              </nav>

              {/* Mobile Nav Overlay */}
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                  >
                    <div className="flex flex-col gap-6 text-center">
                      {navLinks.map((link) => (
                        <a 
                          key={link.name}
                          href={link.href} 
                          className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Hero />
              <Achievements />
              <Experience />
              <Projects />
              <Skills />
              <Education />
              <Contact />

              <footer className="py-12 text-center text-muted-foreground text-sm border-t border-border bg-background/50 backdrop-blur-lg">
                <p>© {new Date().getFullYear()} {resumeData.basics.name}</p>
              </footer>
            </motion.main>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
