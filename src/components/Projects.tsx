import { motion } from 'motion/react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import resumeData from '@/data/resume.json';

export default function Projects() {
  const { projects } = resumeData;

  return (
    <section id="projects" className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Featured Projects</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-[0_0_10px_hsl(var(--primary))]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
        {projects?.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className="h-full"
          >
            <Card className="h-full glass-card border-none bg-card/40 hover:bg-card/60 transition-all duration-400 ease-in-out flex flex-col overflow-hidden group hover-3d-lift">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-400 flex items-center gap-2">
                  <Code2 className="h-5 w-5 text-primary" />
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="flex-grow">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.techStack.map((tech, tIndex) => (
                    <Badge 
                      key={tIndex} 
                      variant="secondary" 
                      className="text-xs bg-secondary/20 text-secondary-foreground hover:bg-secondary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
