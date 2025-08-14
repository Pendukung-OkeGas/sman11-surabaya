import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArticleList from "./pages/ArticleList";
import ArticleDetail from "./pages/ArticleDetail";
import Alumni from "./pages/Alumni";
import VisiMisi from "./pages/profile/VisiMisi";
import SejarahSekolah from "./pages/profile/SejarahSekolah";
import KepalaSekolah from "./pages/profile/KepalaSekolah";
import TentangSekolah from "./pages/profile/TentangSekolah";
import StrukturOrganisasi from "./pages/kepegawaian/StrukturOrganisasi";
import Guru from "./pages/kepegawaian/Guru";
import Manajemen from "./pages/kepegawaian/Manajemen";
import TenagaKependidikan from "./pages/kepegawaian/TenagaKependidikan";
import StrukturKurikulum from "./pages/akademik/StrukturKurikulum";
import KokurikulerP5 from "./pages/akademik/KokurikulerP5";
import TataTertib from "./pages/kesiswaan/TataTertib";
import ModelSeragam from "./pages/kesiswaan/ModelSeragam";
import Ekstrakurikuler from "./pages/kesiswaan/Ekstrakurikuler";
import Prestasi from "./pages/kesiswaan/Prestasi";
import Denah from "./pages/sarana-prasarana/Denah";
import Fasilitas from "./pages/sarana-prasarana/Fasilitas";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/artikel" element={<ArticleList />} />
          <Route path="/artikel/:id" element={<ArticleDetail />} />
          <Route path="/alumni" element={<Alumni />} />
          
          {/* Profil Routes */}
          <Route path="/profil/kepala-sekolah" element={<KepalaSekolah />} />
          <Route path="/profil/visi-misi" element={<VisiMisi />} />
          <Route path="/profil/sejarah-sekolah" element={<SejarahSekolah />} />
          <Route path="/profil/tentang-sekolah" element={<TentangSekolah />} />
          
          {/* Kepegawaian Routes */}
          <Route path="/kepegawaian/struktur-organisasi" element={<StrukturOrganisasi />} />
          <Route path="/kepegawaian/guru" element={<Guru />} />
          <Route path="/kepegawaian/manajemen" element={<Manajemen />} />
          <Route path="/kepegawaian/tenaga-kependidikan" element={<TenagaKependidikan />} />
          
          {/* Akademik Routes */}
          <Route path="/akademik/struktur-kurikulum" element={<StrukturKurikulum />} />
          <Route path="/akademik/kokurikuler-p5" element={<KokurikulerP5 />} />
          
          {/* Kesiswaan Routes */}
          <Route path="/kesiswaan/tata-tertib" element={<TataTertib />} />
          <Route path="/kesiswaan/model-seragam" element={<ModelSeragam />} />
          <Route path="/kesiswaan/ekstrakurikuler" element={<Ekstrakurikuler />} />
          <Route path="/kesiswaan/prestasi" element={<Prestasi />} />
          
          {/* Sarana Prasarana Routes */}
          <Route path="/sarana-prasarana/denah" element={<Denah />} />
          <Route path="/sarana-prasarana/fasilitas" element={<Fasilitas />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
