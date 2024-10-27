export default function Schedule() {
    return (
        <div className="w-full px-8 pb-10 md:px-24 md:pb-16 md:py-8 py-4 ">
            <div className="flex flex-row items-end my-7 md:my-14 gp-1 text-center justify-center">
                <p className="text-6xl text-white font-extrabold">Event Schedule</p>
                {/* <p className="text-yellow font-extrabold text-6xl">!</p> */}
            </div>
            <table className="border-collapse border-2 border-black bg-white text-black rounded-sm">
                <thead className="w-fit border-collapse border-2 bg-yellow text-black">
                    <tr className="child:border-2 child:border-black child:p-2 child:font-extrabold text-center uppercase">
                        <td className="w-1/4">Time</td>
                        <td className="w-2/4">Program</td>
                        <td className="w-1/4">Speaker</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="child:border-2 child:border-black child:p-2"> 
                        <td >10am-10:05am</td>
                        <td>Opening remarks by MLSA (touching on the essence of this event)</td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>10:05 - 10:20am</td>
                        <td>Keynote speech - Taking Charge of Your Health: Essential Practices for Every Nigerian Talk about the event and what we aim to accomplish</td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>10:20-10:50am</td>
                        <td>Living HEALTHY: Chop life make life no chop you.</td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>10:50 - 11am</td>
                        <td>Lightening talk - Sponsor session</td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>11:00 - 11:30 </td>
                        <td>PANEL SESSION - Leveraging Mobile Health Apps to Empower Patients and Improve Self-Management.</td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>11:30 - 11:40am</td>
                        <td>Games - Kahoot </td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>11:40 - 12 noon</td>
                        <td>EMERGENCY HEALTH CARE PRACTICE: First Aid Cleaning of cuts and wounds</td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>12:00 - 12:30pm</td>
                        <td>Bridging the Digital Divide: Strategies for Inclusive Health Tech Solutions.</td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>12:30 - 12:45pm</td>
                        <td>Stress Management in Modern Life and Destigmatizing Mental Health</td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>12:45- 1:05pm</td>
                        <td>The Power of Preventive healthcare /,Sedimentary lifestyle of techies: ways to improve our lifestyle</td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>1:05 - 1:30pm</td>
                        <td>Lunch Break</td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>1:30 - 2:00pm</td>
                        <td>EMERGENCY HEALTH-CARE PRACTICES (Workshop/breakouts) <ul>
                            <li>Stroke management</li>
                            <li>Choking</li>
                            <li>Diabetes</li>
                            <li>Practical - CPR</li>
                        </ul>
                        </td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>2:00pm - 2:45pm</td>
                        <td>PANEL SESSION: Ethical Considerations in Using AI for Healthcare in Nigeria. General Q/A
                        </td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>12:45-3pm</td>
                        <td>KAHOOOTTTTTTT & Giveawayyyyyy</td>
                        <td>Speaker</td>
                    </tr>
                    <tr className="child:border-2 child:border-black child:p-2">
                        <td>3pm - 3:10</td>
                        <td>Closing remarks</td>
                        <td>Speaker</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}