
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHub, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string[];
  githubLink: string;
  demoLink: string | null;
}

interface ProjectsProps {
  filter: string;
}

const Projects = ({ filter }: ProjectsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [filter]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Predictive Customer Analytics",
      description: "Machine learning model that predicts customer churn using behavioral data, helping businesses identify at-risk customers and implement retention strategies.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
      tags: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
      category: ["ml", "data"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: 2,
      title: "Interactive COVID-19 Dashboard",
      description: "Real-time visualization dashboard for tracking COVID-19 statistics globally, featuring interactive maps, trend analysis, and forecasting models.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80",
      tags: ["D3.js", "React", "Python", "Flask"],
      category: ["viz", "data"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: 3,
      title: "NLP Sentiment Analysis",
      description: "Deep learning model that analyzes customer reviews to determine sentiment, helping businesses understand customer feedback at scale.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      tags: ["PyTorch", "BERT", "NLP", "Python"],
      category: ["ml"],
      githubLink: "#",
      demoLink: null
    },
    {
      id: 4,
      title: "Time Series Forecasting",
      description: "Advanced time series models for stock price prediction, utilizing LSTM networks and traditional statistical methods.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      tags: ["TensorFlow", "ARIMA", "Python", "Matplotlib"],
      category: ["ml", "viz"],
      githubLink: "#",
      demoLink: "#"
    },
    {
      id: 5,
      title: "Housing Price Prediction",
      description: "Regression model that predicts housing prices based on multiple features, helping real estate agents and buyers make informed decisions.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      tags: ["R", "Linear Regression", "Random Forest"],
      category: ["ml", "data"],
      githubLink: "#",
      demoLink: null
    },
    {
      id: 6,
      title: "Data Exploratory Tool",
      description: "Web application that helps users explore and understand their datasets through automated visualizations and statistical summaries.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      tags: ["Streamlit", "Pandas", "Seaborn", "Python"],
      category: ["viz", "data"],
      githubLink: "#",
      demoLink: "#"
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));
  
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {filteredProjects.map((project) => (
        <Card 
          key={project.id} 
          className="bg-light-navy border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
        >
          <div className="h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          <CardHeader>
            <CardTitle className="text-lightest-slate">{project.title}</CardTitle>
          </CardHeader>
          
          <CardContent>
            <CardDescription className="text-light-slate mb-4">
              {project.description}
            </CardDescription>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-navy text-green">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-light-slate hover:text-green"
              asChild
            >
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <GitHub className="mr-2" size={16} />
                Code
              </a>
            </Button>
            
            {project.demoLink && (
              <Button 
                variant="ghost" 
                size="sm"
                className="text-light-slate hover:text-green"
                asChild
              >
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={16} />
                  Live Demo
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
