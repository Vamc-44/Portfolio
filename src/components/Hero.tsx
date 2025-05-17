
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Transforming Data into Insights.';

  useEffect(() => {
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-start justify-center space-y-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <p className="font-mono text-green mb-2">Hi, my name is</p>
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-lightest-slate mb-2">
        Data Scientist<span className="text-green">.</span>
      </h1>
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate mb-4 h-12">
        {typedText}
        <span className="inline-block w-1 h-6 md:h-8 bg-green ml-1 animate-pulse-slow"></span>
      </h2>
      
      <p className="text-slate max-w-xl text-lg mb-8">
        I'm a data science graduate specializing in machine learning, data analysis, 
        and visualization. My work focuses on turning complex data into meaningful insights
        that drive decision-making.
      </p>

      <div className="flex flex-wrap gap-4">
        <Button 
          variant="outline" 
          size="lg"
          className="border-green text-green hover:bg-green-tint transition-all"
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View My Projects
        </Button>
        
        <Button 
          variant="ghost" 
          size="lg" 
          className="border border-transparent hover:border-light-slate text-light-slate hover:bg-lightest-navy"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get In Touch
        </Button>
      </div>
    </div>
  );
};

export default Hero;
