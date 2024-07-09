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

  return (
    <NavigationMenu.Root className="relative z-[1] flex justify-center">
      <NavigationMenu.List className="center m-0 flex list-none gap-5">
        <NavigationMenuItem href="/">Home</NavigationMenuItem>
        <NavigationMenuItem href="/portfolio">Portfolio</NavigationMenuItem>
        <NavigationMenuItem href="/blog">Blog</NavigationMenuItem>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute left-0 top-full flex justify-center">
        <NavigationMenu.Viewport className="relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] overflow-hidden rounded-[6px] transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn" />
      </div>
    </NavigationMenu.Root>
  );
};

export default DesktopNavMenu;
