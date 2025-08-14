import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Manajemen = () => {
  // Sample management data - replace with actual data when available
  const sampleManagement = [
    { nama: "Nana Petty Puspitasari, M.Pd.", jabatan: "Kepala Sekolah" },
    { nama: "Drs. Supriyanto, M.Pd.", jabatan: "Wakil Kepala Sekolah Kurikulum" },
    { nama: "Dra. Endang Sulistyowati", jabatan: "Wakil Kepala Sekolah Kesiswaan" },
    { nama: "Drs. Ahmad Rozak", jabatan: "Wakil Kepala Sekolah Humas" },
    { nama: "Sri Mulyani, S.Pd", jabatan: "Wakil Kepala Sekolah Sarana Prasarana" },
    { nama: "Bambang Irawan, S.Pd", jabatan: "Kepala Tata Usaha" },
    { nama: "Dwi Hartono, S.Pd", jabatan: "Koordinator BK" },
    { nama: "Erni Setyawati, S.Pd", jabatan: "Koordinator Perpustakaan" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Manajemen Sekolah
            </h1>
            <p className="text-lg text-muted-foreground">
              Tim manajemen SMAN 11 Surabaya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sampleManagement.map((person, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <img 
                        src="/placeholder.svg" 
                        alt={person.nama}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-center">
                      {person.nama}
                    </h3>
                    <p className="text-sm text-primary font-medium text-center">
                      {person.jabatan}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Tim manajemen yang berpengalaman dalam memimpin SMAN 11 Surabaya 
              menuju visi sekolah yang unggul
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Manajemen;