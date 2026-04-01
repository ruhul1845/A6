import React from 'react';
import user from './assets/user.png'
import rocket from './assets/rocket.png'
import pack from './assets/package.png'

const UserCard = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-10  rounded-xl">


            <div className="relative  flex-1 flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl shadow-lg">
                <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center">
                    01
                </span>
                <div className='w-25 h-25 bg-[#EDD9FF] flex items-center justify-center rounded-full mb-4'>
                    <img src={user} alt="user" />
                </div>
                <h3 className="text-xl font-black mb-2">Create Account</h3>
                <p className="text-base text-gray-500 leading-6 max-w-[350px]">
                    Sign up for free in seconds. No credit card required to get started.
                </p>
            </div>

            <div className="relative  shadow-lg flex-1  flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl">
                <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center">
                    02
                </span>
                <div className='w-25 h-25  rounded-full bg-[#EDD9FF] mb-4 flex items-center justify-center'>
                    <img src={pack} alt="package" />
                </div>
                <h3 className="text-xl font-black mb-2">Choose Products</h3>
                <p className="text-base text-gray-500 leading-6 max-w-[350px]">
                    Browse our catalog and select the tools that fit your needs.
                </p>
            </div>


            <div className="relative  shadow-lg flex-1 flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl">
                <span className="absolute top-4 right-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold w-10 h-10 rounded-full flex items-center justify-center">
                    03
                </span>
                <div className='w-25 h-25 rounded-full bg-[#EDD9FF] flex items-center justify-center mb-4'>
                    <img src={rocket} alt="rocket" />
                </div>
                <h3 className="text-xl font-black mb-2">Start Creating</h3>
                <p className="text-base leading-6 max-w-[350px] text-gray-500 ">
                    Download and start using your premium tools immediately.
                </p>
            </div>

        </div>
    );
};

export default UserCard;