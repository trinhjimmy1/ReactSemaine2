import React, {useState} from 'react';

const Number = ({number, borderColor}) => {
    const [background, setBackground] = useState("white");
    console.log("rendu" + number)

    return (
        <div
            style={{
                padding: "10px",
                border: "1px" + borderColor,
                margin: "10px",
                background
            }}
        >
            {number} -
            <button onClick={() => setBackground(background === "white" ? "grey" : "white")}>
                Change Background
            </button>
        </div>
    );
};

const numberComparator = (prevProps, nextProps) => {
    console.log(prevProps, nextProps);
    return prevProps.borderColor !== nextProps.borderColor;

}

export default React.memo(Number, numberComparator);