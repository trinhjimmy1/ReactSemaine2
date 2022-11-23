import React from 'react';
import FormComputers from "../Computers/FormComputers.jsx";
import {ComputersProvider} from "../Context/ComputersContext";
import ComputersListing from "../Computers/ComputersListing.jsx";

const Computers = () => {
    return (
        <div>
            <ComputersProvider>
                <h1>Computers</h1>
                <FormComputers/>
                <ComputersListing/>
            </ComputersProvider>

        </div>
    );
};

export default Computers;