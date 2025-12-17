import React from 'react'
import Images from './Images'
import { Link } from 'react-router-dom'

const FeaturedPost = () => {
  return (
    <div className='mt-8 flex flex-col lg:flex-row gap-8'>
        <div className='w-full lg:w-1/2 flex flex-col gap-4'>
            <Images src="https://ik.imagekit.io/o31ofkqc7/featured1.jpeg?updatedAt=1764430405014" className="rounded-3xl object-cover"  w="895"  />
            <div className='flex items-center gap-4'>
                <h1 className='font-semibold lg:text-lg'>01.</h1>
                <Link to="" className='text-blue-800 lg:text-lg'>Web design</Link>
                <span className='text-gray-500'>Two days ago</span>
            </div>
            <Link to="/test" className='text-lg lg:text-3xl font-semibold lg:font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Link>
        </div>
        <div className='w-full lg:w-1/2 flex flex-col gap-4'> 
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <div className='w-1/3 aspect-video'> 
                    <Images src="https://ik.imagekit.io/o31ofkqc7/featured2.jpeg?updatedAt=1764430404566" className="rounded-3xl object-cover w-full h-full"  w='298' />
                </div>
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>02.</h1>
                        <Link to="" className='text-blue-800'>Web design</Link>
                        <span className='text-gray-500 text-sm'>2 days ago</span>
                    </div>
                    <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl  xl:text-2xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                </div>
            </div>
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <div className='w-1/3 aspect-video'> 
                    <Images src="https://ik.imagekit.io/o31ofkqc7/featured2.jpeg?updatedAt=1764430404566" className="rounded-3xl object-cover w-full h-full"  w='298' />
                </div>
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>02.</h1>
                        <Link to="" className='text-blue-800'>Web design</Link>
                        <span className='text-gray-500 text-sm'>2 days ago</span>
                    </div>
                    <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl  xl:text-2xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                </div>
            </div>
            <div className='lg:h-1/3 flex justify-between gap-4'>
                <div className='w-1/3 aspect-video'> 
                    <Images src="https://ik.imagekit.io/o31ofkqc7/featured2.jpeg?updatedAt=1764430404566" className="rounded-3xl object-cover w-full h-full"  w='298' />
                </div>
                <div className='w-2/3'>
                    <div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
                        <h1 className='font-semibold'>02.</h1>
                        <Link to="" className='text-blue-800'>Web design</Link>
                        <span className='text-gray-500 text-sm'>2 days ago</span>
                    </div>
                    <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl  xl:text-2xl font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedPost