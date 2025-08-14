import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import schoolData from "@/data/schoolData.json";

const Footer = () => {
  const { footer } = schoolData.website_profile_sman11_surabaya;
  const { profil } = schoolData.website_profile_sman11_surabaya;

  return (
    <footer className="school-header text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white font-bold text-xl">11</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">SMA NEGERI 11</h3>
                <p className="text-blue-200">SURABAYA</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              {profil.visi_misi.visi}
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-200 mt-0.5 flex-shrink-0" />
                <div className="text-blue-100">
                  <p>{profil.tentang_sekolah.lokasi.alamat_lengkap}</p>
                  <p>{profil.tentang_sekolah.lokasi.kota}, {profil.tentang_sekolah.lokasi.provinsi} {profil.tentang_sekolah.lokasi.kode_pos}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">{footer.kontak_kami.nomor_telepon}</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">{footer.kontak_kami.email}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4">
              <a
                href={footer.kontak_kami.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={footer.kontak_kami.facebook_url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
            <div className="text-blue-100 text-sm">
              <p className="mb-2">Website Resmi:</p>
              <a
                href={footer.kontak_kami.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors duration-300 underline"
              >
                {footer.kontak_kami.website_url}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2025 SMA Negeri 11 Surabaya. Seluruh hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;