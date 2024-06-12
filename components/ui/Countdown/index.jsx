export const Countdown = () => {
    return (
        <div className="text-center my-4">
            <p className="text-lightBlue text-xl">COMING TO YOU IN</p>
            <div className="flex flex-row my-6 gap-8 items-center justify-center align-middle">
                <div>
                    <p className="text-white text-7xl font-extrabold">23</p>
                    <p className="text-yellow">Days</p>
                </div>

                <p className="text-8xl text-white">:</p>
                <div>
                    <p className="text-white text-7xl font-extrabold">13</p>
                    <p className="text-yellow">Hours</p>
                </div>
                <p className="text-8xl text-white">:</p>

                <div>
                    <p className="text-white text-7xl font-extrabold">14</p>
                    <p className="text-yellow">Minutes</p>
                </div>
                <p className="text-8xl text-white">:</p>

                <div>
                    <p className="text-white text-7xl font-extrabold">5</p>
                    <p className="text-yellow">Seconds</p>
                </div>
            </div>
        </div>
    )
}
