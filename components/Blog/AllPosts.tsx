'use client';

import { useState, useRef, useMemo, FC, useEffect } from 'react';
import dayjs from 'dayjs';

import HeadingText from '@/components/HeadingText';
import PostCard from '@/components/Blog/PostCard';
import Pagination from '@/components/Pagination';
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';
import { allPosts } from 'contentlayer/generated';



interface IProps {
  posts?: any
}



const Allposts: FC<IProps> = ({ posts = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsRef = useRef(null);

  const limit = 6;
  const total = Math.ceil(posts.posts.length / limit);

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
    const element = postsRef.current as unknown as HTMLElement;
    element.scrollIntoView();
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
    const element = postsRef.current as unknown as HTMLElement;
    element.scrollIntoView();
  };

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedPosts = posts.posts?.slice(startIndex, endIndex);

  return (
    <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
      <section
        ref={postsRef}
        id="all-projects"
        className="flex flex-col gap-6 px-4 pb-12 pt-7 tablet:gap-9 tablet:px-[140px] tablet:pb-[96px] tablet:pt-12 laptop:gap-14 laptop:px-[184px] laptop:pt-16"
      >
        <HeadingText title="All Posts" />
        <div className="Layout inline-flex w-full flex-col items-center justify-start gap-10">
          <div className="Tabs hidden w-full flex-wrap gap-y-2 tablet:flex flex-row-reverse tablet:items-start tablet:justify-center laptop:gap-x-4">
            <button className="Button flex items-center justify-center rounded-lg bg-primary-200 tablet:px-5 tablet:py-3 laptop:px-6">
              <p className="AllPosts text-center text-base font-semibold text-gray-700">
                All Posts
              </p>
            </button>
            <button className="Button flex items-center justify-center rounded-lg tablet:px-5 tablet:py-3 laptop:px-6">
              <p className="3DModeling text-center text-base font-semibold text-gray-700 dark:text-gray-300">
                Inspiration
              </p>
            </button>
            <button className="Button flex items-center justify-center rounded-lg tablet:px-5 tablet:py-3 laptop:px-6">
              <p className="GameArt text-center text-base font-semibold text-gray-700 dark:text-gray-300">
                Techniques
              </p>
            </button>
            <button className="Button flex items-center justify-center rounded-lg tablet:px-5 tablet:py-3 laptop:px-6">
              <p className="DigitalPainting text-center text-base font-semibold text-gray-700 dark:text-gray-300">
                Design
              </p>
            </button>
            <button className="Button flex items-center justify-center rounded-lg tablet:px-5 tablet:py-3 laptop:px-6">
              <p className="DigitalPainting text-center text-base font-semibold text-gray-700 dark:text-gray-300">
                Career
              </p>
            </button>
          </div>
          <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
            <div className="posts flex w-full flex-col items-center gap-y-5 tablet:grid tablet:grid-cols-2 tablet:items-stretch tablet:gap-x-8 tablet:gap-y-11 laptop:grid-cols-3">
              {slicedPosts.map((post: any) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </AnimateOnScroll>
        </div>
        <Pagination
          page={currentPage}
          total={total}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      </section>
    </AnimateOnScroll>
  );
};

export default Allposts;
