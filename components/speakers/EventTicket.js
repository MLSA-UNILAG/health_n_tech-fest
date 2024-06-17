import React from 'react'
import AppButton from './AppButton'

const EventTicket = () => {
  return (
    <div className='bg-[#244a80] text-white text-left rounded-2xl border-r-2 border-b-2 border-white p-7 flex flex-col gap-3'>
        <p className='text-sm text-[#bdbdbd]'>📌 Mark the date...</p>
        <p>SATURDAY</p>
        <h2 className='text-3xl font-bold'>JULY 6th</h2>
        <h5>2024</h5>
        <p className='text-sm text-[#bdbdbd]'>We will be pioneering history, with you</p>
        <AppButton>Get your ticket</AppButton>
    </div>
  )
}

export default EventTicket