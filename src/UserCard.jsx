import React from 'react';

const UserCard = () => {
    return (
        <div className="flex gap-4 p-6  rounded-xl">


            <div className="relative flex-1 flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl shadow-lg">
                <span className="absolute -top-4 right-4 bg-violet-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    01
                </span>
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center text-2xl mb-4">
                    👤
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Create Account</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    Sign up for free in seconds. No credit card required to get started.
                </p>
            </div>

            <div className="relative shadow-lg flex-1  flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl">
                <span className="absolute -top-4 right-4 bg-violet-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    02
                </span>
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center text-2xl mb-4">
                    📦
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Choose Products</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    Browse our catalog and select the tools that fit your needs.
                </p>
            </div>


            <div className="relative shadow-lg flex-1 flex flex-col items-center text-center p-6 border border-gray-200 rounded-xl">
                <span className="absolute -top-4 right-4 bg-violet-600 text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    03
                </span>
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center text-2xl mb-4">
                    🚀
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Start Creating</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                    Download and start using your premium tools immediately.
                </p>
            </div>

        </div>
    );
};

export default UserCard;