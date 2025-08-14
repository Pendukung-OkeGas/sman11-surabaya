import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import schoolData from "@/data/schoolData.json";

const Alumni = () => {
  const alumniData = schoolData.website_profile_sman11_surabaya.alumni;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {alumniData.judul_seksi}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {alumniData.deskripsi_seksi}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {alumniData.testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <img 
                        src="/placeholder.svg" 
                        alt={testimonial.nama}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-2">
                      {testimonial.nama}
                    </h3>
                    <p className="text-primary font-medium">
                      Lulusan {testimonial.lulusan_tahun}
                    </p>
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed text-center">
                    "{testimonial.kutipan}"
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Alumni;