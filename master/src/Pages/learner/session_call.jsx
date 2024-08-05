import React from 'react';
import { useNavigate } from "react-router-dom";
import { Camera, Mic, PhoneOff, Settings, User, Send } from 'lucide-react';


function Session_call() {

    const navigate = useNavigate();


    function cancel_call_handle() {
        navigate("/sessions");
    }


    return (
        <>
            <main>
                <div className="p-2 ">
                    <div className="w-full h-screen flex flex-col bg-dark-blue text-white p-2 sm:p-4 md:p-6">

                        {/* <header className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold">Messages</span>
                            <div className="flex space-x-2">
                                <button className="p-1 hover:bg-blue-800 rounded">
                                    <Settings className="w-5 h-5" />
                                </button>
                                <button className="p-1 hover:bg-blue-800 rounded">
                                    <User className="w-5 h-5" />
                                </button>
                            </div>
                        </header> */}

                        <div className=" flex-col items-center justify-between bg-blue-800 p-4 rounded-lg mb-4 h-[100%]">
                            <div className="h-[75%] flex justify-center items-center">
                                <div className="w-40 h-40 sm:w-20 sm:h-20 bg-dark-yellow-hover rounded-full mx-auto "></div>
                            </div>

                            <div className="flex justify-center items-end pb-5 space-x-4 h-[25%] ">
                                <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
                                <Mic className="w-5 h-5 sm:w-6 sm:h-6" />
                                <PhoneOff onClick={() => { cancel_call_handle() }} className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                        </div>

                        <div className="overflow-y-scroll max-h-48">
                            <div className="flex-grow  space-y-2 mb-4 ">
                                <div className="bg-blue-800 p-2 rounded-lg max-w-[75%]">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-dark-yellow-hover rounded-full mr-2 flex-shrink-0"></div>
                                        <div className="flex-grow">
                                            <div className="h-2 bg-white rounded w-1/2 mb-1"></div>
                                            <div className="h-2 bg-white rounded w-3/4"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-blue-700 p-2 rounded-lg max-w-[75%] ml-auto">
                                    <div className="flex items-center justify-end">
                                        <div className="flex-grow text-right">
                                            <div className="h-2 bg-white rounded w-1/2 mb-1 ml-auto"></div>
                                            <div className="h-2 bg-white rounded w-3/4 ml-auto"></div>
                                        </div>
                                        <div className="w-8 h-8 bg-dark-yellow-hover rounded-full ml-2 flex-shrink-0"></div>
                                    </div>
                                </div>

                                {/* -----------------test---------------------- */}

                                <div className="bg-blue-700 p-2 rounded-lg max-w-[75%] ml-auto">
                                    <div className="flex items-center justify-end">
                                        <div className="flex-grow text-right">
                                            <div className="h-2 bg-white rounded w-1/2 mb-1 ml-auto"></div>
                                            <div className="h-2 bg-white rounded w-3/4 ml-auto"></div>
                                        </div>
                                        <div className="w-8 h-8 bg-dark-yellow-hover rounded-full ml-2 flex-shrink-0"></div>
                                    </div>
                                </div> 
                                <div className="bg-blue-700 p-2 rounded-lg max-w-[75%] ml-auto">
                                    <div className="flex items-center justify-end">
                                        <div className="flex-grow text-right">
                                            <div className="h-2 bg-white rounded w-1/2 mb-1 ml-auto"></div>
                                            <div className="h-2 bg-white rounded w-3/4 ml-auto"></div>
                                        </div>
                                        <div className="w-8 h-8 bg-dark-yellow-hover rounded-full ml-2 flex-shrink-0"></div>
                                    </div>
                                </div>

                                <div className="bg-blue-800 p-2 rounded-lg max-w-[75%]">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-dark-yellow-hover rounded-full mr-2 flex-shrink-0"></div>
                                        <div className="flex-grow">
                                            <div className="h-2 bg-white rounded w-1/2 mb-1"></div>
                                            <div className="h-2 bg-white rounded w-3/4"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-700 p-2 rounded-lg max-w-[75%] ml-auto">
                                    <div className="flex items-center justify-end">
                                        <div className="flex-grow text-right">
                                            <div className="h-2 bg-white rounded w-1/2 mb-1 ml-auto"></div>
                                            <div className="h-2 bg-white rounded w-3/4 ml-auto"></div>
                                        </div>
                                        <div className="w-8 h-8 bg-dark-yellow-hover rounded-full ml-2 flex-shrink-0"></div>
                                    </div>
                                </div>

                                <div className="bg-blue-800 p-2 rounded-lg max-w-[75%]">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-dark-yellow-hover rounded-full mr-2 flex-shrink-0"></div>
                                        <div className="flex-grow">
                                            <div className="h-2 bg-white rounded w-1/2 mb-1"></div>
                                            <div className="h-2 bg-white rounded w-3/4"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-blue-800 p-2 rounded-lg max-w-[75%]">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-dark-yellow-hover rounded-full mr-2 flex-shrink-0"></div>
                                        <div className="flex-grow">
                                            <div className="h-2 bg-white rounded w-1/2 mb-1"></div>
                                            <div className="h-2 bg-white rounded w-3/4"></div>
                                        </div>
                                    </div>
                                </div>


                                <div className="bg-blue-700 p-2 rounded-lg max-w-[75%] ml-auto">
                                    <div className="flex items-center justify-end">
                                        <div className="flex-grow text-right">
                                            <div className="h-2 bg-white rounded w-1/2 mb-1 ml-auto"></div>
                                            <div className="h-2 bg-white rounded w-3/4 ml-auto"></div>
                                        </div>
                                        <div className="w-8 h-8 bg-dark-yellow-hover rounded-full ml-2 flex-shrink-0"></div>
                                    </div>
                                </div>
                                <div className="bg-blue-700 p-2 rounded-lg max-w-[75%] ml-auto">
                                    <div className="flex items-center justify-end">
                                        <div className="flex-grow text-right">
                                            <div className="h-2 bg-white rounded w-1/2 mb-1 ml-auto"></div>
                                            <div className="h-2 bg-white rounded w-3/4 ml-auto"></div>
                                        </div>
                                        <div className="w-8 h-8 bg-dark-yellow-hover rounded-full ml-2 flex-shrink-0"></div>
                                    </div>
                                </div>

                                <div className="bg-blue-800 p-2 rounded-lg max-w-[75%]">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-dark-yellow-hover rounded-full mr-2 flex-shrink-0"></div>
                                        <div className="flex-grow">
                                            <div className="h-2 bg-white rounded w-1/2 mb-1"></div>
                                            <div className="h-2 bg-white rounded w-3/4"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Add more message bubbles here for a realistic chat view */}
                            </div>
                        </div>

                        <div className="flex items-center bg-blue-800 rounded-lg p-2">
                            <button className="p-2 hover:bg-blue-700 rounded mr-2">
                                <Camera className="w-5 h-5" />
                            </button>
                            <button className="p-2 hover:bg-blue-700 rounded mr-2">
                                <Mic className="w-5 h-5" />
                            </button>
                            <input
                                type="text"
                                className="flex-grow bg-transparent focus:outline-none text-dark-yellow-hover placeholder-dark-yellow"
                                placeholder="Type a message..."
                            />
                            <button className="flex justify-center items-center p-2 bg-dark-yellow hover:bg-dark-yellow-hover rounded-full ml-2">
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Session_call;