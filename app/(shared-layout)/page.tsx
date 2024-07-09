import Image from 'next/image';

import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/Portfolio/FeaturedProjects';
import Services from '@/components/Services/FeaturedServices';
import Testimonials from '@/components/Testimonials';
import Cta from '@/components/Cta';
import FeaturedPosts from '@/components/Blog/FeaturedPosts';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'The Folio',
  description: 'A portfolio website for a digital artist.',
};

export default function Home() {
  return (
    <>
      <main role="main" aria-labelledby="main-heading">
        <h1 id="main-heading" className="sr-only">
          The Folio - Digital Artist&apos;s Portfolio
        </h1>
        <section className="relative -mt-16 w-full pt-16 tablet:-mt-20 tablet:pt-20 laptop:-mt-[100px] laptop:pt-[100px]">
          <Hero />
        </section>
        <FeaturedPosts />
        <FeaturedProjects />
        <Cta
          title="Ready to Collaborate?"
          description="Join me on a journey where creativity knows no bounds. Let's explore the limits of digital art together."
        />
        <Contact />
      </main>
    </>
  );
}
