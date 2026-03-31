import React from 'react';
import { use } from 'react';
import Singlecard from './Singlecard';
const Toolcard = ({ jsonpromise }) => {
    const data = use(jsonpromise);
    console.log(data);
    return (
        <div className='grid grid-cols-3 gap-5 pl-20'>
            {
                data.map((single) => (
                    <Singlecard single={single} />

                ))}

        </div>
    );
};

export default Toolcard;