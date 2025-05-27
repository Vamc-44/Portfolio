import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

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
      title: "Used Car Market Analysis – Tableau Dashboard for Pricing & Demand Insights",
      description: "Analyzed 2,000+ U.S. auctioned vehicle records to identify pricing trends, mileage patterns, and brand-level demand across regions. Cleaned and validated data by removing null VINs, duplicates, and zero-mileage entries, ensuring high data integrity for analysis. Built an interactive Tableau dashboard with regional filters, calculated KPIs, sheet-in-sheet visualizations, and time-series forecasting to support data-driven insights.",
      image: "/images/Tableau Dashboard.jpeg",
      tags: ["Tableau", "Python", "Pandas", "Numpy", "Data Analysis", "Reporting"],
      category: ["viz", "data"],
      githubLink: "https://github.com/Vamc-44/USA_Cars_Tableau",
      demoLink: "https://public.tableau.com/app/profile/vamshidhar.reddy.ankenapalle/viz/UsedCarMarketAnalysis_17472454403300/GeographicAnalysisbyBrandandModel"
    },
    {
      id: 2,
      title: "BERTNet – Multimodal Sales Forecasting with Deep Learning",
      description: "Developed a multimodal ML pipeline combining text (BERT) and image (EfficientNet) data for sales forecasting, improving prediction accuracy by 30% through cross-source reconciliation modeling. Assessed multiple models, with the BERT + EfficientNet approach achieving a classification accuracy of 75%. ",
      image: "/images/BertNet.png",
      tags: ["BERT", "EfficientNet", "Python", "Deep Learning","Data Preprocessing"],
      category: ["ml", "data"],
      githubLink: "https://github.com/Vamc-44/BertNet",
      demoLink: null
    },
    {
      id: 3,
      title: "LinkedIn-Job-Salary-Prediction-US-2023",
      description: "Built a salary prediction model using LinkedIn job data by analyzing features like company size, industry, and skills. Applied data cleaning, EDA, feature selection, and model tuning (GridSearchCV) across multiple algorithms including SVM, Random Forest, XGBoost, ELM, and deep learning. Optimized performance using MSE and R², helping align salary expectations with market trends.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
      tags: ["ML models (KNN, SVM, RF, XGB, ELM)", "Data Handling", "Model Tuning & Evaluation"],
      category: ["ml","data","viz"],
      githubLink: "https://github.com/Vamc-44/LinkedIn-Job-Salary-Prediction-US-2023",
      demoLink: null
    },
    {
      id: 4,
      title: "Selfie2Anime – Image Translation using GANs",
      description: "Architected a Cycle GAN-based image translation system to convert real human portraits into anime-style illustrations, preserving facial structure and emotional fidelity.  Trained on a dataset of 7,000+ images for 100,000+ iterations, applying gradient penalty techniques to stabilize training, prevent mode collapse, and ensure consistent style generation.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      tags: ["Python", "Pytorch", "Cartoon GAN", "Image Processing",],
      category: ["ml"],
      githubLink: "https://github.com/Vamc-44/GAN",
      demoLink: null
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
                <Github className="mr-2" size={16} />
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
