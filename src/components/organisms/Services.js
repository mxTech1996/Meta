'use client';

import { dataSite } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className='px-6 py-20 max-w-7xl mx-auto'>
      <h2 className='text-3xl font-bold text-center mb-12'>Our Services</h2>

      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8'>
        {dataSite.services.slice(0, 3).map((project) => (
          <div key={project.id}>
            <div className='overflow-hidden rounded-lg'>
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className='w-full h-60 object-cover hover:scale-105 transition-transform duration-300'
              />
            </div>
            <h3 className='font-semibold text-lg mt-4'>{project.title}</h3>
            <p className='text-sm text-gray-600'>{project.description}</p>
          </div>
        ))}
      </div>

      <div className='flex justify-center mt-10'>
        <Link href='/services'>
          <button className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition text-sm'>
            All Services ({dataSite.services.length})
          </button>
        </Link>
      </div>
    </section>
  );
}
