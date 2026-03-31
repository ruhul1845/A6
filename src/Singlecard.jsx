import React from 'react';

const Singlecard = ({ single, onAddToCart }) => {
    return (
        <div className="relative bg-white rounded-2xl p-7 w-95 shadow-lg justify-center">


            {single.tag && (
                <span className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {single.tag}
                </span>
            )}


            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
                {single.icon}
            </div>


            <h2 className="text-xl font-bold text-gray-900 mb-2">{single.name}</h2>


            <p className="text-sm text-gray-500 leading-relaxed mb-5">{single.description}</p>


            <div className="flex items-baseline gap-1 mb-5">
                <span className="text-lg font-bold text-gray-900">$</span>
                <span className="text-4xl font-extrabold text-gray-900">{single.price}</span>
                <span className="text-sm text-gray-500 ml-1">/Mo</span>
            </div>


            <ul className="flex flex-col gap-3 mb-6">
                {Object.values(single.features).map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="text-green-500 font-bold text-base">✓</span>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button onClick={() => onAddToCart(single)} className="w-full py-3 rounded-full bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm transition-colors cursor-pointer">
                Buy Now
            </button>

        </div>
    );
};

export default Singlecard;