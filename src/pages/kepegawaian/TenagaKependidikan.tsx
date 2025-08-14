import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const TenagaKependidikan = () => {
  // Sample educational staff data - replace with actual data when available
  const sampleStaff = [
    { nama: "Siti Aisyah", jabatan: "Staff Administrasi" },
    { nama: "Eko Priyanto", jabatan: "Staff Keuangan" },
    { nama: "Dewi Handayani", jabatan: "Staff Perpustakaan" },
    { nama: "Ahmad Firdaus", jabatan: "Staff IT" },
    { nama: "Rina Kartika", jabatan: "Staff Akademik" },
    { nama: "Budi Setiawan", jabatan: "Staff Kesiswaan" },
    { nama: "Maya Puspita", jabatan: "Staff Humas" },
    { nama: "Doni Prasetyo", jabatan: "Staff Sarana Prasarana" },
    { nama: "Lina Anggraini", jabatan: "Petugas Kebersihan" },
    { nama: "Agus Santoso", jabatan: "Petugas Keamanan" },
    { nama: "Indira Sari", jabatan: "Petugas Kantin" },
    { nama: "Rudi Hartono", jabatan: "Teknisi Laboratorium" },
    { nama: "Sari Wulandari", jabatan: "Petugas UKS" },
    { nama: "Hendra Wijaya", jabatan: "Driver Sekolah" },
    { nama: "Novi Rahayu", jabatan: "Petugas Taman" },
    { nama: "Andi Kurniawan", jabatan: "Maintenance" },
    { nama: "Fitri Handayani", jabatan: "Operator Komputer" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Tenaga Kependidikan
            </h1>
            <p className="text-lg text-muted-foreground">
              Staff pendukung SMAN 11 Surabaya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sampleStaff.map((staff, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <img 
                        src="/placeholder.svg" 
                        alt={staff.nama}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-2 text-center">
                      {staff.nama}
                    </h3>
                    <p className="text-xs text-primary font-medium text-center">
                      {staff.jabatan}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Total: {sampleStaff.length} tenaga kependidikan yang mendukung 
              operasional sekolah secara profesional
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default TenagaKependidikan;