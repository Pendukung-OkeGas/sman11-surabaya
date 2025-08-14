import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, MapPin, Users, Award } from "lucide-react";
import schoolData from "@/data/schoolData.json";

const SejarahSekolah = () => {
  const { profil } = schoolData.website_profile_sman11_surabaya;
  const { sejarah_sekolah, tentang_sekolah } = profil;

  const milestones = [
    {
      year: "1979",
      title: "Pendirian Awal",
      description: "Berdiri sebagai filial SMAN 1 Surabaya dengan 4 kelas dan 12 guru",
      icon: Clock,
    },
    {
      year: "1980",
      title: "Gedung Baru",
      description: "Pindah ke gedung baru di Perumnas Tandes dengan fasilitas lengkap",
      icon: MapPin,
    },
    {
      year: "Sekarang",
      title: "Berkembang Pesat",
      description: "59 guru, 17 tenaga kependidikan, 1.074 siswa, 30 rombongan belajar",
      icon: Users,
    },
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {sejarah_sekolah.judul}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Perjalanan panjang SMA Negeri 11 Surabaya dari masa ke masa
            </p>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {milestones.map((milestone, index) => (
                  <Card key={index} className="shadow-card text-center">
                    <CardContent className="p-8">
                      <div className="mx-auto h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <milestone.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="text-2xl font-bold text-primary mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground text-balance">
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed History */}
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <div className="prose prose-lg max-w-none">
                  {sejarah_sekolah.narasi_lengkap.split('\n\n').map((paragraph, index) => {
                    // Check if it's a heading (contains **)
                    if (paragraph.includes('**')) {
                      const cleanedParagraph = paragraph.replace(/\*\*/g, '');
                      return (
                        <h3 key={index} className="text-xl font-bold text-primary mt-8 mb-4 first:mt-0">
                          {cleanedParagraph}
                        </h3>
                      );
                    }
                    return (
                      <p key={index} className="mb-6 leading-relaxed text-foreground">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* School Stats */}
          <div className="mt-16">
            <Card className="shadow-card bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Data Sekolah Saat Ini
                  </h3>
                  <p className="text-muted-foreground">
                    Statistik terkini SMA Negeri 11 Surabaya
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">59</div>
                    <div className="text-sm text-muted-foreground">Tenaga Pendidik</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">17</div>
                    <div className="text-sm text-muted-foreground">Tenaga Kependidikan</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">1,074</div>
                    <div className="text-sm text-muted-foreground">Siswa</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">30</div>
                    <div className="text-sm text-muted-foreground">Rombongan Belajar</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* School Identity */}
          <div className="mt-16">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  Identitas Sekolah
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Informasi Umum</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">NPSN:</span>
                        <span>{tentang_sekolah.identitas.npsn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Akreditasi:</span>
                        <span className="font-semibold text-primary">{tentang_sekolah.identitas.akreditasi}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <span>{tentang_sekolah.identitas.status_sekolah}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Legalitas</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">SK Pendirian:</span>
                        <span>{tentang_sekolah.legalitas.sk_pendirian}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tanggal SK:</span>
                        <span>{new Date(tentang_sekolah.legalitas.tanggal_sk_pendirian).toLocaleDateString('id-ID')}</span>
                      </div>
                    </div>
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

export default SejarahSekolah;