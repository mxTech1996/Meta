'use client';

import { dataSite } from '@/data';
import Image from 'next/image';
import {
  FaHardHat,
  FaChalkboardTeacher,
  FaTools,
  FaShieldAlt,
} from 'react-icons/fa';

export default function CivilCoursesSection() {
  return (
    <section className='bg-white py-20 px-6 max-w-7xl mx-auto'>
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        {/* Left Text Content */}
        <div>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Build your future through structured learning
          </h2>
          <p className='text-gray-600 mb-6'>
            Our engineering construction courses are designed to equip you with
            practical knowledge in heavy-duty infrastructure development, from
            blueprint to execution. Our expert-led programs prepare you for
            field challenges while ensuring safety and quality.
          </p>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
            {/* Item 1 */}
            <div className='flex gap-4'>
              <div className='bg-blue-100 p-3 rounded-xl text-blue-600 h-12'>
                <FaChalkboardTeacher size={20} />
              </div>
              <div>
                <h4 className='font-semibold text-gray-800'>
                  Expert Instructors
                </h4>
                <p className='text-sm text-gray-600'>
                  Learn from certified engineers with years of experience in
                  large-scale civil projects.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className='flex gap-4'>
              <div className='bg-purple-100 p-3 rounded-xl text-purple-600 h-12'>
                <FaHardHat size={20} />
              </div>
              <div>
                <h4 className='font-semibold text-gray-800'>
                  Hands-On Practice
                </h4>
                <p className='text-sm text-gray-600'>
                  Gain practical exposure using real equipment and simulate
                  construction site environments.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className='flex gap-4'>
              <div className='bg-yellow-100 p-3 rounded-xl text-yellow-600 h-12'>
                <FaTools size={20} />
              </div>
              <div>
                <h4 className='font-semibold text-gray-800'>
                  Modern Facilities
                </h4>
                <p className='text-sm text-gray-600'>
                  Train in modern facilities equipped with latest construction
                  and safety technologies.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className='flex gap-4'>
              <div className='bg-green-100 p-3 rounded-xl text-green-600 h-12'>
                <FaShieldAlt size={20} />
              </div>
              <div>
                <h4 className='font-semibold text-gray-800'>Safety First</h4>
                <p className='text-sm text-gray-600'>
                  We prioritize safety protocols throughout our training to
                  ensure industry-level readiness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className='overflow-hidden rounded-xl'>
          <Image
            src={dataSite.image_hero2}
            alt='Civil Engineering Training'
            width={700}
            height={500}
            className='rounded-xl w-full h-auto object-cover'
          />
        </div>
      </div>
    </section>
  );
}
