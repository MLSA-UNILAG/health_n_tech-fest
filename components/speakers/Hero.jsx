import React from 'react'
import AppButton from './AppButton'
import { HeroAvatarMale, HeroAvatarFemale, HeroAvatarFemale2 } from '../svgs'

const Hero = () => {
  return (
    <section className="flex items-center justify-center text-white text-center">
      <div className='flex items-center justify-center w-11/12 m-auto max-w-6xl pt-4 pb-16 md:py-14'>
          <div className='w-11/12 lg:w-4/5'>
            <div className='flex flex-col md:flex-row text-4xl md:text-5xl md:my-10 gap-0'>
              <HeroAvatarFemale className='self-end w-14 h-14 md:w-20 md:h-20 md:hidden' />
              <HeroAvatarMale className='w-14 h-14 md:w-20 md:h-20' />
              <h3 className='drop-shadow-2xl font-bold my-4'>
                <span className='text-yellow'>Seasoned speakers </span>
                sharing <br />industry expertise
                <span className='text-yellow'>.</span>
              </h3>
              <HeroAvatarFemale className='w-14 h-14 md:w-20 md:h-20 hidden md:block' />
              <HeroAvatarFemale2 className='w-14 h-14 md:w-20 md:h-20 self-center' />
            </div>
            <div className='my-8'>
              <p className='text-base font-semibold'>We have selected the best to bring you amazing talks in this year&apos;s <br /> Fest. Brace up for a premium experience.</p>
              <AppButton>Get your ticket</AppButton>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero