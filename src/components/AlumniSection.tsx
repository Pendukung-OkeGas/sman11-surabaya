import { Card, CardContent } from "@/components/ui/card";
import schoolData from "@/data/schoolData.json";

const AlumniSection = () => {
  const alumniData = schoolData.website_profile_sman11_surabaya.alumni;

  return (
    <section className="py-12 bg-gradient-to-br from-background to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            {alumniData.judul_seksi}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            {alumniData.deskripsi_seksi}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumniData.testimonials.map((testimonial, index) => (
            <Card key={index} className="slide-up shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <img 
                      src="/placeholder.svg" 
                      alt={testimonial.nama}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {testimonial.nama}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Lulusan {testimonial.lulusan_tahun}
                  </p>
                </div>
                <blockquote className="text-sm text-muted-foreground italic leading-relaxed">
                  "{testimonial.kutipan}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlumniSection;