"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import Image from "@/shared/components/Image/Image";
import Link from "@/shared/components/Link/Link";

import { INTERNAL_LINKS } from "../../config/urls";
import styles from "./AppHeader.module.scss";

function AppHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);

    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      // When the menu is open, add the class to disable scrolling
      document.body.classList.add("no-scroll");
    } else {
      // When the menu is closed, remove the class to enable scrolling
      document.body.classList.remove("no-scroll");
    }
    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  const renderLink = useCallback(
    (name: string, href: string, mobile: boolean = false) => (
      <Link
        key={name}
        href={href}
        className={`hover:text-grey-500 ${
          mobile
            ? "block py-[10px] leading-6"
            : `h-[44px] p-[10px] border-b border-solid transition-all duration-300 ease-in-out ${
                pathname === href ? "border-black" : "border-transparent"
              }`
        }`}
      >
        <p className={mobile ? "pl-4" : ""}>{name}</p>
      </Link>
    ),
    [pathname]
  );

  return (
    <nav
      className={`sticky top-0 left-0 text-black py-4 w-full h-14 lg:h-19 z-10 ${styles.animateColor} ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div
        className={`${
          isOpen ? "pr-[2.05rem] sm:pr-[3.05rem] lg:pr-20 xl:pr-29" : "pr-4 sm:pr-8 lg:pr-16 xl:pr-25"
        } flex justify-between sticky w-full items-center mx-auto max-w-[1440px] z-40 pl-4 sm:pl-8 lg:pl-16 xl:pl-25`}
      >
        <Link href='/' className='relative w-[120px] md:w-[140px] lg:w-[150px] h-[22px] md:h-[26px] lg:h-[28px]'>
          <Image
            priority
            src='/svgs/outer_image_logo.svg'
            width={120}
            height={22}
            alt='logo'
            className={`${
              isOpen ? "opacity-0 lg:opacity-100" : "opacity-100"
            } w-full h-auto absolute top-0 left-0 transition-all duration-300 ease-in-out`}
          />
          <Image
            priority
            src='/svgs/outer_image_white_logo.svg'
            width={150}
            height={28}
            alt='white logo'
            className={`${
              isOpen ? "opacity-100" : "opacity-0"
            } lg:hidden w-full h-auto absolute top-0 left-0 transition-all duration-300 ease-in-out`}
          />
        </Link>

        <div className='hidden lg:flex gap-8 items-center'>
          {INTERNAL_LINKS.map(({ name, href }) => renderLink(name, href))}
        </div>

        {/* Mobile menu button */}
        <div className='lg:hidden flex items-center'>
          <button
            type='button'
            onClick={() => setIsOpen(!isOpen)}
            className='relative h-[24px] w-[24px]'
            aria-expanded={isOpen}
          >
            <Image
              priority
              src='/svgs/navbar_menu_icon.svg'
              width={24}
              height={24}
              alt='menu-icon'
              className={`${
                isOpen ? "opacity-0" : "opacity-100"
              } absolute top-0 left-0 transition-opacity duration-300 ease-in-out`}
            />
            <Image
              priority
              src='/svgs/close_white_icon.svg'
              width={24}
              height={24}
              alt='menu-icon-white'
              className={`${
                isOpen ? "opacity-100" : "opacity-0"
              } absolute top-0 left-0 transition-opacity duration-300 ease-in-out`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed flex flex-col justify-between top-0 left-0 bottom-0 w-full h-full bg-black text-white z-10 overflow-hidden lg:hidden transition-all duration-300 ${
          isOpen ? "translate-x-0 opacity-100 visible" : "translate-x-[-100%] opacity-0 invisible"
        }`}
      >
        <div className='flex flex-col gap-y-3 text-base mt-[150px]'>
          {INTERNAL_LINKS.map(({ name, href }) => renderLink(name, href, true))}
        </div>

        <div className='flex flex-col gap-[10px] pl-4 pb-9 text-sm'>
          <span>+1 (212) 661-2124</span>
          <span className='uppercase'>226 42nd Street Brooklyn, NY 11232</span>
        </div>
      </div>
    </nav>
  );
}

export default AppHeader;
