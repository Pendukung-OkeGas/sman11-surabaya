import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ModelSeragam = () => {
  const uniformTypes = [
    { id: "putih-abu", name: "Seragam Putih Abu-abu", description: "Seragam harian Senin-Selasa" },
    { id: "batik", name: "Seragam Batik", description: "Seragam Rabu-Kamis" },
    { id: "pramuka", name: "Seragam Pramuka", description: "Seragam Jumat dan kegiatan pramuka" }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Model Seragam
            </h1>
            <p className="text-lg text-muted-foreground">
              Model seragam siswa SMAN 11 Surabaya
            </p>
          </div>

          <Tabs defaultValue="putih-abu" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {uniformTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id}>
                  {type.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {uniformTypes.map((type) => (
              <TabsContent key={type.id} value={type.id} className="mt-8">
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-center">
                      {type.name}
                    </CardTitle>
                    <p className="text-center text-muted-foreground">
                      {type.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-center">
                          Model Putra
                        </h3>
                        <div className="space-y-4">
                          <img 
                            src="/placeholder.svg" 
                            alt={`${type.name} Putra`}
                            className="w-full h-80 object-cover rounded-lg shadow-md"
                          />
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Ketentuan:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Kemeja lengan pendek</li>
                              <li>• Celana panjang</li>
                              <li>• Dasi sesuai ketentuan</li>
                              <li>• Sepatu hitam</li>
                              <li>• Kaos kaki putih</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-4 text-center">
                          Model Putri
                        </h3>
                        <div className="space-y-4">
                          <img 
                            src="/placeholder.svg" 
                            alt={`${type.name} Putri`}
                            className="w-full h-80 object-cover rounded-lg shadow-md"
                          />
                          <div className="bg-muted/30 rounded-lg p-4">
                            <h4 className="font-medium mb-2">Ketentuan:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Blouse lengan pendek</li>
                              <li>• Rok panjang</li>
                              <li>• Jilbab (bagi yang menggunakan)</li>
                              <li>• Sepatu hitam</li>
                              <li>• Kaos kaki putih</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <div className="mt-8 text-center">
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Catatan Penting</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                  <div>
                    <strong>Senin - Selasa:</strong><br />
                    Seragam Putih Abu-abu
                  </div>
                  <div>
                    <strong>Rabu - Kamis:</strong><br />
                    Seragam Batik
                  </div>
                  <div>
                    <strong>Jumat:</strong><br />
                    Seragam Pramuka
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

export default ModelSeragam;