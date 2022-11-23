import React from 'react';
import Card from "./Card.jsx";

const Animal = ({animal}) => {
    const onDelete = () => {
        console.log('delete');
    }
    return (
        <Card onDelete={onDelete}>
            {animal} <br/>
            <form>
                <input type="text"/>
                <button type="submit">test</button>
            </form>
        </Card>
    );
};

export default Animal;