
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="section-heading">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3 space-y-6">
          <p className="text-light-slate">
            Hello! I'm a passionate Data Scientist with expertise in extracting meaningful insights 
            from complex datasets. My journey into data science began during my undergraduate studies, 
            where I discovered my love for using analytical methods to solve real-world problems.
          </p>
          
          <p className="text-light-slate">
            As a recent graduate with a Master's in Data Science, I've developed a strong foundation in 
            statistical analysis, machine learning algorithms, and data visualization techniques. I'm particularly 
            interested in the applications of AI in healthcare and environmental science.
          </p>
          
          <p className="text-light-slate">
            What sets me apart is my ability to communicate complex findings clearly to both technical 
            and non-technical stakeholders. I believe that data science is only valuable when insights 
            can be translated into actionable strategies.
          </p>
          
          <div className="pt-4">
            <p className="text-lightest-slate font-medium mb-3">
              Here are some technologies I've been working with recently:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "Python", "Power BI", "SQL",  
                "Tableau", "R", "Excel",
                "Statistical Analysis", "Data Visualization",
                "Pandas", "NumPy", "Matplotlib",
                "Machine Learning", "Deep Learning",
                "Generative Ai", "NLP", "LLMs",
                "AWS", "Microsoft Fabric"
              ].map((tech) => (
                <div key={tech} className="flex items-center">
                  <span className="text-green mr-2">▹</span>
                  <span className="text-slate text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-green opacity-30 rounded-lg blur group-hover:opacity-50 transition duration-500"></div>
            <Card className="relative bg-light-navy border-0 overflow-hidden">
              <CardContent className="p-1">
                <div className="overflow-hidden rounded">
                  <img
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500&q=80"
                    alt="Profile"
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-light-navy text-green border-green">
              Machine Learning
            </Badge>
            <Badge variant="outline" className="bg-light-navy text-green border-green">
              Statistical Analysis
            </Badge>
            <Badge variant="outline" className="bg-light-navy text-green border-green">
              Data Visualization
            </Badge>
            <Badge variant="outline" className="bg-light-navy text-green border-green">
              Big Data
            </Badge>
            <Badge variant="outline" className="bg-light-navy text-green border-green">
              NLP
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
