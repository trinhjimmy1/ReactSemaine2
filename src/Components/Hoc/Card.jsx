import React from 'react';

const Card = ({children, onDelete}) => {
    return (
        <div
            style={{
                padding: "10px",
                border: '1px solid black',
                borderRadius: "20px"
            }}
        >
            {children}
            <div>
                <button onClick={onDelete}>X</button>
                <button>edit</button>
                <button>UP</button>
                <button>DOWN</button>
            </div>
        </div>
    );
};

// les high order component , permettent une réutilisation du component mais permet une plus grande flexibilité par rapport au contenu car le contenu du component appeler peut être différent d'un appl à un autre

export default React.memo(Card);