'use client';
import { dataSite } from '@/data';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

export default function CoreValuesSection() {
  return (
    <section id='know-us' className='bg-[#111827] text-white py-20 px-6'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center'>
        {/* Left: Image + Metric */}
        <div className='relative'>
          <Image
            src={dataSite.image_hero2}
            alt='Engineers on site'
            width={600}
            height={400}
            className='rounded-lg'
          />
          {/* <div className='absolute bottom-[-40px] left-10 bg-white text-center text-black shadow-lg p-6 rounded-xl w-48'>
            <div className='text-2xl font-bold text-blue-600 mb-1'>10+</div>
            <p className='text-sm font-medium'>Certified trainees</p>
          </div> */}
        </div>

        {/* Right: Core Values */}
        <div>
          <p className='text-sm text-gray-400 mb-2'>Our Core Values</p>
          <h2 className='text-3xl font-bold mb-6 leading-tight'>
            At the core of every course are the values that guide us
          </h2>
          <hr className='border-gray-600 mb-6' />

          <ul className='space-y-6'>
            <li>
              <div className='flex items-start gap-3'>
                <FaCheckCircle className='text-blue-500 mt-1' />
                <div>
                  <h4 className='font-semibold text-white mb-1'>
                    Hands-On Approach
                  </h4>
                  <p className='text-gray-400 text-sm'>
                    We focus on real-world execution of heavy construction
                    projects, blending theory with on-site experience.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className='flex items-start gap-3'>
                <FaCheckCircle className='text-blue-500 mt-1' />
                <div>
                  <h4 className='font-semibold text-white mb-1'>
                    Team Collaboration
                  </h4>
                  <p className='text-gray-400 text-sm'>
                    We promote teamwork in large-scale projects, from technical
                    planning to heavy machinery operations.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className='flex items-start gap-3'>
                <FaCheckCircle className='text-blue-500 mt-1' />
                <div>
                  <h4 className='font-semibold text-white mb-1'>
                    Commitment to Safety
                  </h4>
                  <p className='text-gray-400 text-sm'>
                    We teach international standards for industrial safety to
                    ensure efficient and secure work environments.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
