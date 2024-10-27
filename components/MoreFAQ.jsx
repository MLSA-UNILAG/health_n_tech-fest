import React from 'react'
import Image from 'next/image'
import AppButton from './speakers/AppButton'
import { Button } from './ui/Button'

const MoreFAQ = () => {
  return (
    <section className='bg-white py-16'>
      <div className='w-11/12 m-auto flex flex-col items-center text-center gap-4'>
        <Image
          src={'/Icons/faq-avatar-grp.svg'}
          alt='FAQ avatar'
          width={200}
          height={200}
        />
        <div className='flex justify-center flex-col items-center'>
          <h3 className='font-semibold text-2xl mb-3'>Still have some questions?</h3>
          <p className='text-[#7c7c7c] mb-4'>Can&apos;t find the answer you&apos;re looking for? <br />Please contact our friendly team.</p>
          {/* <AppButton>Get in Touch</AppButton> */}
          <Button text="Get in Touch" link="x.com/mlsa_unilag"/>
        </div>
      </div>
    </section>
  )
}

export default MoreFAQ