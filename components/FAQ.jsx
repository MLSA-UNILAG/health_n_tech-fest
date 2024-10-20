"use client";

import React, { useState } from 'react'
import FAQCard from './FAQCard'
import { FAQAvatarMale, FAQAvatarFemale, Divider } from './svgs'

const FAQ = ({ faqs }) => {
  const [openStates, setOpenStates] = useState(faqs.map((faq, index) => (index === 0 ? true : false)))

  const handleToggle = (index) => {
    setOpenStates(prevState => prevState.map((state, i) => i === index ? !state : state))
  }

  return (
    <section className='text-white py-16'>
      <div className="text-center w-11/12 max-w-6xl m-auto">
        <div className='my-6 relative px-8 md:px-20 mb-10'>
          <h4 className='font-bold text-lg smtext-xl text-[#50e6ff] mb-2'>OUR MOST ASKED QUESTIONS</h4>
          <p className='text-[16px] md:text-2xl font-light'>Answers at Your Fingertips. Get Clarity on Common Questions.</p>
          <FAQAvatarMale className='text-6xl w-[15%] md:w-fit absolute right-0 top-0' />
          <FAQAvatarFemale className='text-6xl w-[15%] md:w-fit absolute left-0 bottom-0' />
        </div>
        {/* <hr className='border-[#586983]' /> */}
        <Divider className='w-full' />
        <div className='text-left'>
          {faqs.map((faq, index) => (
            <FAQCard
              key={faq.id} 
              title={faq.title} 
              text={faq.text}
              isOpen={openStates[index]}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
        
      </div>
    </section>
  )
}

export default FAQ