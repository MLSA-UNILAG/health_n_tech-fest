import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import footerLogo from '@/public/Images/footer-logo.png'
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from './svgs'

const Footer = () => {
  return (
    <section className="bg-black text-white">
      <div className="w-11/12 m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-3 md:gap-y-6 p-4">
        <div className="flex flex-col items-center justify-center md:col-span-3 lg:col-auto py-4">
          <Image
            src={'/Images/footer-logo.png'}
            alt='MLSA Health-n-Tech Logo'
            width={200}
            height={200}
          />
        </div>
        <div className="flex flex-col items-center gap-3 py-4">
          <Link href='/speakers' className="text-sm">Speakers</Link>
          <Link href='/' className="text-sm">Schedule</Link>
          <Link href='/team' className="text-sm">Teams</Link>
          <Link href='https://forms.office.com/pages/responsepage.aspx?id=oBzDhDusrk6tEVGdgCM-b2rhIZyiDIRMq6jycZEfjHlUQVBNQjhMNE5JOVc2M1VJNFBWNFE2NldSUS4u&fbclid=PAZXh0bgNhZW0CMTEAAaZDCcakusThme0rqL1PEH7vVby2AFUzNQQHxk9gsb1KUxLDglM9UYPmqKI_aem_xG3pE56x9HlYzpTQcVqxHw&route=shorturl' className="text-sm">Become a volunteer</Link>
        </div>
        <div className="flex flex-col items-center gap-3 py-4">
          <Link href='https://forms.office.com/pages/responsepage.aspx?id=oBzDhDusrk6tEVGdgCM-b2rhIZyiDIRMq6jycZEfjHlUQUVUU0REQTFCSE40WlFKVjlKU0JaWUxMRi4u&fbclid=PAZXh0bgNhZW0CMTEAAaZ0BwKI0qPpFH0HUnsT3o-MmP71WKMlOEY343vYH5sUxWHaFGTlJzCtJ70_aem_Oxg97T4MW5gxc-aGj1oJUA&route=shorturl' className="text-sm">Join the community</Link>
          <Link href='/' className="text-sm">Community guidelines</Link>
        </div>
        <div className="flex flex-col items-center gap-3 py-4">
          <p className="text-sm">Contact Us</p>
          <p className="text-sm">Follow us:</p>
            <div className="grid grid-cols-4 gap-x-5">
            <Link href='x.com/mlsa_unilag' className="text-sm"><TwitterIcon className="text-2xl" /></Link>
            <Link href='/' className="text-sm"><LinkedinIcon className="text-2xl" /></Link>
            <Link href='www.instagram.com/mlsa_unilag/' className="text-sm"><InstagramIcon className="text-2xl" /></Link>
            <Link href='/' className="text-sm"><FacebookIcon className="text-2xl" /></Link>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer