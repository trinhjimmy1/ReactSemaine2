import React, {useContext} from 'react';
import {ComputersContext} from "../Context/ComputersContext.jsx";
import Computer from "./Computer.jsx";

const ComputersListing = () => {
    const { computers } = useContext(ComputersContext);

    return (
        <div>
            <h1>ComputersListing</h1>
            {
                computers.map((computer, index) => (
                    <Computer key={index} computer={computer}/>
                ))
            }
        </div>
    );
};

export default ComputersListing;