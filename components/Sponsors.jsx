import React from 'react'
import Image from 'next/image'
import SponsorCard from './speakers/SponsorCard'
import { MLSAUnilagLogo } from './svgs'
import sponsorList from '@/data/sponsorsdata'

const Sponsors = () => {
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
          {/* When the Sponsors details is ready, comment out the "coming soon" and use this */}
          <div>
            {/* <div className="flex flex-wrap items-center gap-4">
            {sponsorList.map(sponsor => (
              <SponsorCard 
                key={sponsor.id} 
                logo={sponsor.logo}
              />
            ))}
          </div> */}
            <div className="flex flex-row items-end my-20 gp-4 text-center justify-center">
              <p className="text-6xl text-white font-extrabold">COMING SOON</p>
              <p className="text-yellow font-extrabold text-6xl">!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sponsors