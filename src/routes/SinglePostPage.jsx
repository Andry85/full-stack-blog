import React from 'react';
import Images from '../components/Images';
import { Link } from 'react-router-dom'
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';


const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      <div className='flex gap-8'>
         <div className='lg:block w-3/5 flex flex-col gap-8'>
            <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5 font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </h1> 
            <div className='flex items-center gap-2 text-gray-400 text-sm'>
              <span>Written by</span>
              <Link className='text-blue-800'>John Doe</Link>
              <span>on</span>
              <Link className='text-blue-800'>Web design</Link>
              <span>2 days ago</span> 
            </div>
            <p className='text-gray-500 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quam unde animi excepturi modi fuga blanditiis soluta molestias maiores explicabo, beatae nemo autem alias saepe ratione aliquid. Magnam, earum aperiam.</p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <Images src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>
      <div className='flex flex-col md:flex-row gap-8'>
          <div className='lg:text-lg flex flex-col gap-6 text-justify'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, asperiores quasi, quia odit saepe sunt ratione consequatur maiores dolorum tempore est voluptatem voluptatum distinctio repellendus cum! Impedit, earum fugiat. Vitae?</p>
          </div>
          <div className='px-4 h-max sticky top-8'>
            <h1 className='mb-4 text-sm font-medium'>Author</h1>
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-8'>
                <Images src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48" />
                <Link>John Doe</Link>
              </div>
              <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
              <div className='flex gap-2'>
                <Link>
                  <Images src="facebook.svg"/>
                </Link>
                <Link>
                  <Images src="instagram.svg"/>
                </Link>
              </div>
            </div>
            <PostMenuActions/>
            <h1 className='mt-8 mb-4 text-sm font-medium'>Categories</h1>
            <div className='flex flex-col gap-2 text-sm'>
              <Link className='underline'>All</Link>
              <Link to="/post?cat=web-design">Web Design</Link>
              <Link to="/post?cat=development">Development</Link>
              <Link to="/post?cat=web-design">Databases</Link>
              <Link to="/post?cat=web-design">Search Engines</Link>
              <Link to="/post?cat=web-design">Marketing</Link>
            </div>
            <h1 className='mt-8 mb-4 text-sm font-medium'>Search</h1>
            <Search/>
          </div>
      </div>
    </div>
  )
}

export default SinglePostPage