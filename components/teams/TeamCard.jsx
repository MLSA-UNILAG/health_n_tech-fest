import React from 'react'
import Image from 'next/image'

const TeamCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
       <Image 
        src={'/images/speaker.png'}
        alt='Speaker image'
        width={180}
        height={200}
        className='border-l border-t border-r-2 border-b-3 border-primary-color rounded-3xl'
      />
      <div className="font-medium text-center">
        <h4 className="">{name}</h4>
        <p className="text-[#656565]">{role}</p>
      </div>
    </div>
  )
}

export default TeamCard