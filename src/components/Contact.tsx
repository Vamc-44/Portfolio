import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, Instagram, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="section-heading">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <p className="text-light-slate mb-6">
          I'm currently exploring new opportunities in Data Science and Machine Learning, with a strong focus on analyzing and extracting insights from data.
Whether you have a question, a project idea, or just want to connect and exchange thoughts—I'd be happy to chat.
Feel free to reach out!
          </p>
          
          <Card className="bg-light-navy border-0 mb-8">
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center">
                  <Mail className="text-green" size={20} />
                </div>
                <div>
                  <p className="text-lightest-slate font-medium">Email</p>
                  <a href="mailto:hello@datascienceportfolio.com" className="text-green hover:underline">
                    ankenapalle.0911@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <h3 className="text-lightest-slate text-xl font-semibold">Connect With Me</h3>
            
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Vamc-44" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lightest-navy flex items-center justify-center transition-colors hover:bg-green/20"
              >
                <Github className="text-green" size={20} />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/ankenapalle" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lightest-navy flex items-center justify-center transition-colors hover:bg-green/20"
              >
                <Linkedin className="text-green" size={20} />
              </a>

              <a 
                href="https://public.tableau.com/app/profile/vamshidhar.reddy.ankenapalle/vizzes" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lightest-navy flex items-center justify-center transition-colors hover:bg-green/20"
              >
                <Instagram className="text-green" size={20} />
              </a>

              <a 
                href="https://www.instagram.com/_vamc__44/profilecard/?igsh=MWR2bW8wazB2OW5hNw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lightest-navy flex items-center justify-center transition-colors hover:bg-green/20"
              >
                <Plus className="text-green" size={20} />
              </a>
          
            </div>
          </div>
        </div>
        
        <div>
          <Card className="bg-light-navy border-0">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-lightest-slate">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-lightest-navy border-lightest-navy focus:border-green text-lightest-slate"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-lightest-slate">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-lightest-navy border-lightest-navy focus:border-green text-lightest-slate"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-lightest-slate">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-lightest-navy border-lightest-navy focus:border-green text-lightest-slate min-h-[150px]"
                    placeholder="Your message..."
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-green text-navy hover:bg-green/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
