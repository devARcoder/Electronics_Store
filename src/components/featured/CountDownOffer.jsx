import { useEffect, useState } from 'react';
const CountDownOffer = ({ targetTime }) => {
    const calculateTimeLeft = () => {
    const difference = +new Date(targetTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      timeLeft = { hours: "00", minutes: "00", seconds: "00" };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);
  return (
    <>
      <div className="flex space-x-2">
        <div className="border border-yellow-400 flex flex-col items-center py-3 px-3 text-gray-500">
            <h1 className='text-xl font-semibold'>{timeLeft.days}</h1>
            <h1 className='text-md'>Days</h1>
        </div>
        <div className="border border-yellow-400 flex flex-col items-center py-3 px-2 text-gray-500">
            <h1 className='text-xl'>{timeLeft.hours}</h1>
            <h1 className='text-md'>Hours</h1>
        </div>
        <div className="border border-yellow-400 flex flex-col items-center py-3 px-3 text-gray-500">
            <h1 className='text-xl'>{timeLeft.minutes}</h1>
            <h1 className='text-md'>Minutes</h1>
        </div>
        <div className="border border-yellow-400 flex flex-col items-center py-3 px-3 text-gray-500">
            <h1 className='text-xl font-semibold'>{timeLeft.seconds}</h1>
            <h1 className='text-md'>Seconds</h1>
        </div>
      </div>
    </>
  )
}

export default CountDownOffer
