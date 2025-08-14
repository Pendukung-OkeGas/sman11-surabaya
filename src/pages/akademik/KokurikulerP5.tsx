import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import schoolData from "@/data/schoolData.json";

const KokurikulerP5 = () => {
  const p5Data = schoolData.website_profile_sman11_surabaya.akademik.kokurikuler_p5;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              {p5Data.judul}
            </h1>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              {p5Data.deskripsi_umum}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <img 
                src="/placeholder.svg" 
                alt="Kegiatan P5 SMAN 11 Surabaya"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground text-center">
                Siswa SMAN 11 melakukan proyek P5 berbasis komunitas
              </p>
            </div>
            <div className="space-y-4">
              <img 
                src="/placeholder.svg" 
                alt="Presentasi Proyek P5"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-muted-foreground text-center">
                Presentasi hasil proyek P5 oleh siswa
              </p>
            </div>
          </div>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>{p5Data.enam_dimensi_profil.judul}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {p5Data.enam_dimensi_profil.daftar_dimensi.map((dimensi, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-muted/30 rounded-lg">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">{index + 1}</span>
                    </div>
                    <span className="text-foreground font-medium">{dimensi}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>{p5Data.tujuh_tema_proyek.judul}</CardTitle>
              <p className="text-muted-foreground">{p5Data.tujuh_tema_proyek.deskripsi_tema}</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {p5Data.tujuh_tema_proyek.daftar_tema.map((tema, index) => (
                  <Card key={index} className="border-2 hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-lg mb-3 text-primary">
                        {tema.tema}
                      </h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {tema.penjelasan}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4">Kesimpulan</h3>
                <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  {p5Data.kesimpulan}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default KokurikulerP5;