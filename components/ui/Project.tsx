import Image from 'next/image';
export default function Project() {
  return (
    <section className="py-20 container mx-auto px-4">
      
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Project</h2>
            <p className="text-muted-foreground">
              Featured SEO projects and achievements: Solar panel Business
            </p>
          </div>
     
      <p>
        In 2 months, we successfully improved the SEO ranking for
        SolarPointSystems, a Kenyan-based solar energy company, targeting
        competitive keywords such as “solar panel installation Kenya,” “solar
        solutions for homes,” and “best solar companies in Nairobi.” Our
        strategy focused on localized SEO, high-quality content that aligned
        with user intent, and technical enhancements to optimize performance for
        mobile users. This directly led to a significant boost in inquiries and conversions for solar
        installations, helping to grow SolarPointSystems &apos; presence in the
        rapidly expanding Kenyan solar market. This project underscores our
        ability to deliver impactful SEO results, driving substantial growth for
        businesses in Kenya &abos;s emerging and competitive renewable energy sector.
      </p>
      <div className='mt-2'>
        <Image
          src="/analytics-2.png"
          alt="SolarPointSystems"
          width={800}
          height={500}
        />
      </div>
     <div className='mt-2'>
        <Image
          src="/anaytics.png"
          alt="google search console image"
          width={800}
          height={500}
        />
      </div> 
    </section>
  );
}
