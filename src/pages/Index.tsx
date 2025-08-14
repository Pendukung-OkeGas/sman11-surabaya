import { useEffect } from "react";
import Layout from "@/components/Layout";
import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  useEffect(() => {
    // Animate elements when they come into view
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    }, observerOptions);

    const slideUpObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("slide-up");
        }
      });
    }, observerOptions);

    // Observe fade-in elements
    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    // Observe slide-up elements
    document.querySelectorAll(".slide-up").forEach((el) => {
      slideUpObserver.observe(el);
    });

    return () => {
      observer.disconnect();
      slideUpObserver.disconnect();
    };
  }, []);

  return (
    <Layout>
      <HeroSlider />
      <AboutSection />
      <NewsSection />
    </Layout>
  );
};

export default Index;
