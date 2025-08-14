import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import schoolData from "@/data/schoolData.json";

const ArticleDetail = () => {
  const { id } = useParams();
  const { artikel_sekolah } = schoolData.website_profile_sman11_surabaya;
  
  const article = artikel_sekolah.daftar_artikel.find(
    (article) => article.id === parseInt(id || "0")
  );

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
          <Link to="/artikel">
            <Button>Kembali ke Daftar Artikel</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Layout>
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link 
            to="/artikel" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Daftar Artikel
          </Link>

          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-balance">
              {article.judul}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{formatDate(article.tanggal_publikasi)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{article.penulis}</span>
              </div>
            </div>
          </header>

          <div className="mb-8">
            <div className="h-64 md:h-96 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
              <div className="text-8xl opacity-20">📰</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            {article.isi_lengkap.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 leading-relaxed text-foreground">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
              <div className="text-sm text-muted-foreground">
                <p>Dipublikasikan pada {formatDate(article.tanggal_publikasi)}</p>
                <p>Oleh {article.penulis}</p>
              </div>
              
              <Link to="/artikel">
                <Button variant="outline">
                  Baca Artikel Lainnya
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ArticleDetail;