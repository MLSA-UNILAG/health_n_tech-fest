import React from 'react'
import AppButton from './speakers/AppButton'
import { Button } from './ui/Button'

const EventTicket = () => {
  return (
    <div className='bg-[#244a80] text-white text-left rounded-2xl border-r-2 border-b-2 border-white p-7 flex flex-col gap-3'>
      <p className='text-sm text-[#bdbdbd]'>📌 Mark the date...</p>
      <p>SATURDAY</p>
      <h2 className='text-3xl font-bold'>JULY 6th</h2>
      <h5>2024</h5>
      <p className='text-sm text-[#bdbdbd]'>We will be pioneering history, with you</p>
      <AppButton link='https://forms.office.com/r/8d1hxssB26'>Get your ticket</AppButton>
      {/* <div className='w-[100%] flex items-center'>
        <Button className="w-full" text="Get your Ticket" link="https://forms.office.com/r/8d1hxssB26" />
      </div> */}
    </div>
  )
}

export default EventTicket