import React from 'react'
import Divider from '../svgs/Divider'
import SpeakerCard from './SpeakerCard'
import speakerData from '@/data/speakerdata'

const SpeakersList = () => {

  return (
    <section className='bg-page-white py-6'>
      <div className='w-11/12 max-w-6xl m-auto'>
        <div className='text-center my-6'>
          <h4 className='font-bold text-2xl lg:text-3xl mb-3'>Meet Our Speakers</h4>
          <p className='text-xs lg:text-sm font-medium'>Trailblazing Experts. Inspiring Voices Leading the Health-Tech Revolution.</p>
        </div>
        <div className="md:px-32">
          <Divider className='text-sm w-full' />
          { speakerData.map(speaker => (
            <SpeakerCard 
              key={speaker.id}
              image={speaker.image}
              title={speaker.title}
              speaker={speaker.speaker}
              role={speaker.role}
            />
          
          )) }
        </div>
      </div>
    </section>
  )
}

export default SpeakersList