import { motion } from 'motion/react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import resumeData from '@/data/resume.json';

export default function Experience() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Experience</h2>
        <div className="h-1 w-20 bg-secondary mx-auto rounded-full shadow-[0_0_10px_hsl(var(--secondary))]" />
      </motion.div>

      <div className="space-y-12 relative">
        {/* Vertical line for desktop */}
        <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/50 via-secondary/50 to-transparent" />

        {experience.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className="relative pl-0 md:pl-24"
          >
            {/* Timeline dot */}
            <div className="hidden md:flex absolute left-8 top-8 w-4 h-4 bg-background rounded-full border-2 border-primary z-10 transform -translate-x-1/2 shadow-[0_0_10px_hsl(var(--primary))]" />

            <Card className="group glass-card border-none bg-transparent shadow-none hover:bg-card/50 hover:border-white/10 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 ease-in-out hover:-translate-y-1 hover:scale-[1.02]">
              <CardHeader className="pb-4 border-b border-transparent group-hover:border-border transition-colors duration-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl text-foreground mb-2 flex items-center gap-3 group-hover:text-primary transition-colors duration-400">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {job.company}
                    </CardTitle>
                    <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-secondary" /> {job.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 reveal-content">
                <div className="reveal-inner space-y-8 pt-6">
                  {job.roles.map((role, rIndex) => (
                    <div key={rIndex} className="relative">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h4 className="text-lg font-semibold text-primary">{role.title}</h4>
                        <span className="text-xs font-mono text-muted-foreground flex items-center gap-1 bg-muted/50 px-3 py-1 rounded-full border border-border">
                          <Calendar className="h-3 w-3" /> {role.dates}
                        </span>
                      </div>
                    </div>
                  ))}
                  
                  {job.description && (
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">{job.description}</p>
                    
                  )}
                  
                  <ul className="space-y-3">
                    {job.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="text-muted-foreground flex items-start gap-3 text-sm md:text-base group/item">
                        <span className="text-secondary mt-1.5 group-hover/item:text-primary transition-colors">•</span>
                        <span className="group-hover/item:text-foreground transition-colors">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
