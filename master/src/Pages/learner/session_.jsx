import React from 'react';
import { useNavigate } from "react-router-dom";
import { Search, User } from 'lucide-react';

const MentorshipDashboard = () => {
    const navigate = useNavigate();

    const mentors = [
        { name: 'Mentor Name 1', major: 'Mentor Major 1' },
        { name: 'Mentor Name 2', major: 'Mentor Major 2' },
        { name: 'Mentor Name 3', major: 'Mentor Major 3' },
        { name: 'Mentor Name 4', major: 'Mentor Major 4' },
        { name: 'Mentor Name 5', major: 'Mentor Major 5' },
    ];

    const favoriteMentors = [
        { name: 'Favorite 1', major: 'Major 1' },
        { name: 'Favorite 2', major: 'Major 2' },
        { name: 'Favorite 3', major: 'Major 3' },
        { name: 'Favorite 4', major: 'Major 4' },
    ];

    const reservedSessions = [
        { name: 'Reserved 1', date: 'Date 1' },
        { name: 'Reserved 2', date: 'Date 2' },
        { name: 'Reserved 3', date: 'Date 3' },
        { name: 'Reserved 4', date: 'Date 4' },
    ];

    function confirm_call_handle() {
        navigate("/confirm-information");
    }

    return (
        <div className="bg-[#ffffff] p-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Left column */}
                    <div className="w-full lg:w-2/3 space-y-4">
                        {/* Search bar */}
                        <div className="bg-dark-blue rounded-lg p-2 flex items-center">
                            <input
                                type="text"
                                placeholder="Search here ..."
                                className="bg-navy-800 text-dark-yellow-hover placeholder-dark-yellow rounded-l-lg p-2 flex-grow"
                            />
                            <button className="bg-dark-yellow hover:bg-dark-yellow-hover p-2 rounded-r-lg">
                                <Search className="text-white" />
                            </button>
                        </div>

                        {/* Available sessions */}
                        <div className="bg-dark-blue rounded-lg p-4">
                            <h2 className="text-white font-bold mb-4 ">Sessions available now</h2>
                            <div className="space-y-4">
                                {mentors.map((mentor, index) => (
                                    <div key={index} onClick={() => { confirm_call_handle() }} className="bg-white rounded-lg p-4 flex items-start space-x-4">
                                        <div className="text-center"><User className="text-dark-blue" size={48} /></div>
                                        <div>
                                            <div className="flex justify-start items-center ">
                                                <h3 className="text-dark-blue font-bold mr-4">{mentor.name}</h3>
                                                <p className="text-dark-blue">{mentor.major}</p>
                                            </div>
                                            <p className="text-dark-yellow-hover mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-4 space-x-2">
                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button key={page} className="bg-dark-yellow hover:bg-dark-yellow-hover text-white w-8 h-8 rounded-full">
                                        {page}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="w-full lg:w-1/3 space-y-4">
                        {/* Favorite Mentors */}
                        <div className="bg-dark-blue rounded-lg p-4">
                            <h2 className="text-white font-bold mb-4">Favorite Mentors</h2>
                            <div className="space-y-2">
                                {favoriteMentors.map((mentor, index) => (
                                    <div key={index} onClick={() => { confirm_call_handle() }} className="bg-white rounded-lg p-2 flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <User className="text-dark-blue" size={24} />
                                            <div>
                                                <h3 className="text-dark-blue">{mentor.name}</h3>
                                                <p className="text-dark-yellow-hover text-sm">{mentor.major}</p>
                                            </div>
                                        </div>
                                        <button className="bg-dark-yellow hover:bg-dark-yellow-hover text-white px-2 py-1 rounded text-sm">Chat Now</button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-4 space-x-2">
                                {[1, 2, 3, 4, 5].map((page) => (
                                    <button key={page} className="bg-dark-yellow hover:bg-dark-yellow-hover text-white w-6 h-6 rounded-full text-xs">
                                        {page}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Reserved Sessions */}
                        <div className="bg-dark-blue rounded-lg p-4">
                            <h2 className="text-white font-bold mb-4">Reserved Sessions</h2>
                            <div className="space-y-2">
                                {reservedSessions.map((session, index) => (
                                    <div key={index} onClick={() => { confirm_call_handle() }} className="bg-white rounded-lg p-2 flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <User className="text-dark-blue" size={24} />
                                            <div>
                                                <h3 className="text-dark-blue">{session.name}</h3>
                                                <p className="text-dark-yellow-hover text-sm">{session.date}</p>
                                            </div>
                                        </div>
                                        <button className="bg-dark-yellow hover:bg-dark-yellow-hover text-white px-2 py-1 rounded text-sm">Join</button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-center mt-4 space-x-2">
                                {[1, 2, 3].map((page) => (
                                    <button key={page} className="bg-dark-yellow hover:bg-dark-yellow-hover text-white w-6 h-6 rounded-full text-xs">
                                        {page}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorshipDashboard;