import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/1-SMA_11.png";
import studentsImage from "@/assets/students-activities.jpg";
import graduationImage from "@/assets/graduation-ceremony.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: heroImage,
      title: "Selamat Datang di SMA Negeri 11 Surabaya",
      subtitle: "Mewujudkan insan peserta didik yang iman, cerdas, terampil dan berwawasan lingkungan",
      link: "/profil/sejarah-sekolah",
    },
    {
      id: 2,
      image: studentsImage,
      title: "Prestasi Gemilang Siswa SMAN 11",
      subtitle: "Meraih berbagai penghargaan di tingkat kota, provinsi, dan nasional dalam bidang akademik maupun non-akademik",
      link: "/kesiswaan/prestasi",
    },
    {
      id: 3,
      image: graduationImage,
      title: "Lulusan Berkualitas Siap Menghadapi Masa Depan",
      subtitle: "Alumni SMAN 11 Surabaya telah tersebar di berbagai perguruan tinggi ternama dan profesi bergengsi",
      link: "/profil/visi-misi",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 text-center text-white">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 fade-in text-balance">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 slide-up max-w-4xl mx-auto text-balance">
                {slide.subtitle}
              </p>
              <Link to={slide.link}>
                <Button className="school-button text-lg px-8 py-3">
                  Selengkapnya
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows - Desktop only */}
      <div className="hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;