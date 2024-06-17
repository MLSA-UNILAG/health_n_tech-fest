import React from 'react'
import Hero from '@/components/speakers/Hero'
import Event from '@/components/Event'
import SpeakersList from '@/components/speakers/SpeakersList'

export default function Speakers() {
  
  return (
    <div className="font-segoe">
      <Hero />
      <Event />
      <SpeakersList />
    </div>
  )
}
