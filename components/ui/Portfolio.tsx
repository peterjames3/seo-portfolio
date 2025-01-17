import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Search,
  FileText,
} from "lucide-react";

const projects = [
  {
    title: "SEO Strategy for Local Business",
    role: "SEO Intern",
    tools: ["Google Analytics", "Google Search Console", "SEMrush", "Ahrefs"],
    description:
      "I worked on optimizing a website for a local business by conducting keyword research, analyzing site performance, and developing a content strategy to improve organic search results. The result was a 20% increase in organic traffic over a 3-month period.",
    icon: BarChart,
    metrics: "20% increase in organic traffic",
  },
  {
    title: "On-Page SEO for Blog Website",
    role: "SEO Specialist (Freelance)",
    tools: ["Yoast SEO", "Screaming Frog", "Google Keyword Planner"],
    description:
      "I implemented on-page SEO techniques such as optimizing meta tags, headings, and improving internal linking for a blog website. This led to better crawlability and a noticeable improvement in search engine rankings for targeted keywords.",
    icon: Search,
    metrics: "Improved search rankings",
  },
  {
    title: "Content Optimization Project",
    role: "SEO Assistant",
    tools: ["Grammarly", "Google Docs", "Surfer SEO"],
    description:
      "I assisted in optimizing content by refining keyword density, improving readability, and ensuring SEO best practices were adhered to. The content optimization process improved user engagement and led to higher average time spent on the site.",
    icon: FileText,
    metrics: "Increased user engagement",
  },
];

export default function Portfolio() {
    return(
        <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
            <p className="text-muted-foreground">
              Featured SEO projects and achievements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-full bg-primary/10">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">
                          {project.role}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="secondary">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <BarChart className="h-4 w-4 text-green-500" />
                      <span className="font-medium text-green-600">
                        {project.metrics}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    )
}