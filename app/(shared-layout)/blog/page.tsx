import type { GetServerSideProps, InferGetServerSidePropsType, Metadata } from 'next';
import Image from 'next/image';

import AnimatedHeading from '@/components/animation/AnimatedHeading';
import Allposts from '@/components/Blog/AllPosts';
import ArchivedPosts from '@/components/Blog/ArchivedPosts';
import LatestPost from '@/components/Blog/LatestPost';
import Search from '@/components/Blog/Search';
import Cta from '@/components/Cta';
import dayjs from 'dayjs';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on digital art, design, and more.',
};



export default async function BlogPage() {
  const res = await fetch('https://aliebrahimi.me/ghost/api/v3/content/posts/?key=26da1f3f23d488dba960b2f337', { next: { tags: ['posts'] } })
  const posts = await res.json()


  return (
    <>
      <section className="relative -mt-16 w-full pt-16 tablet:-mt-20 tablet:pt-20 laptop:-mt-[100px] laptop:pt-[100px]">
        <Image
          alt="light-bg"
          src="/images/hero-bg-light.png"
          fill
          className="absolute left-0 top-0 z-[-1] w-full dark:hidden"
          priority
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 70vw, 100vw"
        />
        <AnimatedHeading
          head="Blog."
          title={
            <>
              Discover the Art of{' '}
              <span className="bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text font-nunito text-transparent dark:from-[#93C5FD] dark:via-[#BFDBFE] dark:to-[#93C5FD]">
                Digital{' '}
              </span>
              <span className="bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent dark:from-[#93C5FD] dark:via-[#BFDBFE] dark:to-[#93C5FD]">
                World
              </span>
            </>
          }
          search={<Search />}
        />
      </section>
      <LatestPost posts={posts.posts?.sort((a: any, b: any) => {
        return dayjs(b.published_at).diff(dayjs(a.published_at));
      })} />
      <Allposts posts={posts} />
      <Cta
        title="Stay Connected"
        description="Join Our Community of Digital Art Enthusiasts and Get Exclusive Access to Behind-the-Scenes Stories, Tips, and Insights Delivered Directly to Your Inbox!"
        variant="email"
      />
      <ArchivedPosts />
    </>
  );
}