import AppButton from "../essential/AppButton";


import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from "./Components/HeroSection";
import LogosSection from "./Components/LogosSection";
import BenefitsSection from "./Components/BenefitsSection";
import TestimonialsSection from "./Components/TestimonialsSection";
import FAQSection from "./Components/FAQSection";
import Footer from "./Components/Footer";

export default function Home() {
  const goToTopBtnRef = useRef(null);

  useEffect(() => {
    // Go To Top Button
    const goToTopBtn = goToTopBtnRef.current;
    if (goToTopBtn) {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          goToTopBtn.classList.add('show');
        } else {
          goToTopBtn.classList.remove('show');
        }
      };

      const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

      window.addEventListener('scroll', handleScroll);
      goToTopBtn.addEventListener('click', handleClick);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        goToTopBtn.removeEventListener('click', handleClick);
      };
    }
  }, []);

  // Scroll Reveal Animation
  useEffect(() => {
    const scrollElements = document.querySelectorAll(".reveal-on-scroll");

    const elementInView = (el, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return (elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
    };

    const displayScrollElement = (element) => {
      element.classList.add("is-visible");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.15)) {
          displayScrollElement(el);
        }
      });
    };

    handleScrollAnimation(); // Initial check
    window.addEventListener("scroll", handleScrollAnimation);

    return () => {
      window.removeEventListener("scroll", handleScrollAnimation);
    };
  }, []);

  return (
    <main>
      <HeroSection />
      <LogosSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />

      <button
        ref={goToTopBtnRef}
        id="goToTopBtn"
        className="btn-go-to-top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>
    </main>
  );
}
