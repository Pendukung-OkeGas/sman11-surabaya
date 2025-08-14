import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import schoolData from "@/data/schoolData.json";

const AboutSection = () => {
  const { dashboard } = schoolData.website_profile_sman11_surabaya;
  const aboutUs = dashboard.about_us;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 fade-in">
            {aboutUs.judul}
          </h2>
          
          <div className="prose prose-lg mx-auto text-foreground/80 mb-8 slide-up">
            {aboutUs.narasi_singkat.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-balance">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="slide-up">
            <Link to={aboutUs.tombol_selengkapnya.link_tujuan}>
              <Button className="school-button text-lg px-8 py-3">
                {aboutUs.tombol_selengkapnya.teks}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;