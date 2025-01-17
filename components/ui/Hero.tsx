import { Button } from "@/components/ui/button";
import Link from 'next/link'
export default function Hero(){
  return(
    <section className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">
          SEO Specialist Portfolio
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Helping businesses improve their online visibility and organic search
          performance through data-driven SEO strategies.
        </p>
        <div className="flex justify-center gap-4">
          

          <Button id="contact" size="lg" variant="outline">
            <Link  href='#contact'>
            Get in Touch
            </Link>
     
          </Button>
        </div>
      </div>
    </div>
  </section>
  )
}