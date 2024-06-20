import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './svgs'

const Footer = () => {
  return (
    <section className="bg-black text-white">
      <div className="w-11/12 m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 md:gap-y-6 p-4">
        <div className="flex flex-col items-center justify-center md:col-span-3 lg:col-auto py-4">
          <Image
            src={'/images/footer-logo.png'}
            alt='MLSA Health-n-Tech Logo'
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col items-center gap-3 py-4">
          <Link href='/speakers' className="text-sm">Speakers</Link>
          <Link href='/' className="text-sm">Schedule</Link>
          <Link href='/team' className="text-sm">Teams</Link>
          <Link href='/' className="text-sm">Become a volunteer</Link>
        </div>
        <div className="flex flex-col items-center gap-3 py-4">
          <Link href='/' className="text-sm">Join the community</Link>
          <Link href='/' className="text-sm">Community guidelines</Link>
        </div>
        <div className="flex flex-col items-center gap-3 py-4">
          <p className="text-sm">Contact Us</p>
          <p className="text-sm">Follow us:</p>
            <div className="grid grid-cols-4 gap-x-5">
              <TwitterIcon className="text-2xl" />
              <LinkedinIcon className="text-2xl" />
              <InstagramIcon className="text-2xl" />
              <FacebookIcon className="text-2xl" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer