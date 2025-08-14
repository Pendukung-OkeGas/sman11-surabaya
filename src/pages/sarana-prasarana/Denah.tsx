import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Denah = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Denah Sekolah
            </h1>
            <p className="text-lg text-muted-foreground">
              Tata letak dan denah bangunan SMAN 11 Surabaya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Denah Lantai 1</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/placeholder.svg" 
                  alt="Denah Lantai 1 SMAN 11 Surabaya"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Ruang kelas X, ruang guru, perpustakaan, dan fasilitas umum
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Denah Lantai 2</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/placeholder.svg" 
                  alt="Denah Lantai 2 SMAN 11 Surabaya"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Ruang kelas XI, ruang kepala sekolah, dan ruang administrasi
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Denah Lantai 3</CardTitle>
              </CardHeader>
              <CardContent>
                <img 
                  src="/placeholder.svg" 
                  alt="Denah Lantai 3 SMAN 11 Surabaya"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Ruang kelas XII, laboratorium, dan ruang multimedia
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Keterangan Denah</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Lantai 1</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ruang Kelas X (10 ruang)</li>
                      <li>• Ruang Guru</li>
                      <li>• Perpustakaan</li>
                      <li>• Masjid Baitul Ilmi</li>
                      <li>• Kantin</li>
                      <li>• Area Parkir</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Lantai 2</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ruang Kelas XI (10 ruang)</li>
                      <li>• Ruang Kepala Sekolah</li>
                      <li>• Ruang TU</li>
                      <li>• Ruang BK</li>
                      <li>• Aula</li>
                      <li>• UKS</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Lantai 3</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Ruang Kelas XII (10 ruang)</li>
                      <li>• Lab. Biologi</li>
                      <li>• Lab. Fisika</li>
                      <li>• Lab. Kimia</li>
                      <li>• Lab. Komputer</li>
                      <li>• Lab. Bahasa</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Denah;