import { Button } from "@/components/ui/button";

import { Briefcase, ExternalLink } from "lucide-react";
export default function Footer() {
  return (
    <footer className="py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2025 SEO Portfolio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              <a
                href="https://docs.google.com/document/d/1AIXeYBPt4mVCNP-NV9FW9QiDUf-lluXFpAT0SLaA1A8/edit?tab=t.0"
                download="JKamau_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <Briefcase className="h-4 w-4" />
              Projects
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
