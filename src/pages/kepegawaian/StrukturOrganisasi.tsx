import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const StrukturOrganisasi = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Struktur Organisasi
            </h1>
            <p className="text-lg text-muted-foreground">
              Bagan organisasi SMAN 11 Surabaya
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-center">
                Struktur Organisasi SMAN 11 Surabaya
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <img 
                  src="/assets/struktur-organisasi.png" 
                  alt="Struktur Organisasi SMAN 11 Surabaya"
                  className="w-full max-w-4xl h-auto object-contain rounded-lg shadow-md"
                />
              </div>
              <p className="text-center text-muted-foreground mt-4">
                Bagan struktur organisasi menunjukkan hierarki dan pembagian tugas 
                di lingkungan SMAN 11 Surabaya
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default StrukturOrganisasi;