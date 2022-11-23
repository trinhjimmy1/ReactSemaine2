import React from 'react';
import counter from "../pages/Counter.jsx";

const Display = ({value}) => {
    return (
        <div>
            <h1>{value}</h1>
        </div>
    );
};

const displayComparator = (prevProps, nextProps) => {
    // if (nextProps.value <= 9) {
    //     return prevProps.value === nextProps.value;
    // } else {
    //     return prevProps.value !== nextProps.value;
    // }
    return nextProps.value > 9;

};

export default React.memo(Display, displayComparator);