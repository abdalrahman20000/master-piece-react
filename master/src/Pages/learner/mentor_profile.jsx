import React, { useState } from 'react';
import { User, Heart, Play, Check, Printer } from 'lucide-react';


function Mentor_profile() {



    return (
        <>

            <div className="bg-white p-4 space-y-4">
                <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-blue-300 rounded-full flex items-center justify-center">
                        <User size={40} className="text-blue-800" />
                    </div>
                    <div className="flex-grow bg-blue-200 p-2 rounded flex justify-between items-center">
                        <span className="text-blue-800 font-semibold">Mentor name .....</span>
                        <Heart className="text-red-500" />
                    </div>
                </div>
                <div className="bg-blue-200 p-4 rounded">
                    <p className="text-blue-800">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
                <div className="bg-blue-800 p-4 rounded flex items-center justify-center">
                    <Play size={60} className="text-white" />
                </div>
                {[1, 2].map((_, index) => (
                    <div key={index} className="bg-blue-200 p-4 rounded">
                        <p className="text-blue-800">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}


export default Mentor_profile;