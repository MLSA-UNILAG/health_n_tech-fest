import React from "react";
import TeamCard from "./TeamCard";
import teamsData from "@/data/teamsdata";
import { Divider } from "../svgs";

const TeamsList = () => {
  return (
    <section className="bg-page-white py-16">
      <div className="w-11/12 m-auto">
        <div className="text-center mb-10">
          <h4 className='font-bold text-2xl lg:text-3xl mb-3'>Meet The Team</h4>
          <p className='text-xs lg:text-sm font-medium'>Trailblazing Experts. Inspiring Voices Leading the Health-Tech Revolution.</p>
        </div>
        <Divider className='w-full' />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-0 gap-y-12 my-10">
          { teamsData.map(team => (
            <TeamCard 
              key={team.id}
              image={team.image}
              name={team.name}
              role={team.role}
            />
          )) }
        </div>
      </div>
    </section>
  );
};

export default TeamsList;
