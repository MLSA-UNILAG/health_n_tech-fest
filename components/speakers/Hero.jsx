import React from 'react'
import AppButton from './AppButton'
// import { HeroAvatarMale } from '../svgs'
import HeroAvatarMale from '../svgs/HeroAvatarMale'
import HeroAvatarFemale from '../svgs/HeroAvatarFemale'
import HeroAvatarFemale2 from '../svgs/HeroAvatarFemale2'

const Hero = () => {
  return (
    <section className="flex items-center justify-center text-white text-center">
      <div className='flex flex-col items-center justify-center w-11/12 m-auto max-w-6xl pt-4 pb-16 md:py-14'>
          <div className='w-11/12 lg:w-4/5 my-6 relative'>
            <div className='flex flex-col md:flex-row items-center justify-center text-4xl md:text-5xl md:my-10'>
              <HeroAvatarFemale className='absolute top-0 right-0 w-14 h-14 md:w-20 md:h-20' />
              <HeroAvatarMale className='absolute bottom-1/2 left-0 translate-y-0 w-14 h-14 md:w-20 md:h-20' />
              <h3 className='drop-shadow-2xl font-bold my-4 leading-relaxed text-center'>
                <span className='text-yellow'>Seasoned speakers </span>
                sharing <br />industry expertise
                <span className='text-yellow'>.</span>
              </h3>
            </div>
            <div className='my-2'>
              <p className='text-lg font-semibold w-4/5 m-auto'>We have selected the best to bring you amazing talks in this year&apos; Fest. Brace up for a premium experience.</p>
              <AppButton>Get your ticket</AppButton>
            </div>
          </div>
          <HeroAvatarFemale2 className='w-14 h-14 md:w-20 md:h-20' />
      </div>
    </section>
  )
}

export default Hero