'use client';
import React from 'react';
import Image from 'next/image';
import { dataSite } from '@/data';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section
      className='py-20 px-6 relative overflow-hidden'
      style={{
        background:
          'radial-gradient(circle at 50% 30%, #dbeafe, #ccfbf1, #fde68a)',
      }}
    >
      <div className='max-w-7xl mx-auto text-center'>
        {/* Top Buttons */}
        <div className='flex flex-wrap justify-center gap-3 mb-6'>
          <Link href='#know-us'>
            <button className='bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow hover:opacity-90 transition'>
              What’s new?
            </button>
          </Link>

          <Link href='#courses'>
            <button className='bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow hover:opacity-90 transition flex items-center gap-1'>
              Learn more <span>→</span>
            </button>
          </Link>
        </div>

        {/* Title */}
        <h1 className='text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 max-w-4xl mx-auto leading-tight'>
          {dataSite.subtitle}
        </h1>

        {/* Subtitle */}
        <p className='text-lg text-gray-700 max-w-2xl mx-auto mb-8'>
          {dataSite.description}
        </p>

        {/* CTA Buttons */}
        <div className='flex justify-center gap-4 mb-10 flex-wrap'>
          <Link href='/services'>
            <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition'>
              Our Services
            </button>
          </Link>
          <Link href='/more-information'>
            <button className='bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-full transition border border-gray-300'>
              Contact Us
            </button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className='mt-10 rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto'>
          <Image
            src={dataSite.image_hero}
            alt='Consulting team presentation'
            width={1200}
            height={600}
            className='w-full object-cover h-auto'
            priority
          />
        </div>
      </div>
    </section>
  );
}
