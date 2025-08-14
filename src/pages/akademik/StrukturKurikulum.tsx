import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import schoolData from "@/data/schoolData.json";

const StrukturKurikulum = () => {
  const akademikData = schoolData.website_profile_sman11_surabaya.akademik.struktur_kurikulum;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Struktur Kurikulum
            </h1>
            <p className="text-lg text-muted-foreground">
              Mata pelajaran dan struktur kurikulum SMAN 11 Surabaya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Intrakurikuler</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Kegiatan pembelajaran dalam kelas sesuai kurikulum nasional
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Ekstrakurikuler</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Kegiatan pengembangan minat dan bakat di luar jam pelajaran
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">Kokurikuler</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Kegiatan yang mendukung dan memperkuat kurikulum intrakurikuler
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Mata Pelajaran Wajib - Kelompok A (Umum)</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">No</TableHead>
                    <TableHead>Mata Pelajaran</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {akademikData.mata_pelajaran_wajib.kelompok_a_umum.map((subject, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{subject}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className="shadow-lg mb-8">
            <CardHeader>
              <CardTitle>Mata Pelajaran Wajib - Kelompok B (Umum)</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">No</TableHead>
                    <TableHead>Mata Pelajaran</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {akademikData.mata_pelajaran_wajib.kelompok_b_umum.map((subject, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{subject}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Mata Pelajaran Peminatan IPA</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">No</TableHead>
                      <TableHead>Mata Pelajaran</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {akademikData.mata_pelajaran_peminatan.jurusan_ipa.map((subject, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{subject}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Mata Pelajaran Peminatan IPS</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-12">No</TableHead>
                      <TableHead>Mata Pelajaran</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {akademikData.mata_pelajaran_peminatan.jurusan_ips.map((subject, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>{subject}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              {akademikData.deskripsi_umum}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StrukturKurikulum;