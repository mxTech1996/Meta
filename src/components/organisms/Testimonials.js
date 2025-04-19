'use client';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { dataSite } from '@/data';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = dataSite.references;
  const prev = () => {
    setCurrentIndex(
      (currentIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section id='testimonials' className='bg-white py-20 px-6'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-3 gap-10 items-center'>
        {/* Left Text & Controls */}
        <div className='md:col-span-1'>
          <p className='text-green-600 text-sm font-medium mb-2'>
            Testimonials
          </p>
          <h2 className='text-3xl font-bold mb-8'>Hear from our trainees</h2>
          <div className='flex gap-4'>
            <button
              onClick={prev}
              className='w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition'
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={next}
              className='w-10 h-10 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition'
            >
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className='md:col-span-2 grid md:grid-cols-2 gap-6'>
          {visibleTestimonials.map((t, idx) => (
            <div
              key={idx}
              className='border border-gray-200 p-6 rounded-xl shadow-sm'
            >
              <div className='flex text-yellow-500 mb-3'>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className='text-gray-700 italic mb-6'>
                &quot;{t.description}&quot;
              </p>
              <div className='flex items-center gap-3'>
                {/* <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className='rounded-full object-cover'
                /> */}
                <span className='font-semibold text-gray-900'>{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
