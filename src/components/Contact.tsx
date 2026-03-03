import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import resumeData from '@/data/resume.json';

export default function Contact() {
  const { basics } = resumeData;

  return (
    <section id="contact" className="py-20 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Get In Touch</h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full shadow-[0_0_10px_hsl(var(--primary))]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <Card className="glass-card border-none bg-card/30 hover:bg-card/50 transition-all duration-400 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform duration-400 ease-in-out">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${basics.email}`} className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-lg">
                  {basics.email}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-none bg-card/30 hover:bg-card/50 transition-all duration-400 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform duration-400 ease-in-out">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Phone</p>
                <a href={`tel:${basics.phone}`} className="text-foreground hover:text-primary transition-colors duration-300 font-medium text-lg">
                  {basics.phone}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card border-none bg-card/30 hover:bg-card/50 transition-all duration-400 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform duration-400 ease-in-out">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="text-foreground font-medium text-lg">{basics.location}</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social & Resume */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col gap-6 justify-center items-center md:items-start p-8 rounded-2xl bg-card/10 backdrop-blur-sm border border-white/5"
        >
          <h3 className="text-2xl font-semibold text-foreground mb-2">Connect & Resume</h3>
          <p className="text-muted-foreground mb-6 text-center md:text-left">
            Feel free to reach out for collaborations or just a friendly hello. 
            You can also download my resume below.
          </p>

          <div className="flex gap-6 mb-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full w-16 h-16 border-white/10 hover:bg-primary/20 hover:text-primary hover:border-primary/50 hover:scale-110 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all duration-700" 
              asChild
            >
              <a href={`https://${basics.linkedin}`} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-8 w-8" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full w-16 h-16 border-white/10 hover:bg-primary/20 hover:text-primary hover:border-primary/50 hover:scale-110 hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all duration-700" 
              asChild
            >
              <a href={`https://${basics.github}`} target="_blank" rel="noopener noreferrer">
                <Github className="h-8 w-8" />
              </a>
            </Button>
          </div>

          <Button 
            size="lg" 
            className="w-full md:w-auto bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-primary/25 hover:-translate-y-1 hover:scale-105 transition-all duration-700"
            asChild
          >
            <a href="/Somesh_Resume...pdf" download="Somesh_Resume...pdf">
              <FileText className="mr-2 h-5 w-5" /> Download Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
