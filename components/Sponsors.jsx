import React from 'react'
import Image from 'next/image'
import SponsorCard from './speakers/SponsorCard'
// import { MLSAUnilagLogo } from './svgs'
import MLSAUnilagLogo from './svgs/MLSAUnilagLogo'

const Sponsors = () => {
  const sponsorList = [
    {
      id: 1,
      logo: '/Images/nithub.png'
    },
    {
      id: 2,
      logo: '/Images/unilag.png'
    },
    {
      id: 3,
      logo: '/Images/nithub.png'
    },
    {
      id: 4,
      logo: '/Images/unilag.png'
    },
    {
      id: 5,
      logo: '/Images/nithub.png'
    },
    {
      id: 6,
      logo: '/Images/unilag.png'
    },
    {
      id: 7,
      logo: '/Images/nithub.png'
    },
    {
      id: 8,
      logo: '/Images/unilag.png'
    },
    {
      id: 9,
      logo: '/Images/nithub.png'
    },
    {
      id: 10,
      logo: '/Images/unilag.png'
    },
  ]

  return (
    <section className="py-8">
      <div>
        <div className="border border-[#617b97] rounded-lg flex flex-col sm:flex-row items-center w-3/5 m-auto px-4 py-6 my-6">
          <h5 className="font-semibold text-white text-center flex-1 tracking-widest mb-3">POWERED BY</h5>
          <MLSAUnilagLogo className="flex-1 " />
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