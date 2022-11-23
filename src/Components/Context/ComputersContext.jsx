import React, {useContext, useState} from "react";


export const ComputersContext = React.createContext();

export const ComputersProvider = ({initialValue, children}) => {
    const [ computers , setComputers ] = useState([
        {
            name: 'truc',
            description: 'blablabla',
            brand: "test"
        }
    ]);


    return (
        <ComputersContext.Provider value={{
            ...initialValue,
            computers,
            setComputers
        }}>
            {children}
        </ComputersContext.Provider>
    )
}

export const useComputers = () => {
    return useContext(ComputersContext);
}