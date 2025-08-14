import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolData from "@/data/schoolData.json";

const TataTertib = () => {
  const tataTertibData = schoolData.website_profile_sman11_surabaya.kesiswaan.tata_tertib;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Tata Tertib Sekolah
            </h1>
            <p className="text-lg text-muted-foreground">
              Peraturan dan tata tertib siswa SMAN 11 Surabaya
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                Dokumen Tata Tertib Siswa
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <p className="text-muted-foreground mb-4">
                    Status: <span className="font-semibold text-foreground">{tataTertibData.status}</span>
                  </p>
                  <p className="text-muted-foreground">
                    {tataTertibData.deskripsi}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground">
                    Poin-Poin Utama Tata Tertib
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-2">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Kehadiran</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Hadir tepat waktu</li>
                          <li>• Tidak membolos</li>
                          <li>• Izin dengan prosedur yang benar</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Seragam</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Mengenakan seragam lengkap</li>
                          <li>• Seragam rapi dan bersih</li>
                          <li>• Sesuai dengan hari yang ditentukan</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Perilaku</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Sopan santun kepada guru dan teman</li>
                          <li>• Tidak melakukan kekerasan</li>
                          <li>• Menjaga nama baik sekolah</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-2">
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Pembelajaran</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Aktif dalam kegiatan belajar</li>
                          <li>• Mengerjakan tugas tepat waktu</li>
                          <li>• Mengikuti ujian dengan jujur</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="text-center">
                  <Button variant="outline" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download Dokumen Lengkap
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2">
                    Dokumen Tata Tertib Siswa SMAN 11 Surabaya versi 2020
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default TataTertib;