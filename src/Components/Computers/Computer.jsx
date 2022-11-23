import React from 'react';

const Computer = ({computer}) => {
    return (
        <div>
            <h1>Computer</h1>
            {computer.name} <br/>
            {computer.description} <br/>
            {computer.brand}
        </div>
    );
};

export default Computer;