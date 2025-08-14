import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import schoolData from "@/data/schoolData.json";

const KepalaSekolah = () => {
  const kepalaSekolahData = schoolData.website_profile_sman11_surabaya.profil.kepala_sekolah;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Kepala Sekolah
            </h1>
            <p className="text-lg text-muted-foreground">
              Informasi mengenai kepala sekolah SMAN 11 Surabaya
            </p>
          </div>

          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="current">Profil Kepala Sekolah</TabsTrigger>
              <TabsTrigger value="history">Kepala Sekolah Terdahulu</TabsTrigger>
            </TabsList>
            
            <TabsContent value="current" className="mt-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">
                    Profil Kepala Sekolah Saat Ini
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                      <img 
                        src="/placeholder.svg" 
                        alt={kepalaSekolahData.nama_sekarang}
                        className="w-44 h-44 rounded-lg object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {kepalaSekolahData.nama_sekarang}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      NUPTK: {kepalaSekolahData.nuptk}
                    </p>
                    <div className="text-center max-w-2xl">
                      <p className="text-muted-foreground leading-relaxed">
                        Kepala Sekolah SMAN 11 Surabaya yang memimpin dengan visi mewujudkan 
                        insan peserta didik yang iman, cerdas, terampil dan berwawasan lingkungan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="history" className="mt-8">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">
                    Riwayat Kepala Sekolah Terdahulu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {kepalaSekolahData.riwayat_kepala_sekolah.map((kepala, index) => (
                      <Card key={index} className="border-2 hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                              <img 
                                src="/placeholder.svg" 
                                alt={kepala.nama}
                                className="w-16 h-16 rounded-full object-cover"
                              />
                            </div>
                            <h4 className="font-bold text-center text-sm mb-2">
                              {kepala.nama}
                            </h4>
                            {kepala.catatan && (
                              <p className="text-xs text-muted-foreground text-center">
                                {kepala.catatan}
                              </p>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
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

export default KepalaSekolah;