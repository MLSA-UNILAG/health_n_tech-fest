import React from 'react'
import { Button } from '@/material/ui'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

const AppButton = ({ children, link }) => {
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
      <Button className='bg-gradient-to-r from-[#1976bc] to-[#1a98f9] border-0 inline-flex flex-row items-center justify-center  normal-case text-sm'>
        <a target="_blank" rel="noopener noreferrer" href={link} className=' flex flex-row gap-2'>
          <h1>{children}</h1>
          <Image
            src={'/Icons/arrow-right.svg'}
            alt='Question mark icon'
            width={20}
            height={20}
          />
        </a>
      </Button>
    </>
  )
}

export default AppButton