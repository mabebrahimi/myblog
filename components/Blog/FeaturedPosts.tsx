import { cn } from '@/lib/utils';
import dayjs from 'dayjs';

import PostCard from '@/components/Blog/PostCard';
import HeadingText from '@/components/HeadingText';
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';

import { allPosts } from 'contentlayer/generated';
import { ReactNode } from 'react';

const featuredPosts = allPosts
  .filter((post) => post.isFeatured)
  .sort(
    (a, b) => dayjs(b.publishedAt).valueOf() - dayjs(a.publishedAt).valueOf()
  )
  .slice(0, 3);

const FeaturedPosts = () => {
  const generatePosts = (): any => {
    return fetch('https://aliebrahimi.me/ghost/api/v3/content/posts/?key=26da1f3f23d488dba960b2f337', { next: { tags: ['posts'] } })
      .then(item => item.json())
      .then(item => {
        return item?.posts?.map((post: any, index: number) => (
          <div
            key={post.id}
            className={cn(index >= 2 ? 'hidden desktop:block' : 'block')}
          >
            <PostCard post={post} />
          </div>
        ))
      })
    // const jsonData = res.json()

    // return jsonData?.posts?.map((post: any, index: number) => (
    //   <div
    //     key={post.id}
    //     className={cn(index >= 2 ? 'hidden desktop:block' : 'block')}
    //   >
    //     <PostCard post={post} />
    //   </div>
    // ))
  }


  return (
    <AnimateOnScroll noScale y={40} threshold={0.4} duration={0.6}>
      <section className="featured-posts flex flex-col items-start justify-start gap-6 px-4 py-7 tablet:gap-9 tablet:px-[140px] tablet:py-12 laptop:gap-14 laptop:px-[184px] laptop:py-16">
        <HeadingText title="Blog" link="/blog" cta="See All Articles" />
        <AnimateOnScroll noScale y={40} threshold={0.4} duration={0.6}>
          <div className="posts flex w-full flex-col items-center gap-y-5 tablet:grid tablet:grid-cols-2 tablet:items-stretch tablet:gap-x-8 tablet:gap-y-11 desktop:grid-cols-3">
            {generatePosts()}
            {/* {posts?.map((post: any, index: number) => (
              <div
                key={post.id}
                className={cn(index >= 2 ? 'hidden desktop:block' : 'block')}
              >
                <PostCard post={post} />
              </div>
            ))} */}
          </div>
        </AnimateOnScroll>
      </section>
    </AnimateOnScroll>
  );
};

export default FeaturedPosts;
