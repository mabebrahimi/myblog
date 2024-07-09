'use client';

import { Fragment, useState, useEffect, MouseEventHandler } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, Variants, AnimatePresence } from 'framer-motion';
import { RiMenuFill } from 'react-icons/ri';
import { IoMdClose, IoMdAdd } from 'react-icons/io';
import { TbArrowRight } from 'react-icons/tb';

import { cn } from '@/lib/utils';
import { ModeToggle } from '../../global/ModeToggle';

const menuItems = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  {
    label: 'Pages',
    sublinks: [
      {
        label: 'Services',
        href: '/services',
        description: 'Custom illustration, 3D modeling, animation, and more.',
      },
      {
        label: 'Project Showcase',
        href: '/portfolio/ethereal-dreams',
        description: 'Our best digital art masterpieces, curated for you.',
      },
      {
        label: 'Single Post',
        href: '/blog/breaking-boundaries-with-digital-techniques',
        description: 'In-depth analysis of digital art industry.',
      },
      {
        label: 'FAQ',
        href: '/faq',
        description: 'Frequently asked questions about our services.',
      },
      {
        label: '404',
        href: '/not-found',
        description: 'Oops! This page does not exist.',
      },
    ],
  },
];

const Logo = () => (
  <Link href="/" className="logo flex items-center justify-start gap-[10px]">
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
          className="fill-black dark:fill-white"
        />
      </svg>
    </div>
    <p className="h-full font-lora text-xl font-medium leading-5 text-black dark:text-white tablet:text-2xl">
      The Folio
    </p>
  </Link>
);

const MenuIcon = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button onClick={onClick} className="p-2" aria-label="Toggle mobile menu">
    <RiMenuFill className="text-[20px] tablet:text-[22px]" />
  </button>
);

const CloseIcon = ({
  onClick,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    onClick={onClick}
    className="p-2 text-secondary-900 dark:text-secondary-50"
  >
    <IoMdClose className="text-[20px] tablet:text-[22px]" />
  </button>
);

type MenuItemProps = {
  item: {
    href?: string;
    label: string;
  };
  isActive?: boolean;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};
const MenuItem = ({ item, isActive, onClick }: MenuItemProps) => (
  <div
    className={cn(
      'w-full text-2xl leading-7 text-gray-800 dark:text-gray-100 tablet:text-[28px] tablet:leading-9',
      isActive && 'text-primary-800 dark:text-secondary-300'
    )}
  >
    {item.href ? (
      <Link
        href={item.href}
        onClick={onClick}
        className="flex w-full cursor-pointer items-center justify-between gap-[10px] p-5"
      >
        {item.label}
        {!isActive ? (
          <TbArrowRight className="cursor-pointer text-2xl tablet:text-3xl" />
        ) : null}
      </Link>
    ) : (
      item.label
    )}
  </div>
);

type SubLinkProps = {
  sublink: {
    href: string;
    label: string;
  };
  isActive?: boolean;
  onClick: MouseEventHandler<HTMLAnchorElement>;
};
const SubLink = ({ sublink, isActive, onClick }: SubLinkProps) => (
  <div
    className={cn(
      'px-4 py-3 text-[18px] leading-7 text-gray-700 dark:text-gray-200 tablet:px-5 tablet:text-xl tablet:leading-8',
      isActive && 'text-primary-800 dark:text-secondary-300'
    )}
  >
    <Link
      onClick={onClick}
      href={sublink.href}
      className="flex w-full cursor-pointer items-center justify-between"
    >
      {sublink.label}
      {!isActive ? (
        <TbArrowRight className="text-[18px] leading-7 tablet:text-[22px]" />
      ) : null}
    </Link>
  </div>
);

const MobileNavMenu = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(true);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleSubMenuToggle = () => setSubMenuOpen(!subMenuOpen);

  const menuVariants: Variants = {
    initial: { opacity: 0, y: '-10%', scale: 0.9 },
    animate: {
      opacity: 1,
      y: '0%',
      scale: 1,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      y: '-10%',
      scale: 0.9,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  const subMenuVariants: Variants = {
    initial: { opacity: 0, height: 0, y: '-10%', scale: 0.9 },
    animate: {
      opacity: 1,
      height: 'auto',
      y: '0%',
      scale: 1,
      transition: { duration: 0.2, ease: 'easeInOut', staggerChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      height: 0,
      y: '-10%',
      scale: 0.9,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  return (
    <div>
      <MenuIcon onClick={handleMenuToggle} />
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 z-50 h-screen w-screen bg-white text-black dark:bg-dark-0"
          >
            <div className="navbar flex h-16 items-center tablet:h-20">
              <div className="navbar--content flex w-full items-center justify-between px-4 tablet:px-[140px]">
                <Logo />
                <div className="icons flex items-center justify-start gap-4">
                  <div className="laptop:hidden">
                    <CloseIcon onClick={handleMenuToggle} />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                maxHeight: 'calc(100vh - 116px)',
                overflowY: 'scroll',
              }}
              className="mobile-menu-container flex flex-col items-center justify-start gap-8 px-4 pt-8 tablet:px-[140px]"
            >
              <div className="flex w-full flex-col items-center justify-center rounded-lg bg-gradient-to-r from-primary-700/80 to-secondary-500/80 dark:from-primary-700 dark:to-secondary-500 tablet:h-[212px]">
                <p className="flex h-[200px] max-w-[220px] items-center justify-center text-center font-lora text-[26px] font-semibold leading-[40px] text-gray-50 tablet:h-[212px] tablet:max-w-[260px] tablet:text-3xl tablet:leading-[48px]">
                  Discover our world of digital art
                </p>
              </div>
              <nav className="flex w-full flex-col items-start gap-3 pb-12 tablet:pb-16">
                {menuItems.map((item, index) => {
                  const isActive = item.href === pathname;

                  return (
                    <Fragment key={index}>
                      {index > 0 && (
                        <div className="h-[1px] w-full bg-gray-300 dark:bg-gray-600" />
                      )}
                      {item.sublinks ? (
                        <div className="flex w-full flex-col gap-7 p-5">
                          <div className="flex w-full cursor-pointer items-center justify-between gap-[10px] text-2xl leading-7 text-gray-800 dark:text-gray-100 tablet:text-[28px] tablet:leading-9">
                            <div>{item.label}</div>
                            <button onClick={handleSubMenuToggle}>
                              <span className="text-2xl leading-7 tablet:text-3xl">
                                {subMenuOpen ? <IoMdClose /> : <IoMdAdd />}
                              </span>
                            </button>
                          </div>
                          <AnimatePresence>
                            {subMenuOpen && (
                              <motion.div
                                variants={subMenuVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                className="w-full rounded-[10px] bg-secondary-100 py-3 dark:bg-dark-2 tablet:py-4"
                              >
                                {item.sublinks.map((sublink) => {
                                  const isActive = pathname === sublink.href;

                                  return (
                                    <SubLink
                                      key={sublink.label}
                                      sublink={sublink}
                                      isActive={isActive}
                                      onClick={handleMenuToggle}
                                    />
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <MenuItem
                          item={item}
                          isActive={isActive}
                          onClick={handleMenuToggle}
                        />
                      )}
                    </Fragment>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavMenu;
