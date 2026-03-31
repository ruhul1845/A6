import React, { use } from 'react';
import Pricingcard from './Pricingcard';
const Pricing = ({ pricingPromise }) => {
    const data = use(pricingPromise);
    return (
        <div className='grid grid-cols-3 pl-44 pr-40'  >
            {data.map((data) => (
                <Pricingcard key={data.id} data={data} />
            ))}
        </div>
    );
};

export default Pricing;