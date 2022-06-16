import { FC, useEffect, useState } from 'react'


const ClockComponent: FC = () => {
    const hourCurrent = new Date().toLocaleTimeString();
    const [hour, setHour] = useState(hourCurrent)

    useEffect(() => {
        setInterval(() => {
            setHour((previousState) => previousState = new Date().toLocaleTimeString());
        }, 1000);
    });

    return (
        <h1 className='text-7xl font-bold text-white text-center'>
            {hour}
        </h1>
    )
}

export default ClockComponent