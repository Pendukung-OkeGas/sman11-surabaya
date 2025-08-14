import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";

const Guru = () => {
  const sampleTeachers = [
    "Dra. Hj. Siti Aminah, M.Pd", "Drs. Ahmad Fauzi", "Sri Wahyuni, S.Pd", 
    "Dr. Bambang Sutrisno, M.Si", "Eka Pratiwi, S.Pd, M.Pd", "Drs. Muhammad Yusuf",
    "Siti Nurhaliza, S.Pd", "Agung Priyanto, S.Pd", "Dewi Sartika, M.Pd",
    "Hendro Wibowo, S.Pd", "Rina Kartika, S.Pd", "Budi Santoso, M.Pd",
    "Indah Permata, S.Pd", "Rudi Hartanto, S.Pd", "Maya Sari, M.Pd",
    "Andi Setiawan, S.Pd", "Lila Anggraini, S.Pd", "Doni Prakoso, M.Pd"
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Data Guru
            </h1>
            <p className="text-lg text-muted-foreground">
              Tenaga pendidik SMAN 11 Surabaya
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sampleTeachers.map((teacher, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <img 
                        src="/placeholder.svg" 
                        alt={teacher}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-sm mb-2 text-center">
                      {teacher}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Guru SMAN 11 Surabaya
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Total: {sampleTeachers.length} tenaga pendidik yang berdedikasi 
              untuk pendidikan berkualitas di SMAN 11 Surabaya
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Guru;