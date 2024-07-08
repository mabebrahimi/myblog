'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { RiMoonClearLine, RiSunLine, RiComputerLine } from 'react-icons/ri';

export function ModeToggle() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const controls = useAnimationControls();

  async function closeMenu() {
    await controls.start('closed');
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      controls.start('open');
    }
  }, [controls, open]);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div className="laptop:h-[38px] laptop:w-[38px]" />;

  const handleSelect = (selectedTheme: string) => {
    setTheme(selectedTheme);
  };

  return (
    <div className="flex items-center">
      <div className="laptop:hidden">
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          className="p-3"
          aria-label="Toggle theme"
        >
          {theme === 'light' || !theme ? (
            <RiSunLine className="text-[20px] text-gray-700 tablet:text-[22px] laptop:text-secondary-900" />
          ) : (
            <RiMoonClearLine className="text-[20px] text-gray-300 tablet:text-[22px] laptop:text-secondary-50" />
          )}
        </button>
      </div>
      <div className="hidden laptop:block">
        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
          <DropdownMenu.Trigger
            className="flex items-center rounded-xl border-2 border-transparent focus:border-2 focus:border-gray-500 focus:outline-none dark:focus:border-gray-200"
            aria-label="Toggle Theme"
          >
            <div className="p-3">
              {theme === 'light' || !theme ? (
                <RiSunLine className="text-[20px] text-gray-700 tablet:text-[22px] laptop:text-secondary-900" />
              ) : (
                <RiMoonClearLine className="text-[20px] text-gray-300 tablet:text-[22px] laptop:text-secondary-50" />
              )}
            </div>
          </DropdownMenu.Trigger>

          <AnimatePresence>
            {open && (
              <DropdownMenu.Portal forceMount>
                <DropdownMenu.Content
                  align="end"
                  className="card-shadow mt-1 overflow-hidden rounded-3xl border border-secondary-200 bg-light-1 px-4 py-3 text-left dark:border-secondary-950 dark:bg-dark-1"
                  asChild
                >
                  <motion.div
                    initial="closed"
                    animate={controls}
                    exit="closed"
                    variants={{
                      open: {
                        opacity: 1,
                        y: 0,
                        transition: { ease: 'easeOut', duration: 0.1 },
                      },
                      closed: {
                        opacity: 0,
                        y: -10,
                        transition: { ease: 'easeIn', duration: 0.2 },
                      },
                    }}
                  >
                    <Item
                      closeMenu={closeMenu}
                      onSelect={() => {
                        handleSelect('system');
                      }}
                    >
                      <RiComputerLine className="h-4 w-4" />
                      OS Theme
                    </Item>
                    {/* <div className="flex justify-center">
                      <DropdownMenu.Separator className="m-[5px] h-[1px] w-9/12 bg-secondary-200 dark:bg-dark-2" />
                    </div> */}
                    <Item
                      closeMenu={closeMenu}
                      onSelect={() => {
                        handleSelect('light');
                      }}
                    >
                      <RiSunLine className="h-4 w-4" />
                      Lights On
                    </Item>
                    {/* <div className="flex justify-center">
                      <DropdownMenu.Separator className="m-[5px] h-[1px] w-9/12 bg-secondary-200 dark:bg-dark-2" />
                    </div> */}
                    <Item
                      closeMenu={closeMenu}
                      onSelect={() => {
                        handleSelect('dark');
                      }}
                    >
                      <RiMoonClearLine className="h-4 w-4" />
                      Lights Off
                    </Item>
                  </motion.div>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            )}
          </AnimatePresence>
        </DropdownMenu.Root>
      </div>
    </div>
  );
}

function Item({
  children,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSelect = () => {},
  closeMenu,
}: {
  children: ReactNode;
  onSelect?: () => void;
  closeMenu: () => void;
}) {
  const controls = useAnimationControls();

  return (
    <DropdownMenu.Item
      onSelect={async (e) => {
        e.preventDefault();

        await controls.start({
          backgroundColor: '#DBEAFE',
          color: '#000',
          transition: { duration: 0.04 },
        });
        await controls.start({
          backgroundColor: '#4338ca',
          color: '#fff',
          transition: { duration: 0.04 },
        });
        await sleep(0.075);

        await closeMenu();
        onSelect();
      }}
      className="cursor-pointer select-none rounded-2xl px-4 py-3 text-gray-700 data-[highlighted]:bg-secondary-500 data-[highlighted]:text-white data-[highlighted]:focus:outline-none dark:text-gray-300 dark:data-[highlighted]:bg-secondary-500 dark:data-[highlighted]:text-white"
      asChild
    >
      <motion.div
        animate={controls}
        className="flex items-center gap-3 rounded-2xl text-[16px]"
      >
        {children}
      </motion.div>
    </DropdownMenu.Item>
  );
}

const sleep = (s: number) =>
  new Promise((resolve) => setTimeout(resolve, s * 1000));
