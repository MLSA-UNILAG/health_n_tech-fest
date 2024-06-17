import React from 'react'
import Hero from '@/components/speakers/Hero'
import Event from '@/components/speakers/Event'
import SpeakersList from '@/components/speakers/SpeakersList'

export default function Speakers() {
  
  return (
    <main className="font-segoe">
      <Hero />
      <Event />
      <SpeakersList />
    </main>
  )
}
