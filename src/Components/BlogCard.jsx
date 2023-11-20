import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ coverImage, title, url, publishedDate, brief }) => {
  return (
    <article className='blog-section-two w-96 shadow rounded-lg bg-white overflow-hidden pb-4'>
      <img src={coverImage} alt='' className='w-full' />
      <section className='px-4 my-4'>
        <h4 className='font-bold text-xl text-left mb-3'>{title}</h4>
        <p>{brief.slice(0, 120)}...</p>
      </section>
      <div className=' gap-40 flex items-center px-4'>
        <p className='text-sm font-medium'>{publishedDate}</p>
        <Link
          to={url}
          className='text-primary font-bold flex items-center gap-2'
        >
          <span>Read More</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25'
            />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
