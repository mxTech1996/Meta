'use client';
import { FaHardHat, FaDraftingCompass, FaTools } from 'react-icons/fa';

export default function WhatWeDoSection() {
  const features = [
    {
      icon: <FaHardHat className='text-2xl text-blue-500' />,
      title: 'Construction Site Management',
      description:
        'Learn the practical aspects of managing large-scale construction sites, from logistics and planning to safety regulations.',
    },
    {
      icon: <FaDraftingCompass className='text-2xl text-blue-500' />,
      title: 'Civil Design & Blueprint Reading',
      description:
        'Master the interpretation of engineering drawings and develop accurate civil works using modern design tools.',
    },
    {
      icon: <FaTools className='text-2xl text-blue-500' />,
      title: 'Heavy Equipment Operations',
      description:
        'Understand how to safely operate and coordinate heavy machinery like excavators, bulldozers, and concrete pumps.',
    },
  ];

  return (
    <section className='bg-white py-20 px-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <p className='text-green-600 font-semibold mb-2'>What We Do</p>
        <h2 className='text-3xl font-bold mb-12'>
          Specialized Courses in Civil & Heavy Construction
        </h2>

        <div className='grid md:grid-cols-3 gap-8 text-left'>
          {features.map((item, index) => (
            <div
              key={index}
              className='border border-gray-200 rounded-xl p-6 hover:shadow-md transition'
            >
              <div className='mb-4'>{item.icon}</div>
              <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
              <p className='text-gray-600 mb-4'>{item.description}</p>
              <a
                href='#'
                className='text-sm font-semibold text-black hover:text-blue-500 flex items-center gap-1'
              >
                {/* View More <span>→</span> */}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
