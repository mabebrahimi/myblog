'use client';

import { FC, useRef, useState } from 'react';

import HeadingText from '@/components/HeadingText';
import ProjectCard from '@/components/Portfolio/ProjectCard';

import Pagination from '@/components/Pagination';
import AnimateOnScroll from '@/components/animation/AnimateOnScroll';


interface IProps {
  portfolios?: any
}


const AllProjects: FC<IProps> = ({ portfolios }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const allProjectsRef = useRef(null);

  const limit = 4;
  const total = Math.ceil(portfolios?.pages?.length / limit);

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
    const element = allProjectsRef.current as unknown as HTMLElement;
    element.scrollIntoView();
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
    const element = allProjectsRef.current as unknown as HTMLElement;
    element.scrollIntoView();
  };

  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  const slicedProjects = portfolios?.pages?.slice(startIndex, endIndex);

  return (
    <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
      <section
        ref={allProjectsRef}
        id="all-projects"
        className="flex flex-col gap-6 px-4 pb-12 pt-7 tablet:gap-9 tablet:px-[140px] tablet:pb-[96px] tablet:pt-12 laptop:gap-14 laptop:px-[184px] laptop:pt-16"
      >
        <HeadingText title="All Projects" />
        <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
          <div className="Layout inline-flex w-full flex-col items-center justify-start gap-10">
            <div className="Tabs hidden w-full flex-row-reverse tablet:inline-flex tablet:items-start tablet:justify-center laptop:gap-x-4">
              <button className="Button flex items-center justify-center rounded-lg bg-primary-200 tablet:px-5 tablet:py-3 laptop:px-6">
                <p className="AllWorks text-center text-base font-semibold leading-normal text-gray-700">
                  All
                </p>
              </button>
              <button className="Button flex items-center justify-center rounded-lg tablet:px-5 tablet:py-3 laptop:px-6">
                <p className="3DModeling text-center text-base font-semibold leading-normal text-gray-700 dark:text-gray-300">
                  3D Modeling
                </p>
              </button>
              <button className="Button flex items-center justify-center rounded-lg tablet:px-5 tablet:py-3 laptop:px-6">
                <p className="GameArt text-center text-base font-semibold leading-normal text-gray-700 dark:text-gray-300">
                  Game Art
                </p>
              </button>
              <button className="Button flex items-center justify-center rounded-lg tablet:px-5 tablet:py-3 laptop:px-6">
                <p className="DigitalPainting text-center text-base font-semibold leading-normal text-gray-700 dark:text-gray-300">
                  Digital Painting
                </p>
              </button>
            </div>
            <AnimateOnScroll noScale y={40} threshold={0.1} duration={0.6}>
              <div className="flex flex-col gap-10 tablet:gap-[72px]">
                {slicedProjects.map((project: any, index: number) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>
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

export default AllProjects;
