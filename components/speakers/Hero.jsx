import React from 'react'
import AppButton from './AppButton'
import { HeroAvatarMale, HeroAvatarFemale, HeroAvatarFemale2 } from '../svgs'
import { Button } from '../ui/Button'

const Hero = () => {
  return (
    <section className="flex items-center justify-center text-white text-center">
      <div className='flex flex-col items-center justify-center gap-6 w-11/12 m-auto max-w-6xl pb-11 md:py-10'>
          <div className='w-11/12 md:w-4/5'>
            <div className='flex flex-col md:flex-row items-center justify-center py-8 text-5xl md:my-10'>
              <HeroAvatarFemale className='w-14 h-14 md:w-24 md:h-24 self-end' />
              <h3 className='drop-shadow-2xl font-bold leading-snug text-center'>
                <span className='text-yellow'>Seasoned speakers </span>
                sharing industry expertise
                <span className='text-yellow'>.</span>
              </h3>
              <HeroAvatarMale className='w-14 h-14 md:w-24 md:h-24 self-start' />
            </div>
            <div className='my-2'>
              <p className='text-lg font-semibold w-4/5 mx-auto my-5'>We have selected the best to bring you amazing talks in this year&apos;s <br /> Fest. Brace up for a premium experience.</p>
              <AppButton>Get your ticket</AppButton>
            </div>
          </div>
          <HeroAvatarFemale2 className='w-14 h-14 md:w-18 md:h-18' />
      </div>
    </section>
  )
}

export default Hero