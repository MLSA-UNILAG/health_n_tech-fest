import React from 'react'
import Image from 'next/image'

const SponsorCard = ({ logo }) => {
  return (
    <div className="flex items-center justify-center w-1/6">
      <Image
        src={logo}
        alt='Sponsor logo'
        width={130}
        height={130}
      />
    </div>
  )
}

export default SponsorCard