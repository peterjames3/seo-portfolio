import { Button } from "@/components/ui/button";

import { Mail } from "lucide-react";
export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-8">
            Interested in working together? Let&apos;s discuss how I can help
            improve your SEO performance.
          </p>
          <div>

            
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <Button className="gap-2">
              <Mail className="h-4 w-4" />
              <a href='mailto:kamauchief97@gmail.com?subject=Mail from My Website'>
              Email Me
              </a>
            
            </Button>
          
          </div>
        </div>
      </div>
    </section>
  );
}
