'use client';
import React from 'react';
import {ReactTyped} from 'react-typed';

export default function Hero(): JSX.Element {
    const primaryColor = '#00df9a'

  return (
    <div id='hero' className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing with data analytics
        </p>
        <h2 className="md:py-6 md:text-7xl sm:text-6xl text-4xl font-bold">
          Grow with data.
        </h2>
        <div className='md:p-1'>
          <p className="inline md:text-5xl sm:text-4xl text-xl font-bold">
            Fast, flexible, financing for
          </p>
          <ReactTyped className='md:text-5xl sm:text-3xl text-xl font-semibold p-2'
            strings={['BTB', 'BCB', 'SaaS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl md:p-2 p-1 text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SaaS platforms.</p>
        <button className={`bg-[${primaryColor}] w-[200px] mx-auto rounded-md p-2 py-3 mt-2 text-black font-bold cursor-pointer`}>Get Started</button>
      </div>
    </div>
  );
}
