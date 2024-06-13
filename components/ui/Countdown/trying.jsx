let eventDate = new Date('Sep 24, 2023 12:00:00').getTime(); // This is sample date - it can be changed

const Countdown = setInterval(() => {
    let now = new Date().getTime();

    let left = eventDate - now;

    var days = Math.floor(left / (1000 * 60 * 60 * 24));
    var hours = Math.floor((left % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((left % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((left % (1000 * 60)) / 1000);

    // Updating the time on THE faqs page
    let diff = (days) + " " + (hours) + " " + (minutes) + " " + (seconds);

    let timeleft = diff.split(" ")

    let day = timeleft[0];
    // document.querySelector(".a").textContent = day;
    // document.querySelector(".a").setAttribute("data-content", day);

    let hour = timeleft[1];
    let min = timeleft[2];
    let sec = timeleft[3];
    return (
        <div className="flex flex-row gap-8 items-center justify-center align-middle">
            <p className="text-lightBlue">COMING TO YOU IN</p>
            <div>
                <div>
                    <p>{day}</p>
                    <p className="text-yellow">Days</p>
                </div>
                <p className="text-3xl">:</p>
                <div>
                    <p>{hour}</p>
                    <p className="text-yellow">Hours</p>
                </div>
                <div>
                    <p>{min}</p>
                    <p className="text-yellow">Minutes</p>
                </div>
                <div>
                    <p>{sec}</p>
                    <p className="text-yellow">Seconds</p>
                </div>
            </div>
        </div>
    )
}, 1000);

export default Countdown