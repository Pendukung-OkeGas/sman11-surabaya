import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Building2, FileText, Music } from "lucide-react";
import schoolData from "@/data/schoolData.json";

const TentangSekolah = () => {
  const tentangSekolahData = schoolData.website_profile_sman11_surabaya.profil.tentang_sekolah;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Tentang Sekolah
            </h1>
            <p className="text-lg text-muted-foreground">
              Informasi lengkap mengenai SMAN 11 Surabaya
            </p>
          </div>

          <Tabs defaultValue="location" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="location">Lokasi</TabsTrigger>
              <TabsTrigger value="identity">Identitas Sekolah</TabsTrigger>
              <TabsTrigger value="mars">Mars</TabsTrigger>
            </TabsList>
            
            <TabsContent value="location" className="mt-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-primary" />
                    Lokasi Sekolah
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Alamat Lengkap</h3>
                      <p className="text-muted-foreground">
                        {tentangSekolahData.lokasi.alamat_lengkap}
                      </p>
                      <p className="text-muted-foreground">
                        {tentangSekolahData.lokasi.kota}, {tentangSekolahData.lokasi.provinsi} {tentangSekolahData.lokasi.kode_pos}
                      </p>
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <p className="text-sm text-muted-foreground mb-2">Peta Lokasi</p>
                      <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center">
                        <img 
                          src="/placeholder.svg" 
                          alt="Peta Lokasi SMAN 11 Surabaya"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="identity" className="mt-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-primary" />
                    Identitas Sekolah
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">NPSN</h4>
                        <p className="text-muted-foreground">{tentangSekolahData.identitas.npsn}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Akreditasi</h4>
                        <p className="text-muted-foreground">{tentangSekolahData.identitas.akreditasi}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Status Sekolah</h4>
                        <p className="text-muted-foreground">{tentangSekolahData.identitas.status_sekolah}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Bentuk Pendidikan</h4>
                        <p className="text-muted-foreground">{tentangSekolahData.identitas.bentuk_pendidikan}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Status Kepemilikan</h4>
                        <p className="text-muted-foreground">{tentangSekolahData.identitas.status_kepemilikan}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">SK Pendirian</h4>
                        <p className="text-muted-foreground">{tentangSekolahData.legalitas.sk_pendirian}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Tanggal SK Pendirian</h4>
                        <p className="text-muted-foreground">{tentangSekolahData.legalitas.tanggal_sk_pendirian}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">SK Izin Operasional</h4>
                        <p className="text-muted-foreground">{tentangSekolahData.legalitas.sk_izin_operasional}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="mars" className="mt-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Music className="h-6 w-6 text-primary" />
                    {tentangSekolahData.mars.judul}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="aspect-video rounded-lg overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${tentangSekolahData.mars.youtube_url.split('=')[1]}`}
                        title={tentangSekolahData.mars.judul}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                    <div className="bg-muted/30 rounded-lg p-6">
                      <h4 className="font-semibold mb-4">Lirik Mars SMAN 11 Surabaya</h4>
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                        {tentangSekolahData.mars.lirik}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default TentangSekolah;