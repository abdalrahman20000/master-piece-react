import React, { useState } from 'react';
import { User, Heart, Play, Check, Printer } from 'lucide-react';


function Mentor_profile() {



    return (
        <>

            <div className="flex justify-center items-center bg-white p-10 space-y-4">
                <div className="w-[50%] bg-dark-blue p-4 rounded-sm">
                    <div className="flex items-center space-x-4 m-4">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                            <User size={40} className="text-dark-yellow-hover" />
                        </div>
                        <div className="flex-grow bg-white p-2 rounded flex justify-between items-center">
                            <span className="text-dark-yellow-hover font-semibold">Mentor name .....</span>
                            <Heart className="text-red-500" />
                        </div>
                    </div>

                    <div className="bg-white p-4 rounded m-4">
                        <p className="text-dark-blue">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>

                    <div className="bg-blue-800 p-4 rounded flex items-center justify-center m-4">
                        <Play size={60} className="text-dark-yellow-hover" />
                    </div>

                    {[1, 2].map((_, index) => (
                        <div key={index} className="bg-white p-4 rounded m-4">
                            <p className="text-dark-blue">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default Mentor_profile;