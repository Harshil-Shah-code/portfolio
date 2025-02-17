import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ src, title, darkInvert }) => {
  return (
    <div className='mt-3'>
      <Link 
        href="#" 
        className="flex flex-col items-center justify-center w-[150px] h-[150px] p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <Image 
          src={src} 
          alt='next-js logo' 
          className={darkInvert ? 'dark:invert' : ''} 
          width={80} 
          height={80} 
        />
        <p className="font-normal text-gray-700 dark:text-gray-400 mt-3">{title}</p>
      </Link>
    </div>
  )
}

export default Card;
