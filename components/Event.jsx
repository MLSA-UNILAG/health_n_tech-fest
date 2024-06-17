import React from "react";
import EventTicket from "./EventTicket";

const Event = () => {
  return (
    <section className="bg-gradient-to-r from-[#243963] via-[#184055] to-[#243d64]">
        <div className="text-center grid md:grid-cols-[4fr,5fr] gap-5 w-11/12 m-auto max-w-6xl pb-7">
          <EventTicket />
          <div className='bg-[#244a80] text-white rounded-2xl border-r-2 border-b-2 border-white p-7 h-60 md:h-4/5'>
          </div>
        </div>
    </section>
  )
};

export default Event;
