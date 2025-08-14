import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import schoolData from "@/data/schoolData.json";

const Fasilitas = () => {
  const fasilitasData = schoolData.website_profile_sman11_surabaya.sarana_prasarana.fasilitas;

  // Detailed descriptions for facilities
  const facilityDescriptions = {
    "Kelas": "Ruang kelas yang nyaman dan dilengkapi dengan AC serta proyektor untuk mendukung pembelajaran modern",
    "Perpustakaan": "Perpustakaan dengan koleksi buku lengkap dan area baca yang nyaman untuk menunjang kegiatan literasi",
    "Laboratorium Biologi": "Laboratorium biologi lengkap dengan mikroskop dan peralatan praktikum untuk pembelajaran sains",
    "Laboratorium Fisika": "Laboratorium fisika dengan peralatan eksperimen modern untuk pembelajaran konsep fisika",
    "Laboratorium Kimia": "Laboratorium kimia dengan fume hood dan peralatan keselamatan untuk praktikum yang aman",
    "Laboratorium Komputer": "Laboratorium komputer dengan PC terbaru dan akses internet untuk pembelajaran TIK",
    "Laboratorium Bahasa": "Laboratorium bahasa dengan sistem audio modern untuk pembelajaran bahasa asing",
    "Lapangan Basket": "Lapangan basket outdoor dengan standar internasional untuk olahraga dan ekstrakurikuler",
    "Lapangan Futsal": "Lapangan futsal dengan rumput sintetis berkualitas tinggi",
    "Lapangan Voli": "Lapangan voli indoor dan outdoor untuk kegiatan olahraga",
    "Aula": "Aula serbaguna untuk berbagai acara sekolah dan pertemuan",
    "Kantin (2 Lokasi)": "Kantin sehat dengan menu bergizi dan lingkungan yang bersih",
    "Koperasi Sekolah": "Koperasi siswa untuk pembelajaran kewirausahaan dan pemenuhan kebutuhan sekolah",
    "Ruang Bimbingan Konseling (BK)": "Ruang BK yang nyaman untuk konseling dan bimbingan siswa",
    "Masjid": "Masjid Baitul Ilmi untuk kegiatan ibadah dan pembelajaran agama",
    "Unit Kesehatan Sekolah (UKS)": "UKS dengan fasilitas medis dasar dan tenaga kesehatan profesional"
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Fasilitas Sekolah
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {fasilitasData.deskripsi_umum}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fasilitasData.daftar_fasilitas.map((fasilitas, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-full h-48 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <img 
                        src="/placeholder.svg" 
                        alt={fasilitas}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-3">
                      {fasilitas}
                    </h3>
                    <p className="text-sm text-muted-foreground text-center leading-relaxed">
                      {facilityDescriptions[fasilitas] || `Fasilitas ${fasilitas} yang menunjang kegiatan pembelajaran di SMAN 11 Surabaya`}
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
                  Fasilitas Terlengkap
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  SMAN 11 Surabaya menyediakan fasilitas lengkap dan modern untuk mendukung 
                  proses pembelajaran yang berkualitas. Dengan total {fasilitasData.daftar_fasilitas.length} 
                  fasilitas utama, kami berkomitmen memberikan lingkungan belajar yang optimal 
                  bagi seluruh siswa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Fasilitas;