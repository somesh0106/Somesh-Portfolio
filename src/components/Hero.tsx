import { motion } from 'motion/react';
import { ArrowDown, FileText, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import resumeData from '@/data/resume.json';

export default function Hero() {
  const { basics } = resumeData;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-4 pt-20 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow delay-1000" />

      <div className="max-w-5xl w-full text-center space-y-8 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-4"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-mono tracking-wider mb-4 backdrop-blur-sm">
            AVAILABLE FOR WORK
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground mb-6">
            <span className="block text-muted-foreground text-4xl md:text-5xl mb-2 font-light">Hi, I'm</span>
            <span className="text-gradient animate-shimmer bg-[length:200%_100%]">
              {basics.name}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light max-w-2xl mx-auto">
            {basics.title}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          {basics.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
        >
          <Button 
            size="lg" 
            className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_-10px_hsl(var(--primary))] hover:-translate-y-1 hover:scale-[1.05] transition-all duration-400 ease-in-out hover:shadow-[0_0_40px_-5px_hsl(var(--primary)/0.5)]"
            onClick={scrollToProjects}
          >
            View Projects <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="w-full sm:w-auto text-lg h-14 px-8 rounded-full border-white/10 bg-white/5 text-foreground hover:bg-white/10 backdrop-blur-md hover:-translate-y-1 hover:scale-[1.05] hover:shadow-lg hover:shadow-white/10 transition-all duration-400 ease-in-out"
            asChild
          >
            <a href="/Somesh_Resume...pdf" download="Somesh_Resume...pdf">
              Resume <FileText className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex gap-6 justify-center mt-12"
        >
          <button onClick={scrollToContact} className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-400 ease-in-out">
            <Mail className="h-6 w-6" />
          </button>
          <a href={`https://${basics.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-400 ease-in-out">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href={`https://${basics.github}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-400 ease-in-out">
            <Github className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
