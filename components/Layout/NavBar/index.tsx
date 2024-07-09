'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ModeToggle } from '@/components/global/ModeToggle';
import MobileNavMenu from '@/components/Layout/NavBar/MobileNavMenu';
import DesktopNavMenu from '@/components/Layout/NavBar/DesktopNavMenu';

export default function NavBar() {
  const pathname = usePathname();
  const [contactLink, setContactLink] = useState('/#contact');

  useEffect(() => {
    if (hasContactSection()) {
      setContactLink('#contact');
    } else {
      setContactLink('/#contact');
    }
  }, [pathname]);

  function hasContactSection() {
    const contactSection = document.getElementById('contact');
    return Boolean(contactSection);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar flex h-16 items-center tablet:h-20 laptop:h-[100px]"
    >
      <div className="navbar--content flex w-full items-center justify-between px-4 tablet:px-[140px] laptop:px-[184px]">
        <Link className="z-[1]" href="/">
          <div className="logo flex items-center justify-start gap-[10px]">
            <div>
              <svg
                className="h-[22px] w-[22px] tablet:h-7 tablet:w-7"
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
                  className="fill-black dark:fill-white "
                />
              </svg>
            </div>
            <p className="h-full font-lora text-xl font-medium leading-5 text-black dark:text-white tablet:text-2xl">
              Ali Ebrahimi
            </p>
          </div>
        </Link>
        <div className="hidden laptop:block">
          <DesktopNavMenu />
        </div>
        <div className="icons z-[1] flex items-center justify-start gap-4 laptop:gap-5">
          
          <a
            href={contactLink}
            className="hidden h-full flex-1 items-center justify-center rounded-full bg-secondary-800 px-4 py-3 transition-colors duration-300 ease-out hover:bg-secondary-700 dark:bg-secondary-300 dark:hover:bg-secondary-200 laptop:flex"
          >
            <p className="text-center text-base font-bold text-gray-50 dark:text-gray-950">
              Hire Me
            </p>
          </a>
          <div className="laptop:hidden">
            <MobileNavMenu />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
