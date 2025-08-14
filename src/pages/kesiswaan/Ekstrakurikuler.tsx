import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import schoolData from "@/data/schoolData.json";

const Ekstrakurikuler = () => {
  const ekskulData = schoolData.website_profile_sman11_surabaya.kesiswaan.ekstrakurikuler;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Ekstrakurikuler
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {ekskulData.deskripsi_umum}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ekskulData.daftar_ekstrakurikuler.map((ekskul, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <img 
                        src="/placeholder.svg" 
                        alt={ekskul.nama}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2">
                      {ekskul.nama}
                    </h3>
                    {ekskul.nama_khusus && (
                      <p className="text-sm text-primary font-medium mb-2">
                        "{ekskul.nama_khusus}"
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground">
                      Ekstrakurikuler SMAN 11 Surabaya
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Bergabunglah dengan Ekstrakurikuler
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  Setiap siswa SMAN 11 Surabaya diwajibkan mengikuti minimal satu kegiatan 
                  ekstrakurikuler untuk mengembangkan minat, bakat, dan karakter. 
                  Pendaftaran ekstrakurikuler dilakukan di awal tahun ajaran.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Ekstrakurikuler;