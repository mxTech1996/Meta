'use client';
import React from 'react';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import { ProductSection } from 'ecommerce-mxtech';
import { dataSite } from '@/data';

export default function MoreInformation() {
  return (
    <main className='relative'>
      <Navbar />
      <div id='courses' className='px-6 py-20 max-w-7xl mx-auto'>
        {dataSite.products.length > 1 && (
          <ProductSection
            withCategoryFilter={false}
            title='All Courses'
            gridColumns={2}
            variant='grid'
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
      </div>
      <Footer />
    </main>
  );
}
