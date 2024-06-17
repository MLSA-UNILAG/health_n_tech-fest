import React from 'react'
import AppButton from '../speakers/AppButton'
import { TeamHeroAvatarMale, TeamHeroAvatarFemale } from '../svgs';

const Hero = () => {
  return (
    <section className="flex items-center justify-center text-white text-center h-[85vh] md:h-[60vh]">
      <div className='flex items-center justify-center w-11/12 m-auto max-w-6xl py-16 md:py-14 relative'>
          <div className='w-4/5'>
            <TeamHeroAvatarMale className='text-6xl absolute right-0 top-0' />
            <TeamHeroAvatarFemale className='text-6xl absolute left-0 bottom-1/2 translate-y-1/2' />
            <div className='text-5xl mb-10'>
              <h3 className='drop-shadow-2xl font-bold'>
              <span className='text-yellow'>Without them</span>
                  , there would <br />be no event or fest
                  <span className='text-yellow'>.</span>
              </h3>
            </div>
            <div>
              <p className='text-base font-semibold'>Meet the dedicated team working tirelessly behind the scenes to bring you an unforgettable experience. Their passion and commitment make it all possible.</p>
              <AppButton>Reserve your Seat</AppButton>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero