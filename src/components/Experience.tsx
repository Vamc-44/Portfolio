
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      id: "internship1",
      company: "DataTech Solutions",
      title: "Data Science Intern",
      period: "May 2023 - Aug 2023",
      description: [
        "Developed predictive models to forecast customer behavior using Python, scikit-learn, and Pandas",
        "Automated data cleaning and preprocessing pipelines, reducing preparation time by 30%",
        "Collaborated with product team to implement ML model recommendations into the platform",
        "Presented weekly insights to stakeholders using interactive Tableau dashboards"
      ],
      skills: ["Python", "Machine Learning", "Pandas", "Tableau"]
    },
    {
      id: "research",
      company: "University Research Lab",
      title: "Research Assistant",
      period: "Sep 2022 - Apr 2023",
      description: [
        "Conducted research on novel machine learning techniques for healthcare applications",
        "Developed and implemented deep learning models for medical image segmentation using PyTorch",
        "Co-authored two academic papers published in peer-reviewed journals",
        "Presented findings at the International Conference on Machine Learning in Healthcare"
      ],
      skills: ["PyTorch", "Deep Learning", "Research", "Medical AI"]
    },
    {
      id: "project",
      company: "Climate Analysis Group",
      title: "Data Analyst (Project)",
      period: "Jan 2022 - May 2022",
      description: [
        "Analyzed large climate datasets to identify patterns and trends using R and statistical methods",
        "Created interactive visualizations to communicate findings to non-technical stakeholders",
        "Developed a dashboard for real-time monitoring of climate variables",
        "Collaborated with environmental scientists to interpret results and form actionable insights"
      ],
      skills: ["R", "Data Visualization", "Statistical Analysis", "Time Series"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "University of Data Analytics",
      period: "2021 - 2023",
      description: "Specialized in machine learning and statistical modeling. Thesis on 'Advanced Predictive Models for Healthcare Outcomes'.",
      courses: ["Advanced Machine Learning", "Statistical Inference", "Big Data Systems", "Neural Networks", "Natural Language Processing"]
    },
    {
      degree: "Bachelor of Science in Mathematics",
      institution: "Tech State University",
      period: "2017 - 2021",
      description: "Minor in Computer Science. Dean's List for all semesters.",
      courses: ["Linear Algebra", "Probability Theory", "Programming Fundamentals", "Data Structures", "Database Systems"]
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="section-heading">Experience & Education</h2>
      
      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="bg-light-navy mb-6">
          <TabsTrigger value="experience">Professional Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        
        <TabsContent value="experience" className="space-y-4">
          {experiences.map((exp) => (
            <Card key={exp.id} className="bg-light-navy border-0 shadow overflow-hidden">
              <div className="border-l-4 border-green px-6 py-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-lightest-slate">{exp.title}</h3>
                    <p className="text-green font-mono">{exp.company}</p>
                  </div>
                  <span className="text-light-slate font-mono text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex">
                      <span className="text-green mr-2">▹</span>
                      <span className="text-slate">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-navy text-green border-green">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="education" className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="bg-light-navy border-0 shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="border-l-4 border-green px-6 py-5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-lightest-slate">{edu.degree}</h3>
                      <p className="text-green font-mono">{edu.institution}</p>
                    </div>
                    <span className="text-light-slate font-mono text-sm mt-2 md:mt-0">{edu.period}</span>
                  </div>
                  
                  <p className="text-slate mb-4">{edu.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-lightest-slate mb-2">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <Badge key={course} variant="secondary" className="bg-navy text-green">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Experience;
