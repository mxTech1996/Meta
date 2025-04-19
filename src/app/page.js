'use client';
import CivilCoursesSection from '@/components/organisms/Civil';
import CoreValuesSection from '@/components/organisms/CoreValues';
import Footer from '@/components/organisms/Footer';
import HeroSection from '@/components/organisms/Hero';
import Navbar from '@/components/organisms/Navbar';
import ServicesSection from '@/components/organisms/Services';
import TestimonialsSection from '@/components/organisms/Testimonials';
import WhatWeDoSection from '@/components/organisms/WhatCanDo';
import { dataSite } from '@/data';
import { ProductSection } from 'ecommerce-mxtech';
import Link from 'next/link';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#fff',
      }}
    >
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <div id='courses' className='px-6 py-20 max-w-7xl mx-auto'>
        {dataSite.products.length > 1 && (
          <ProductSection
            withCategoryFilter={false}
            title='All Courses'
            gridColumns={2}
            variant='carousel'
            productItemVariant='vertical'
            onClickImage={(id) => {
              router.push(`/product/${id}`);
            }}
            productVersion='1'
            carouselOptions={{
              arrowColor: 'black',
              fade: true,
              autoPlay: false,
              direction: 'horizontal',
            }}
            backgroundItemColor='#FBFBFB'
            stylesItem={{
              borderRadius: 12,
            }}
          />
        )}
        <div className='flex justify-center mt-10'>
          <Link href='/courses'>
            <button className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition text-sm'>
              All Courses ({dataSite.products.length})
            </button>
          </Link>
        </div>
      </div>
      <CivilCoursesSection />
      <CoreValuesSection />
      <TestimonialsSection />
      <section className='bg-gradient-to-r from-[#347DFF] via-[#5FAEFF] to-[#88D1C6] relative overflow-hidden py-16 px-6'>
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-700/10 to-transparent pointer-events-none' />
        <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10'>
          {/* Left text */}
          <h2 className='text-white text-3xl font-bold mb-6 md:mb-0 md:text-4xl'>
            Get started
            <br className='hidden md:block' /> toward success.
          </h2>

          {/* Call to action */}
          <Link href='/more-information'>
            <button className='bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition'>
              Let’s Get In Touch
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
