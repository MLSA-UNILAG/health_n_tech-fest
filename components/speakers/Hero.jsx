import React from 'react'
import AppButton from './AppButton'
import { HeroAvatarMale, HeroAvatarFemale, HeroAvatarFemale2 } from '../svgs'

const Hero = () => {
  return (
    <section className="flex items-center justify-center text-white text-center h-[85vh] md:h-[60vh]">
      <div className='flex items-center justify-center w-11/12 m-auto max-w-6xl py-16 md:py-14 relative'>
          <div className='w-4/5'>
            <HeroAvatarMale className='text-6xl absolute right-0 top-0' />
            <HeroAvatarFemale className='text-6xl absolute left-0 bottom-1/2 translate-y-1/2' />
            <HeroAvatarFemale2 className='text-6xl absolute left-1/2 bottom-0 -translate-x-1/2' />
            <div className='text-5xl mb-10'>
              <h3 className='drop-shadow-2xl font-bold'>
              <span className='text-yellow'>Seasoned speakers </span>
                  sharing <br />industry expertise
                  <span className='text-yellow'>.</span>
              </h3>
            </div>
            <div>
              <p className='text-base font-semibold'>We have selected the best to bring you amazing talks in this year&apos;s <br /> Fest. Brace up for a premium experience.</p>
              <AppButton>Get your ticket</AppButton>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero