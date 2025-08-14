import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    {
      title: "Profil",
      items: [
        { name: "Kepala Sekolah", href: "/profil/kepala-sekolah" },
        { name: "Visi & Misi", href: "/profil/visi-misi" },
        { name: "Sejarah Sekolah", href: "/profil/sejarah-sekolah" },
        { name: "Tentang Sekolah", href: "/profil/tentang-sekolah" },
      ],
    },
    {
      title: "Kepegawaian",
      items: [
        { name: "Struktur Organisasi", href: "/kepegawaian/struktur-organisasi" },
        { name: "Data Guru", href: "/kepegawaian/guru" },
        { name: "Manajemen", href: "/kepegawaian/manajemen" },
        { name: "Tenaga Kependidikan", href: "/kepegawaian/tenaga-kependidikan" },
      ],
    },
    {
      title: "Akademik",
      items: [
        { name: "Struktur Kurikulum", href: "/akademik/struktur-kurikulum" },
        { name: "Kokurikuler P5", href: "/akademik/kokurikuler-p5" },
      ],
    },
    {
      title: "Kesiswaan",
      items: [
        { name: "Tata Tertib", href: "/kesiswaan/tata-tertib" },
        { name: "Model Seragam", href: "/kesiswaan/model-seragam" },
        { name: "Ekstrakurikuler", href: "/kesiswaan/ekstrakurikuler" },
        { name: "Prestasi Siswa", href: "/kesiswaan/prestasi" },
      ],
    },
    {
      title: "Sarana Prasarana",
      items: [
        { name: "Denah Sekolah", href: "/sarana-prasarana/denah" },
        { name: "Fasilitas", href: "/sarana-prasarana/fasilitas" },
      ],
    },
    { title: "Alumni", href: "/alumni" },
  ];

  return (
    <header className="school-header sticky top-0 z-50 w-full shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and School Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo}
              alt="Logo SMAN 11"
              className="h-10 w-10"
            />
            <div className="text-white">
              <h1 className="text-lg font-bold leading-tight">SMA NEGERI 11</h1>
              <p className="text-sm opacity-90">SURABAYA</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.href ? (
                  <Link
                    to={item.href}
                    className="text-white hover:text-blue-200 transition-colors duration-300 font-medium"
                  >
                    {item.title}
                  </Link>
                ) : (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="text-white hover:text-blue-200 hover:bg-white/10 font-medium"
                      >
                        {item.title}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      {item.items?.map((subItem) => (
                        <DropdownMenuItem key={subItem.name} asChild>
                          <Link to={subItem.href} className="w-full">
                            {subItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="school-header border-none">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <img 
                      src={logo}
                      alt="Logo SMAN 11"
                      className="h-8 w-8"
                    />
                    <div className="text-white">
                      <h2 className="font-bold">SMAN 11</h2>
                      <p className="text-sm opacity-90">Surabaya</p>
                    </div>
                  </div>
                </div>

                <nav className="space-y-4">
                  {menuItems.map((item) => (
                    <div key={item.title} className="space-y-2">
                      {item.href ? (
                        <SheetClose asChild>
                          <Link
                            to={item.href}
                            className="block text-white hover:text-blue-200 transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
                          >
                            {item.title}
                          </Link>
                        </SheetClose>
                      ) : (
                        <>
                          <h3 className="text-white font-semibold py-2 px-3">
                            {item.title}
                          </h3>
                          <div className="ml-4 space-y-1">
                            {item.items?.map((subItem) => (
                              <SheetClose asChild key={subItem.name}>
                                <Link
                                  to={subItem.href}
                                  className="block text-white/80 hover:text-white transition-colors duration-300 py-1 px-3 rounded"
                                >
                                  {subItem.name}
                                </Link>
                              </SheetClose>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;