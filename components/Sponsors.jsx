import React from 'react'
import Image from 'next/image'
import SponsorCard from './speakers/SponsorCard'
import { MLSAUnilagLogo } from './svgs'

const Sponsors = () => {
  const sponsorList = [
    {
      id: 1,
      logo: '/images/nithub.png'
    },
    {
      id: 2,
      logo: '/images/unilag.png'
    },
    {
      id: 3,
      logo: '/images/nithub.png'
    },
    {
      id: 4,
      logo: '/images/unilag.png'
    },
    {
      id: 5,
      logo: '/images/nithub.png'
    },
    {
      id: 6,
      logo: '/images/unilag.png'
    },
    {
      id: 7,
      logo: '/images/nithub.png'
    },
    {
      id: 8,
      logo: '/images/unilag.png'
    },
    {
      id: 9,
      logo: '/images/nithub.png'
    },
    {
      id: 10,
      logo: '/images/unilag.png'
    },
  ]

  return (
    <section className="py-8">
      <div>
        <div className="border border-[#617b97] rounded-lg flex flex-col md:flex-row items-center w-3/5 m-auto px-4 py-6 my-6">
          <h5 className="font-semibold text-white text-center flex-1 tracking-widest">POWERED BY</h5>
          {/* <Image
            src={'/images/mlsa-logo.png'}
            alt='MLSA Unilag logo'
            width={50}
            height={50}
            className="flex-1"
          /> */}
          <MLSAUnilagLogo className="flex-1 text-10xl md:text-9xl" />
        </div>
        <div className="border border-[#617b97] rounded-lg flex flex-col items-center gap-8 w-4/5 m-auto px-6 py-6 my-6">
          <h5 className="font-semibold text-white text-center tracking-widest">OUR HEADLINE SPONSORS</h5>
          <div className="flex flex-wrap items-center gap-4">
            {sponsorList.map(sponsor => (
              <SponsorCard 
                key={sponsor.id} 
                logo={sponsor.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors