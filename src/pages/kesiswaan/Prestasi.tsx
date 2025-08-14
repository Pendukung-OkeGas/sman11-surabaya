import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Calendar, Building2, User } from "lucide-react";
import schoolData from "@/data/schoolData.json";
import silat from "@/assets/prestasi/silat.png";
import karate from "@/assets/prestasi/karate.png";
import math from "@/assets/prestasi/math-olympiad.png";
import sepakbola from "@/assets/prestasi/sepakbola.png";
import englishspeech from "@/assets/prestasi/english-speech.png";

const Prestasi = () => {
  const prestasiData = schoolData.website_profile_sman11_surabaya.kesiswaan.prestasi;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Prestasi Siswa
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {prestasiData.deskripsi_umum}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {prestasiData.daftar_prestasi.map((prestasi, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <img 
                      src="/placeholder.svg" 
                      alt={prestasi.nama_lomba}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span className="font-bold text-primary">{prestasi.peringkat}</span>
                    </div>
                    
                    <h3 className="font-bold text-lg leading-tight">
                      {prestasi.nama_lomba}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span>{prestasi.penyelenggara}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(prestasi.tanggal).toLocaleDateString('id-ID')}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{prestasi.pemenang}</span>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {prestasi.kategori}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Sample additional achievements */}
            {[
              {
                peringkat: "Juara 1",
                nama_lomba: "Pencak Silat Seni Tunggal Bersenjata Putra Tingkat Nasional",
                penyelenggara: "Kementerian Pemuda dan Olahraga",
                tanggal: "2025-05-16",
                kategori: "Olahraga",
                pemenang: "MOHAMAD EXCEL SRI AJI BINTANG PAMUNGKAS X.4",
                gambar: {silat}
              },
              {
                peringkat: "Juara 2",
                nama_lomba: "Kumite Perorangan - 55 KG Junior Putra",
                penyelenggara: "Kejuaraan Provinsi Forki Jawa Timur",
                tanggal: "2025-04-05",
                kategori: "Olahraga",
                pemenang: "ANGGER BONDAN NARAYA X.2",
                gambar: {karate}
              },
              {
                peringkat: "Juara 2",
                nama_lomba: "Thailand International Math Olympiad",
                penyelenggara: "thaiimo",
                tanggal: "2024-4-28",
                kategori: "Matematika",
                pemenang: "MUHAMMAD MAULANA RADITYA",
                gambar: {math}
              },
              {
                peringkat: "Juara 1",
                nama_lomba: "Piala Soeratin U-17",
                penyelenggara: "Kapal Api, PSII Jawa Timur",
                tanggal: "2025-08-13",
                kategori: "Olahraga",
                pemenang: "SAIFCHEL EKA SATRIA XII.3.1",
                gambar: {sepakbola}
              },
              {
                peringkat: "Juara 2",
                nama_lomba: "Kejuaraan English Speech Competition Healthphoria",
                penyelenggara: "Himpunan Mahasiswa Keperawatan Sotomo, Poltekes Kemenkes Surabaya",
                tanggal: "2025-08-14",
                kategori: "Bahasa",
                pemenang: "SHAKILA TAFTARIKA XII.2.2",
                gambar: {englishspeech}
              }
            ].map((prestasi, index) => (
              <Card key={`sample-${index}`} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <img 
                      src={prestasi.gambar}
                      alt={prestasi.nama_lomba}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-primary" />
                      <span className="font-bold text-primary">{prestasi.peringkat}</span>
                    </div>
                    
                    <h3 className="font-bold text-lg leading-tight">
                      {prestasi.nama_lomba}
                    </h3>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4" />
                        <span>{prestasi.penyelenggara}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(prestasi.tanggal).toLocaleDateString('id-ID')}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{prestasi.pemenang}</span>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {prestasi.kategori}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Prestasi Membanggakan
                </h3>
                <p className="text-muted-foreground max-w-3xl mx-auto">
                  SMAN 11 Surabaya bangga dengan pencapaian siswa-siswinya dalam berbagai 
                  kompetisi akademik dan non-akademik di tingkat kota, provinsi, hingga nasional. 
                  Prestasi ini merupakan bukti komitmen sekolah dalam mengembangkan potensi siswa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Prestasi;