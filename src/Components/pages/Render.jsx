import React, {useEffect, useState} from 'react';
import Number from "../Render/Number.jsx";

const Render = () => {
    const [numbers, setNumbers] = useState([]);
    const [color, setColor] = useState('black');
    const [borderColor, setBorderColor] = useState('black');
    console.log('rendu de Render')

    useEffect(() => {
        setNumbers(Array.from(Array(5).keys()));
    }, []);

    return (
        <div>
            <h1
                style={{color}}
                onClick={() => setColor(color === 'black' ? 'orange' : 'black')}
            >Render</h1>
            <button onClick={() => setBorderColor(borderColor === 'black' ? 'orange' : 'black')}>Changer la bordure</button> <br/>
            {
                numbers.map((number, index) => (
                    <Number key={index} number={number} borderColor={borderColor} color={color}/>
                ))
            }
        </div>
    );
};

export default Render;