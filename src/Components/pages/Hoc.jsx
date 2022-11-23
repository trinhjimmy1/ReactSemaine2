import React, {useState} from 'react';
import Animal from "../Hoc/Animal.jsx";

const Hoc = () => {
    const [ animals, setAnimals] = useState(['dog', 'cat', 'truc', 'troc']);
    return (
        <div>
            <h1>HOC</h1>
            {
                animals.map((animal,index) => (
                    <Animal key={index} animal={animal}/>
                ))
            }
        </div>
    );
};

export default Hoc;