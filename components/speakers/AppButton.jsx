import React from 'react'
import { Button } from '@/material/ui'
import Image from 'next/image'
import ArrowRight from '../svgs/ArrowRight'
import Link from 'next/link'
import clsx from 'clsx'

const AppButton = ({ children }) => {
  return (
    // <Link href='#' className='bg-[#1984d5] px-5 py-2 rounded-lg mt-5 inline-flex items-center gap-1 font-semibold'>
    //   <p className={clsx
    //     (
    //       size === 'sm' && 'text-sm',
    //       size === 'md' && 'text-md',
    //       size === 'lg' && 'text-lg'
        
    //     )}>{text}</p>
    
    // </Link>
    <>
      <Button className='bg-gradient-to-r from-[#1976bc] to-[#1a98f9] border-0 inline-flex items-center justify-center gap-2 my-4 normal-case text-sm'>
        {children}
        <ArrowRight />
      </Button>
    </>
  )
}

export default AppButton