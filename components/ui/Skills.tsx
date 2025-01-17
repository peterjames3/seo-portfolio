import { Card } from "@/components/ui/card";
export default function Skills() {
    return(
        <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground">
              Tools and technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Keyword Research",
              "Technical SEO",
              "Content Optimization",
              "Link Building",
              "Google Analytics",
              "SEMrush",
              "Ahrefs",
              "Google Search Console",
            ].map((skill, index) => (
              <Card key={index} className="p-4 text-center">
                <p className="font-medium">{skill}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

    )
}