import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import resumeData from '@/data/resume.json';

export default function Education() {
  const { education } = resumeData;

  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Education</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-[0_0_10px_hsl(var(--primary))]" />
      </motion.div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className="hover-3d-lift"
          >
            <Card className="glass-card border-none bg-card/30 hover:bg-card/50 transition-all duration-400 ease-in-out group">
              <CardContent className="p-8 flex items-start gap-6">
                <div className="p-4 bg-primary/10 rounded-2xl text-primary hidden sm:block shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)] group-hover:scale-110 transition-transform duration-400 ease-in-out">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-400">{edu.institution}</h3>
                  <p className="text-lg text-primary mb-2 font-medium">{edu.degree}</p>
                  <p className="text-muted-foreground font-mono text-sm bg-muted/50 inline-block px-3 py-1 rounded-full border border-border">
                    {edu.dates} {edu.location && `• ${edu.location}`}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
