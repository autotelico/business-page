'use client';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { CiMenuBurger } from 'react-icons/ci';

export default function Navbar(): JSX.Element {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = (): void => {
    setNav(!nav);
  };

  return (
    <div
      id="navbar"
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"
    >
      <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Lake.</h1>
      <ul className="hidden md:flex cursor-pointer">
        <li className="p-4 hover:bg-slate-500 duration-300">Home</li>
        <li className="p-4 hover:bg-slate-500 duration-300">Company</li>
        <li className="p-4 hover:bg-slate-500 duration-300">Resources</li>
        <li className="p-4 hover:bg-slate-500 duration-300">About</li>
        <li className="p-4 hover:bg-slate-500 duration-300">Contact</li>
      </ul>
      <div onClick={handleNav} className="md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? 'fixed left-[-100%] ease-in-out duration-500 top-0'
            : 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Lake.</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}
