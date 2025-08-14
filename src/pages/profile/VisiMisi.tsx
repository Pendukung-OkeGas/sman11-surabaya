import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Users, Globe, Flag } from "lucide-react";
import schoolData from "@/data/schoolData.json";

const VisiMisi = () => {
  const { profil } = schoolData.website_profile_sman11_surabaya;
  const { visi_misi } = profil;

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Visi, Misi, & Tujuan
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Komitmen SMA Negeri 11 Surabaya dalam mewujudkan pendidikan berkualitas
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Visi */}
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-primary">
                  Visi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-xl md:text-2xl leading-relaxed text-balance font-medium">
                    "{visi_misi.visi}"
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Misi */}
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-primary">
                  Misi
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {visi_misi.misi.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="text-lg leading-relaxed text-balance">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tujuan */}
            <Card className="shadow-card">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Flag className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl md:text-3xl text-primary">
                  Tujuan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {tujuan.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="text-lg leading-relaxed text-balance">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Komitmen */}
            <Card className="shadow-card bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">
                  Komitmen Kami
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-lg leading-relaxed text-balance">
                  SMA Negeri 11 Surabaya berkomitmen untuk terus mengembangkan potensi 
                  setiap siswa melalui pendidikan yang holistik, menggabungkan kecerdasan 
                  intelektual, spiritual, dan emosional. Kami percaya bahwa setiap siswa 
                  memiliki keunikan dan bakat yang dapat dikembangkan untuk menghadapi 
                  tantangan masa depan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VisiMisi;