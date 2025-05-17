
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart as Chart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
} from "recharts";

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const technicalSkills = [
    { name: "Python", value: 90 },
    { name: "R", value: 75 },
    { name: "SQL", value: 85 },
    { name: "Machine Learning", value: 82 },
    { name: "Deep Learning", value: 70 },
    { name: "Statistical Analysis", value: 88 },
  ];

  const dataToolSkills = [
    { name: "Tableau", value: 80 },
    { name: "PowerBI", value: 75 },
    { name: "D3.js", value: 65 },
    { name: "Pandas", value: 90 },
    { name: "NumPy", value: 88 },
    { name: "Spark", value: 60 },
  ];

  const skillAreas = [
    { subject: "Machine Learning", A: 90, fullMark: 100 },
    { subject: "Data Analysis", A: 85, fullMark: 100 },
    { subject: "Visualization", A: 80, fullMark: 100 },
    { subject: "Statistics", A: 88, fullMark: 100 },
    { subject: "Big Data", A: 70, fullMark: 100 },
    { subject: "Cloud Computing", A: 65, fullMark: 100 },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-navy p-3 border border-lightest-navy rounded shadow-lg">
          <p className="text-lightest-slate font-medium">{`${payload[0].name} : ${payload[0].value}%`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="section-heading">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="bg-light-navy border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lightest-slate">Technical Skills</CardTitle>
            <CardDescription>Programming languages & techniques</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <Chart
                data={technicalSkills}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
              >
                <XAxis 
                  type="number"
                  domain={[0, 100]}
                  tick={{ fill: "#8892B0" }}
                />
                <YAxis
                  dataKey="name"
                  type="category"
                  tick={{ fill: "#8892B0" }}
                  width={100}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value"
                  fill="#64FFDA"
                  radius={[0, 4, 4, 0]}
                  animationDuration={2000}
                  animationBegin={300}
                  animationEasing="ease-out"
                  label={{ 
                    position: "right", 
                    fill: "#CCD6F6",
                    formatter: (value: number) => `${value}%`, 
                    fontSize: 12 
                  }}
                />
              </Chart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="bg-light-navy border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lightest-slate">Data Tools</CardTitle>
            <CardDescription>Visualization & data processing</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <Chart
                data={dataToolSkills}
                layout="vertical"
                margin={{ top: 20, right: 30, left: 40, bottom: 5 }}
              >
                <XAxis 
                  type="number" 
                  domain={[0, 100]}
                  tick={{ fill: "#8892B0" }}
                />
                <YAxis 
                  dataKey="name" 
                  type="category"
                  tick={{ fill: "#8892B0" }}
                  width={100}
                />
                <Tooltip content={<CustomTooltip />} />
                <Bar 
                  dataKey="value"
                  fill="#64FFDA"
                  radius={[0, 4, 4, 0]}
                  animationDuration={2000}
                  animationBegin={300}
                  animationEasing="ease-out"
                  label={{ 
                    position: "right", 
                    fill: "#CCD6F6",
                    formatter: (value: number) => `${value}%`, 
                    fontSize: 12 
                  }}
                />
              </Chart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        
        <Card className="bg-light-navy border-0 shadow-lg lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lightest-slate">Skills Overview</CardTitle>
            <CardDescription>Main areas of expertise</CardDescription>
          </CardHeader>
          <CardContent className="h-[400px] flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart
                cx="50%"
                cy="50%"
                outerRadius="70%"
                data={skillAreas}
              >
                <PolarGrid stroke="#233554" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "#A8B2D1" }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#8892B0" }} />
                <Radar
                  name="Skills"
                  dataKey="A"
                  stroke="#64FFDA"
                  fill="#64FFDA"
                  fillOpacity={0.3}
                  animationDuration={2000}
                />
                <Legend />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#112240",
                    borderColor: "#233554",
                    color: "#CCD6F6",
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
