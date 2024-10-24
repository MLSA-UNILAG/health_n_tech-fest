import React from 'react'
import AppButton from './speakers/AppButton'
import { RSVPAvatarFemale, RSVPAvatarMale } from './svgs'
import Image from 'next/image';
import { MeshGradient } from "@/public/Icons/MeshGradient";

const RSVP = () => {
  return (
    <section className="relative">
      <div className="text-white text-center py-8 w-11/12 max-w-6xl m-auto relative">
        <p className="text-sm font-medium">We are looking forward to <br />hosting you at the</p>
        <h2 className="text-4xl md:text-5xl my-6">
          <div className="relative h-16 my-4 md:my-0">
            <p className="absolute inset-0 z-10 italic font-medium">Health-n-Tech Fest</p>
            <p className="absolute inset-0 ml-1 mt-1 text-stroke text-[#303b6e] z-0 italic font-medium">Health-n-Tech Fest</p>
          </div>
          Lagos 2024<span className="text-[#faa944]">.</span>
        </h2>
        <RSVPAvatarMale className="text-5xl w-[15%] md:w-fit md:text-5xl lg:text-6xl absolute right-0 top-0" />
        <RSVPAvatarFemale className="text-5xl w-[15%] md:w-fit md:text-5xl lg:text-6xl absolute left-0 bottom-1/3" />
        <p className='pb-2'>Will you be there?</p>
        <AppButton>I will be there no matter what</AppButton>
        <p className="mt-6">Empowering health, bridging gaps...</p>
      </div>
      <div className="absolute top-0 -z-10 bottom-0">
        {/* <MeshGradient /> */}
        {/* <Image
          src={'/images/meshgradient.png'}
          alt='Mesh gradient background'
          width={200}
          height={200}
        /> */}
      </div>
    </section>
  )
}

export default RSVP