'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '@/components/FeaturedProducts';
import MissionVision from '@/components/MissionVision';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="home-page">
        <HeroSection />
        <FeaturedProducts />
        <MissionVision />
        <Testimonials />
        <Newsletter />
      </main>
    </>
  );
}
