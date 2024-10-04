import React from 'react'
import { Divider } from "../svgs"
import SpeakerCard from './SpeakerCard'
import speakerData from '@/data/speakerdata'

const SpeakersList = () => {

  return (
    <section className='bg-page-white'>
      <div className='w-11/12 m-auto border'>
        <div className='text-center my-6'>
          <h4 className='font-bold text-2xl lg:text-3xl mb-3'>Meet Our Speakers</h4>
          <p className='text-xs lg:text-sm font-medium'>Trailblazing Experts. Inspiring Voices Leading the Health-Tech Revolution.</p>
        </div>
        <Divider className='text-sm w-full' />
        {/* When the Speakers details is ready, comment out the "coming soon" and use this */}

        {/* <div className="md:px-32">
          { speakerData.map(speaker => (
            <SpeakerCard 
              key={speaker.id}
              image={speaker.image}
              title={speaker.title}
              speaker={speaker.speaker}
              role={speaker.role}
            />
          
          )) }
        </div> */}
        <div className="flex flex-row items-end py-20 mb-5 gp-4 text-center justify-center bg-primary">
          <p className="text-6xl text-white font-extrabold">COMING SOON</p>
          <p className="text-yellow font-extrabold text-6xl">!</p>
        </div>
      </div>
    </section>
  )
}

export default SpeakersList