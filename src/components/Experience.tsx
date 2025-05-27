
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      id: "Assistantship",
      company: "Centre for Academic Support and Assessment, UH System",
      title: "Graduate Assistant - Team Lead",
      period: "January 2024 - May 2025",
      description: [
        "Supervised 18 Graduate Assistants and led optimization of digital exam systems, improving scheduling operations for 3,000+ students per semester.",
        "Streamlined operations using Excel-driven templates and integrated automated validation logic, reducing scheduling conflicts by 40%. ",
        "Maintained IT infrastructure and cross-functional communication to ensure system continuity and resolve technical roadblocks efficiently. "
      ],
      skills: ["Process Automation", "IT Infrastructure", "Workflow Optimization", "Leadership"]
    },
    {
      id: "Full-Time",
      company: "RECVUE",
      title: "Data Engineer",
      period: "June 2022 - June 2023",
      description: [
        "Participated in full-cycle development of revenue processing systems-built workflows using Scala and Apache Spark, implementing custom transformations to improve data accuracy and reduce processing time by 30%. ",
        "Created a Python automation script that streamlined the revenue processing workflow, cutting the processing time from 40 minutes to 10 minutes, boosting overall revenue cycle efficiency.",
        "Collaborated with cross-functional engineering teams, improving sprint throughput by 40% and reducing post deployment bugs by 65%."
      ],
      skills: ["Python", "Spark", "Jira", "Scala", "Quality Assurance"]
    },
    {
      id: "Internship",
      company: "Robic Rufarm",
      title: "AI/ML Intern",
      period: "June 2021 - July 2021",
      description: [
        "Cleaned biological data for anomaly detection using Python and applied supervised ML models.",
        "Designed and trained ML models (XGBoost, scikit-learn) for shrimp species classification and disease prediction, achieving 85% accuracy on biological data. ",
        "Interpreted results for non-technical teams to aid real-time farm health decisions."
      ],
      skills: ["Python", "Data Preprocessing", "Supervised/Unsupervised Models", "Domain Knowledge"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Engineering Data Science",
      institution: "University of Houston - main campus",
      period: "2023 - 2025",
      description: "",
      courses: ["Deep Learning", "Information Visualization", "Data Analysis", "Probability & Statistics", "Digital Image Processing"]
    },
    {
      degree: "Bachelor of Technology in Data Science & Artificial Intelligence",
      institution: "IFHE University",
      period: "2019 - 2023",
      description: "",
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
