import React from 'react';

const Pricingcard = ({ data }) => {
    return (
        <div className={`relative flex flex-col w-100  p-8 rounded-2xl  ${data.popular ? 'bg-violet-600 text-white' : 'bg-gray-100 text-gray-900'}`}>

            {/* Most Popular Badge */}
            {data.tag && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-800 text-xs font-semibold px-4 py-1 rounded-full">
                    {data.tag}
                </span>
            )}

            {/* Title */}
            <h2 className="text-2xl font-bold mb-1">{data.title}</h2>

            {/* Subtitle */}
            <p className={`text-sm mb-6 ${data.popular ? 'text-violet-200' : 'text-gray-500'}`}>
                {data.subtitle}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-extrabold">${data.price}</span>
                <span className={`text-sm ${data.popular ? 'text-violet-200' : 'text-gray-500'}`}>
                    /{data.period}
                </span>
            </div>

            {/* Features */}
            <ul className="flex flex-col gap-3 mb-8">
                {data.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                        <span className="text-green-400 font-bold">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button className={`mt-auto w-full py-3 rounded-full font-semibold text-sm cursor-pointer ${data.popular ? 'bg-white text-violet-600 hover:bg-gray-100' : 'bg-violet-600 text-white hover:bg-violet-700'}`}>
                {data.btnText}
            </button>

        </div>
    );
};

export default Pricingcard;