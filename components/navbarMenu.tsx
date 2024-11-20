import Link from "next/link";
import React from "react";
import custodia from "../public/assets/custodia.svg";
import NavbarButton from "./navButton";


const NavbarMenu = ({ handleToggle }: any) => {
  return (
    <div className="px-5 pt-5 h-screen">
      <div className="flex justify-between">
        <Link href="/">
          <img
            src={custodia.src}
            className="mr-3  self-center"
            alt="Custodia Logo"
          />
        </Link>

        <button
          data-collapse-toggle="navbar-solid-bg"
          type="button"
          className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden"
          aria-controls="navbar-solid-bg"
          onClick={handleToggle}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul className="pt-11">
        <li className="mb-7">
          <Link
            href="/healthcare-providers"
            className="block text-sm font-medium"
          >
            <p className="text-[#002A47]">For healthcare providers</p>
          </Link>
        </li>
        <li className="mb-7">
          <Link href="/pricing" className="block text-sm font-medium">
            <p className="text-[#002A47]">Pricing</p>
          </Link>
        </li>
        <li className="mb-7">
          <Link href="/blog" className="block text-sm font-medium">
            <p className="text-[#002A47]">Blog</p>
          </Link>
        </li>
        <li className="mb-9">
          <Link href="/research" className="block text-sm font-medium">
            <p className="text-[#002A47]">Research</p>
          </Link>
        </li>
        <li>
          <Link href="/sign-up">
          <NavbarButton href="/sign-up" title="Get started" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarMenu;
