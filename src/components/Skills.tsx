import { motion } from 'motion/react';
import { Badge } from '@/components/ui/badge';
import resumeData from '@/data/resume.json';

export default function Skills() {
  const { skills, certifications } = resumeData;

  return (
    <section id="skills" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Skills & Certifications</h2>
        <div className="h-1 w-20 bg-accent mx-auto rounded-full shadow-[0_0_10px_hsl(var(--accent))]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-10">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-primary mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((skill, sIndex) => (
                  <Badge 
                    key={sIndex} 
                    variant="outline" 
                    className="px-4 py-2 text-sm bg-muted/50 border-border text-muted-foreground hover:bg-primary/20 hover:text-primary hover:border-primary/50 transition-all duration-400 ease-in-out cursor-default backdrop-blur-sm hover:scale-105 hover:shadow-md hover:shadow-primary/10"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="bg-card/30 rounded-2xl p-8 border border-border backdrop-blur-sm h-fit"
        >
          <h3 className="text-xl font-semibold text-secondary mb-6 flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_10px_hsl(var(--secondary))]" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted border border-border hover:border-secondary/30 transition-all duration-400 ease-in-out hover:scale-[1.03] hover:shadow-lg hover:shadow-secondary/10"
              >
                <div className="h-2 w-2 rounded-full bg-secondary group-hover:shadow-[0_0_10px_hsl(var(--secondary))]" />
                <span className="text-muted-foreground font-medium group-hover:text-foreground transition-colors duration-400">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
