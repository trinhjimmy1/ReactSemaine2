import React, {useState} from 'react';
import Month from "../Calendar/Month.jsx";

const Calendar = () => {
    const [date , setDate] = useState(new Date());
    return (
        <div>
            <h1>Calendar</h1>
            <Month date={date}/>
        </div>
    );
};

export default Calendar;