import Image from 'next/image';

import AnimateOnScroll from '@/components/animation/AnimateOnScroll';

const HeroImage = () => {
  return (
    <AnimateOnScroll x="10%" delay={0} scale={0.9} duration={0.6} notLazy>
      <div className="relative flex h-[560px] w-[450px]">
        <Image
          alt="hero image"
          className="absolute left-0 top-0"
          src="/images/hero-avatar.png"
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="(min-width: 1024px) 450px, (min-width: 640px) 300px, 200px"
        />
      </div>
    </AnimateOnScroll>
  );
};

export default HeroImage;
