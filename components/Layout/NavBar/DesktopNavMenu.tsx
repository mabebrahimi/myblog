'use client';

/* eslint-disable react/display-name */
import React, { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { cn } from '@/lib/utils';
import { RxCaretDown } from 'react-icons/rx';

const ListItem = React.forwardRef(
  (
    {
      className,
      children,
      title,
      ...props
    }: { className?: string; children: ReactNode; href: string; title: string },
    forwardedRef
  ) => {
    const pathname = usePathname();
    const isActive = pathname === props.href;

    return (
      <NavigationMenu.Link asChild>
        <Link
          className={cn(
            'inline-flex w-full cursor-pointer flex-col items-start justify-start space-y-1.5 rounded-lg border border-transparent px-2.5 py-1.5 transition-all duration-300 hover:bg-light-2 focus:border-gray-400 dark:hover:bg-dark-2  dark:focus:border-dark-3',
            isActive &&
              'bg-secondary-200 hover:bg-secondary-200 focus:border-transparent dark:bg-secondary-800 dark:hover:bg-secondary-800 dark:focus:border-transparent ',
            className
          )}
          {...props}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ref={forwardedRef}
        >
          <div className="text-lg leading-normal text-gray-900 dark:text-gray-100">
            {title}
          </div>
          <p className="w-full text-sm leading-tight text-gray-700 dark:text-gray-300">
            {children}
          </p>
        </Link>
      </NavigationMenu.Link>
    );
  }
);

const NavigationMenuItem = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <NavigationMenu.Item>
      <Link href={href} passHref legacyBehavior>
        <NavigationMenu.Link
          className={cn(
            'block select-none border-b-2 border-transparent text-[18px] font-normal leading-6 text-gray-700 no-underline outline-none transition-all duration-300 ease-out hover:rounded-none hover:text-secondary-700 focus:border-b-2 focus:border-gray-500 dark:text-gray-300 dark:hover:text-secondary-300 dark:focus:border-dark-3',
            isActive &&
              'border-b-secondary-500 font-bold text-secondary-800 hover:text-secondary-800 focus:rounded-none focus:border-transparent focus:border-b-secondary-500 dark:border-b-secondary-800 dark:text-secondary-200 dark:hover:text-secondary-200 dark:focus:border-transparent dark:focus:border-b-secondary-800'
          )}
        >
          {children}
        </NavigationMenu.Link>
      </Link>
    </NavigationMenu.Item>
  );
};

const DesktopNavMenu = () => {
  const pathname = usePathname();
  const paths = [
    '/services',
    '/portfolio/ethereal-dreams',
    '/blog/breaking-boundaries-with-digital-techniques',
    '/faq',
    '/not-found',
  ];
  const pagesIsActive = paths.includes(pathname);

  return (
    <NavigationMenu.Root className="relative z-[1] flex justify-center">
      <NavigationMenu.List className="center m-0 flex list-none gap-5">
        <NavigationMenuItem href="/">Home</NavigationMenuItem>
        <NavigationMenuItem href="/portfolio">Portfolio</NavigationMenuItem>
        <NavigationMenuItem href="/blog">Blog</NavigationMenuItem>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger
            className={cn(
              'flex select-none items-center gap-1 rounded-[4px] border-b-2 border-transparent text-[18px] font-normal leading-6 text-gray-700 no-underline outline-none transition-all duration-300 ease-out hover:rounded-none hover:text-secondary-700 focus:rounded-none focus:border-b-2 focus:border-gray-500 dark:text-gray-300 dark:hover:text-secondary-300 dark:focus:border-dark-3',
              pagesIsActive &&
                'rounded-none border-b-secondary-500 font-bold text-secondary-800 hover:text-secondary-800 focus:rounded-none focus:border-transparent focus:border-b-secondary-500 dark:border-b-secondary-800 dark:text-secondary-200 dark:hover:text-secondary-200 dark:focus:border-transparent dark:focus:border-b-secondary-800'
            )}
          >
            Pages{' '}
            <RxCaretDown
              className="relative text-[16px] transition-transform duration-[250] ease-out group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft laptop:w-auto">
            <nav className="flex h-[470px] w-[572px] items-center justify-center gap-6 rounded-xl bg-light-1 p-6 dark:bg-dark-1">
              <div className="flex h-full w-60 flex-col items-center justify-center rounded-lg bg-gradient-to-r from-primary-700/80 to-secondary-500/80">
                <p className="w-5/6 text-center font-lora text-[28px] font-semibold leading-[48px] text-gray-50">
                  Maximize success with custom inner pages.
                </p>
              </div>
              <div className="flex w-[260px] flex-col items-start justify-start gap-[10px]">
                <ListItem href="/services" title="Services">
                  Custom illustration, 3D modeling, animation, and more.
                </ListItem>
                <ListItem
                  href="/portfolio/ethereal-dreams"
                  title="Project Showcase"
                >
                  Our best digital art masterpieces, curated for you.{' '}
                </ListItem>
                <ListItem
                  href="/blog/breaking-boundaries-with-digital-techniques"
                  title="Single Post"
                >
                  In-depth analysis of digital art industry.
                </ListItem>
                <ListItem href="/faq" title="FAQ">
                  Frequently asked questions about our services.
                </ListItem>
                <ListItem href="/not-found" title="404">
                  Oops! This page does not exist.
                </ListItem>
              </div>
            </nav>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute left-0 top-full flex justify-center">
        <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] overflow-hidden rounded-[6px] transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn" />
      </div>
    </NavigationMenu.Root>
  );
};

export default DesktopNavMenu;
