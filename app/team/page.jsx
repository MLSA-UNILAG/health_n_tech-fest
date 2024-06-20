import React from 'react'
import Hero from '@/components/teams/Hero'
import Event from '@/components/Event'
import TeamsList from '@/components/teams/TeamsList'

export default function Team() {
  return (
    <div className="font-segoe">
      <Hero />
      <Event />
      <TeamsList />
    </div>
  )
}
