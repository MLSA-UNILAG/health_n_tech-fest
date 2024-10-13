import React from 'react'
import Image from 'next/image'
import Dot from '../svgs/Dot'

const SpeakerCard = ({ image, title, speaker, role }) => {
  return (
    <div className='flex gap-3 md:gap-7 md:px-8 my-8 items-center border-black'>
      <Image 
        src={image}
        alt='Speaker image'
        width={140}
        height={160}
        className='border-l border-t border-r-2 border-b-3 border-primary-color rounded-3xl'
      />
      <div className="text-center">
        <h2 className='font-semibold md:text-xl lg:text-3xl'>{title}</h2>
        <div className='flex flex-col items-center md:flex-row gap-1 lg:gap-4 border border-primary-color rounded-full px-4 py-1 my-3'>
          <h5 className='font-semibold lg:text-xl'>{speaker}</h5>
          {/* <Image
            src={'/icons/dot.svg'}
            alt='Blue dot'
            width={5}
            height={5}
            className="hidden md:block"
          /> */}
          <Dot className="border hidden md:block" />
          <p className='text-sm lg:text-lg'>{role}</p>
        </div>
      </div>
    </div>
  )
}

export default SpeakerCard