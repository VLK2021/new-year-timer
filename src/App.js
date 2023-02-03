import './App.css';

import {useState} from "react";


function App() {
    const [day, setDay] = useState(0);
    const [hour, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const newYear = '1 jan 2024';

    setInterval(() => {
        const DateForNewYear = new Date(newYear);
        const todayDate = new Date();
        const totalSeconds = (DateForNewYear - todayDate) / 1000;
        setDay(Math.floor(totalSeconds / 3600 / 24));
        setHours(Math.floor(totalSeconds / 3600) % 24);
        setMinutes(Math.floor(totalSeconds / 60) % 60);
        setSeconds(Math.floor(totalSeconds) % 60);
    }, 1000);


    return (
        <div className="container">
            <h1>Happy New Year!</h1>
            <h3>2024</h3>

            <div className={'container-info'}>
                <div className={'container-info-of-time'}>
                    <div className={'word'}>{day}</div>
                    <p>day</p>
                </div>

                <div className={'container-info-of-time'}>
                    <div className={'word'}>{hour}</div>
                    <p>hour</p>
                </div>

                <div className={'container-info-of-time'}>
                    <div className={'word'}>{minutes}</div>
                    <p>minutes</p>
                </div>

                <div className={'container-info-of-time'}>
                    <div className={'word'}>{seconds}</div>
                    <p>seconds</p>
                </div>
            </div>
        </div>
    );
}

export default App;
