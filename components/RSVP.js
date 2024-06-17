import React from 'react'
import AppButton from './speakers/AppButton'
import { RSVPAvatarFemale, RSVPAvatarMale } from './svgs'

const RSVP = () => {
  return (
    <section className="bg-[#243963]">
      <div className="text-white text-center py-8 w-11/12 max-w-6xl m-auto relative">
        <p className="text-sm font-medium">We are looking forward to <br />hosting you at the</p>
        <h2 className="text-4xl md:text-5xl my-6">
        <div className="relative h-16">
            <p className="absolute inset-0 z-10 italic font-medium">Health-n-Tech Fest</p>
            <p className="absolute inset-0 ml-1 mt-1 text-stroke text-[#303b6e] z-0 italic font-medium">Health-n-Tech Fest</p>
          </div>
          Lagos 2024<span className="text-[#faa944]">.</span>
        </h2>
        <RSVPAvatarMale className="text-5xl md:text-5xl lg:text-6xl absolute right-0 top-0" />
        <RSVPAvatarFemale className="text-5xl md:text-5xl lg:text-6xl absolute left-0 bottom-1/4" />
        <p>Will you be there?</p>
        <AppButton>I will be there no matter what</AppButton>
        <p className="mt-6">Empowering health, bridging gaps...</p>
      </div>
    </section>
  )
}

export default RSVP