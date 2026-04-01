import React from 'react';
import { use } from 'react';
import Singlecard from './Singlecard';
const Toolcard = ({ cardArray, jsonpromise, onAddToCart }) => {
    const data = use(jsonpromise);
    console.log(data);
    return (
        <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto justify-center '>
            {
                data.map((single) => (
                    <Singlecard cardArray={cardArray} onAddToCart={onAddToCart} single={single} />

                ))}

        </div>
    );
};

export default Toolcard;