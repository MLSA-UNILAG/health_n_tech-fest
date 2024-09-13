import React from 'react'
import AppButton from '../speakers/AppButton'
// import { TeamHeroAvatarMale, TeamHeroAvatarFemale } from '../svgs';
import TeamHeroAvatarFemale from '../svgs/TeamHeroAvatarFemale'
import TeamHeroAvatarMale from '../svgs/TeamHeroAvatarMale'

const Hero = () => {
  return (
    <section className="flex items-center justify-center text-white text-center">
      <div className='flex items-center justify-center w-11/12 m-auto max-w-6xl pt-4 pb-16 md:py-14'>
          <div className='w-11/12 lg:w-4/5'>
            <div className='flex flex-col md:flex-row text-4xl md:text-6xl md:my-10 gap-0'>
              <TeamHeroAvatarFemale className='self-end w-14 h-14 md:w-24 md:h-24 mt-5 md:ml-5' />
              <h2 className='drop-shadow-2xl font-bold px-6 md:w-4/6 m-auto'>
                <span className='text-yellow'>Without them</span>
                    , there would <br />be no event or fest
                    <span className='text-yellow'>.</span>
              </h2>
              <TeamHeroAvatarMale className='w-14 h-14 mb-5 md:w-24 md:h-24 md:mr-5' />
            </div>
            <div>
              <p className='text-lg font-semibold my-4'>Meet the dedicated team working tirelessly behind the scenes to bring you an unforgettable experience. Their passion and commitment make it all possible.</p>
              <AppButton>Reserve your Seat</AppButton>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Hero