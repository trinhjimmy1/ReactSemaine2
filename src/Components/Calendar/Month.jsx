import React, {useEffect, useState} from 'react';
import Day from "./Day.jsx";

function datesOfWeek(current) {
    var week= new Array();
    // Starting Monday not Sunday
    current.setDate((current.getDate() - current.getDay() +1));
    for (var i = 0; i < 7; i++) {
        week.push(
            new Date(current)
        );
        current.setDate(current.getDate() +1);
    }
    return week;
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const Month = ({date}) => {
    const [month, setMonth] = useState([]);
    const [event, setEvent] = useState(false);

    useEffect(() => {
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1)
        const monthArr = [];
        for (let i = 0; i < 6; i++) {
            const week = datesOfWeek(firstDayOfMonth);
            monthArr.push(week);
            firstDayOfMonth.addDays(7)
        }
        setMonth(monthArr);
    }, [])
    return (
        <div>
            {
                month.map((week, index) => (
                    <div className="week" key={index} style={{ display: 'flex'}}>
                        {
                            week.map((day,j) => (
                                <Day key={j} date={day} event={event}/>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    );
};

export default Month;