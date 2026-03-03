import { motion } from 'motion/react';
import { Trophy, TrendingUp, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import resumeData from '@/data/resume.json';

export default function Achievements() {
  const { achievements } = resumeData;

  const icons = [TrendingUp, Zap, Trophy];

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Impact & Achievements</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-[0_0_10px_hsl(var(--primary))]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {achievements.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
              className="hover-3d-lift"
            >
              <Card className="h-full glass-card border-none bg-card/40 hover:bg-card/60 transition-all duration-400 ease-in-out group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-400 ease-in-out shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-400">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-400">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
