import React, { useEffect, useState } from 'react'

function Toast({ games, wins }) {

    const [winings, setWinings] = useState('0');
    const [looses, setLooses] = useState('0');

    useEffect(() => {
        if (games) {
            let winings = (wins * 100 / games).toFixed(2);
            setWinings(winings)
            setLooses((100 - winings).toFixed(2))
        }
    }, [games, wins]);

    return (
        <div className="statistic-container">
            <div className="statistic-header">
                <svg className="bd-placeholder-img rounded mr-2" width="20" height="20">
                    <rect width="100%" height="100%" fill="#007aff"></rect>
                </svg>
                <strong>Statistics</strong>
            </div>
            <div className="statistic-body">
                <p>Games played:{games}</p>
                <p>Wins: {winings}% </p>
                <p>Looses: {looses}% </p>
            </div>
        </div>
    )
}

export default Toast;

