import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">JKamau</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <a href="#portfolio">Portfolio</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="#contact">Contact</a>
            </Button>
            <Button>
              {" "}
              <a 
              href="https://docs.google.com/document/d/1AIXeYBPt4mVCNP-NV9FW9QiDUf-lluXFpAT0SLaA1A8/edit?tab=t.0#heading=h.y7d3xdxnr44m"
              download="JKamau_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer">Download Resume</a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
