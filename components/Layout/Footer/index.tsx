import Link from 'next/link';
import React from 'react';

const LinkItem = ({ link, name }: { link: string; name: string }) => (
  <Link
    href={`/${link}`}
    className="inline-flex h-full w-full flex-col items-center justify-start space-y-5"
  >
    <p className="flex-1 text-base font-semibold text-gray-900 transition-colors duration-100 ease-out hover:text-primary-700 dark:text-gray-100 dark:hover:text-secondary-300">
      {name}
    </p>
  </Link>
);

function Links() {
  return (
    <>
      <LinkItem link="/" name="Home" />
      <LinkItem link="portfolio" name="Portfolio" />
      <LinkItem link="blog" name="Blog" />
      <LinkItem link="services" name="Services" />
    </>
  );
}

export default function Footer() {
  return (
    <footer className="p-2 tablet:p-3 laptop:p-5">
      <div className="flex flex-col items-center justify-start rounded-2xl bg-light-1 px-4 py-7 dark:bg-dark-1/40 dark:bg-blend-multiply tablet:rounded-3xl tablet:px-[124px] tablet:py-12 laptop:flex-col laptop:px-[164px] laptop:py-16 desktop:rounded-[48px]">
        <div className="Content flex w-full flex-col items-start justify-center gap-5 pb-8 tablet:justify-between tablet:gap-2 tablet:pb-12 800:flex-row 800:gap-0 laptop:pb-16">
          <div className="Content mr-2 inline-flex w-full flex-1 flex-col items-start justify-start gap-3 tablet:w-auto tablet:gap-[2px] 940:gap-2">
            <p className="Text w-full text-center text-xl font-bold leading-6 text-gray-900 dark:text-gray-50 tablet:w-auto tablet:text-start tablet:leading-7">
              Be the First to Know
            </p>
            <p className="Text block w-full px-2 text-center text-sm font-semibold leading-normal text-gray-700 dark:text-gray-300 tablet:hidden tablet:w-auto tablet:max-w-[250px] tablet:px-0 tablet:text-start tablet:text-base 940:block laptop:max-w-none">
              Join My Newsletter Community for the Best in Design and Creativity
            </p>
          </div>
          <div className="Email flex w-full flex-col items-center gap-4 tablet:w-auto tablet:flex-row tablet:items-start tablet:justify-center tablet:gap-0 tablet:space-x-4">
            <input
              aria-label="write your email"
              placeholder="Write your email"
              type="email"
              id="newsletter_email"
              className="Input flex w-[280px] items-center justify-start rounded-xl border border-secondary-300 bg-white px-3.5 py-2.5 text-sm leading-5 text-gray-800 placeholder-gray-600 shadow transition-all duration-300 ease-out placeholder:text-gray-600 focus:border-secondary-400 focus:shadow-secondary-400/80 focus:outline-none focus:ring-2 tablet:text-base tablet:leading-normal laptop:w-80"
            />
            <button className="Button flex w-[282px] items-center justify-center rounded-xl border border-primary-600 bg-primary-600 px-3 py-2.5 shadow tablet:w-auto 940:px-4">
              <p className="Text text-sm font-bold leading-5 text-gray-50 tablet:leading-normal 940:text-base">
                Subscribe
              </p>
            </button>
          </div>
        </div>
        <div className="links flex w-full justify-center border-t border-gray-300 py-8 dark:border-gray-700/50 tablet:gap-6 800:gap-24 laptop:gap-[130px] laptop:py-10">
          <Links />
        </div>
        <div className="w-full border-t border-gray-300 dark:border-gray-700/50">
          <div className="Content flex items-center justify-between pt-8">
            <Link href="/">
              <div className="logo flex items-center justify-start gap-[10px]">
                <div>
                  <svg
                    className="h-[18px] w-[18px] tablet:h-7 tablet:w-7"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3 1C1.89543 1 1 1.89543 1 3V19C1 20.1046 1.89543 21 3 21H19C20.1046 21 21 20.1046 21 19V3C21 1.89543 20.1046 1 19 1H3ZM7.58057 6.58057C7.02828 6.58057 6.58057 7.02829 6.58057 7.58057V14.4194C6.58057 14.9717 7.02828 15.4194 7.58057 15.4194H14.4194C14.9717 15.4194 15.4194 14.9717 15.4194 14.4194V7.58057C15.4194 7.02829 14.9717 6.58057 14.4194 6.58057H7.58057Z"
                      fill="#1D4ED8"
                    />
                    <path
                      d="M1.5 3C1.5 2.17157 2.17157 1.5 3 1.5V0.5C1.61929 0.5 0.5 1.61929 0.5 3H1.5ZM1.5 19V3H0.5V19H1.5ZM3 20.5C2.17157 20.5 1.5 19.8284 1.5 19H0.5C0.5 20.3807 1.61929 21.5 3 21.5V20.5ZM19 20.5H3V21.5H19V20.5ZM20.5 19C20.5 19.8284 19.8284 20.5 19 20.5V21.5C20.3807 21.5 21.5 20.3807 21.5 19H20.5ZM20.5 3V19H21.5V3H20.5ZM19 1.5C19.8284 1.5 20.5 2.17157 20.5 3H21.5C21.5 1.61929 20.3807 0.5 19 0.5V1.5ZM3 1.5H19V0.5H3V1.5ZM7.08057 7.58057C7.08057 7.30443 7.30442 7.08057 7.58057 7.08057V6.08057C6.75214 6.08057 6.08057 6.75214 6.08057 7.58057H7.08057ZM7.08057 14.4194V7.58057H6.08057V14.4194H7.08057ZM7.58057 14.9194C7.30442 14.9194 7.08057 14.6955 7.08057 14.4194H6.08057C6.08057 15.2478 6.75214 15.9194 7.58057 15.9194V14.9194ZM14.4194 14.9194H7.58057V15.9194H14.4194V14.9194ZM14.9194 14.4194C14.9194 14.6955 14.6955 14.9194 14.4194 14.9194V15.9194C15.2478 15.9194 15.9194 15.2478 15.9194 14.4194H14.9194ZM14.9194 7.58057V14.4194H15.9194V7.58057H14.9194ZM14.4194 7.08057C14.6955 7.08057 14.9194 7.30443 14.9194 7.58057H15.9194C15.9194 6.75214 15.2478 6.08057 14.4194 6.08057V7.08057ZM7.58057 7.08057H14.4194V6.08057H7.58057V7.08057Z"
                      className="fill-black dark:fill-white"
                    />
                  </svg>
                </div>
                <p className="h-full font-lora text-lg font-medium leading-5 text-black dark:text-white tablet:text-2xl">
                  The Folio
                </p>
              </div>
            </Link>
            <p className="Footertext max-w-[180px] text-center text-sm font-normal leading-[18px] text-gray-700 dark:text-gray-300 tablet:max-w-[220px] tablet:text-center tablet:text-base 800:max-w-none 800:text-start">
              The Folio © 2023. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
