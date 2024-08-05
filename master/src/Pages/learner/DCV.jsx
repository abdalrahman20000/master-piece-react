import React, { useState } from 'react';
import { User, Heart, Play, Check, Printer } from 'lucide-react';


function DCV() {



    return (
        <main className='p-5 max-sm:p-0  flex justify-center items-center'>

            <div className="bg-dark-blue rounded-sm text-white p-4 space-y-4 w-[60%] max-sm:w-full max-md:w-full max-lg:w-full">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                            <User size={32} className="text-dark-blue" />
                        </div>
                        <h2 className="text-2xl font-bold">D-CV</h2>
                    </div>
                    {/* <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center">
                        <User size={24} className="text-blue-800" />
                    </div> */}
                </div>
                <div className="bg-white p-2 rounded flex justify-between items-center">
                    <span className="text-dark-yellow-hover">Learner name .....</span>
                    <Check className="text-green-500" />
                </div>
                <div className="bg-dark-yellow-hover p-4 rounded">
                    <p className="text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                    </p>
                </div>
                <div>
                    <h3 className="text-xl mb-2">Topics</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <div key={index} className="bg-blue-800 p-2 rounded flex justify-between items-center">
                                <span>Topic .....</span>
                                <Check className="text-green-500" />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <h3 className="text-xl mb-2">Mentors</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((_, index) => (
                            <div key={index} className="bg-dark-yellow-hover text-white p-2 rounded flex justify-between items-center">
                                <span>Mentor .....</span>
                                <Check className="text-green-500" />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    {/* <div className="w-16 h-8 bg-blue-300 rounded"></div> */}
                    <button className="bg-dark-yellow-hover  text-dark-blue px-4 py-2 rounded flex items-center">
                        <Printer className="mr-2" />
                        Print
                    </button>
                </div>
            </div>
        </main>
    )
}


export default DCV;