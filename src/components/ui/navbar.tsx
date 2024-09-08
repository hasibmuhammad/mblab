"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for hamburger and close menu

const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false); // Mobile menu state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("fixed top-0 inset-x-0 z-50 bg-black/60", className)}>
      <div className="max-w-7xl mx-auto w-full px-4 py-4 md:px-0 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <h1 className="text-lg font-bold">MBLAB</h1>
          </Link>
        </div>

        {/* Hamburger Menu Button for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu (visible when toggled) */}
        {isOpen && (
          <div className="absolute top-[60px] left-0 right-0 z-40 md:hidden bg-black/60 border-t-2">
            <Menu setActive={setActive} isMobile={true}>
              <Link href="/">
                <MenuItem
                  setActive={setActive}
                  active={active}
                  item="Home"
                ></MenuItem>
              </Link>
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-col space-y-2 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">
                    Interface Design
                  </HoveredLink>
                  <HoveredLink href="/seo">SEO</HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="flex flex-col space-y-2 text-sm">
                  <ProductItem
                    title="Algochurn"
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews."
                  />
                  <ProductItem
                    title="Tailwind Master Kit"
                    href="https://tailwindmasterkit.com"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Tailwind components."
                  />
                  <ProductItem
                    title="Moonbeam"
                    href="https://gomoonbeam.com"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                    description="Create blogs fast."
                  />
                  <ProductItem
                    title="Rogue"
                    href="https://userogue.com"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                    description="AI-powered RFPs."
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Pricing">
                <div className="flex flex-col space-y-2 text-sm">
                  <HoveredLink href="/hobby">Hobby</HoveredLink>
                  <HoveredLink href="/individual">Individual</HoveredLink>
                  <HoveredLink href="/team">Team</HoveredLink>
                  <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                </div>
              </MenuItem>
            </Menu>
          </div>
        )}

        {/* Desktop Menu (hidden on mobile) */}
        <div className="hidden md:flex space-x-6 items-center">
          <Menu setActive={setActive}>
            <Link href="/">
              <MenuItem
                setActive={setActive}
                active={active}
                item="Home"
              ></MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-2 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">SEO</HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Tailwind components."
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Create blogs fast."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="AI-powered RFPs."
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-2 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
