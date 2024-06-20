"use client";

import React, { useState } from 'react'
import Image from 'next/image';

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@/material/ui";

const FAQCard = ({ title, text, isOpen, onToggle }) => {
  // const [open, setOpen] = useState(false)

  return (
    <Accordion open={isOpen} className='my-5 bg-[#224273] px-5 py-3 rounded-3xl'>
      <AccordionHeader 
        onClick={onToggle}
        className='text-white text-left hover:text-[#50e6ff] border-0'
        >
          <div className='flex justify-between gap-5 w-full'>
            <Image
              src={'/icons/question-mark.svg'}
              alt='Question mark icon'
              width={20}
              height={20}
            />
            <p className='text-lg flex-1'>{title}</p>
            <Image  
              src={isOpen ? '/icons/arrow-up.svg' : '/icons/arrow-down.svg'}
              alt='Arrow down button'
              width={20}
              height={20}
            />
          </div>
        </AccordionHeader>
      <AccordionBody className='text-white leading-6 p-0'>
        {text}
      </AccordionBody>
    </Accordion>
  )
}

export default FAQCard