import React from 'react';
import { Search, User, CheckCircle, ChevronDown } from 'lucide-react';

const MentorDashboard = () => {
    const scheduleData = Array(28).fill().map((_, i) => ({
        day: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i % 7],
        date: i + 1,
        status: i % 3 === 0 ? 'Available' : 'Booked',
        time: '9:00 AM'
    }));

    return (
        <div className="min-h-screen  text-white p-4">
            <div className="max-w-7xl mx-auto space-y-4">
                {/* Welcome and Search */}
                <div className="bg-dark-blue p-3 rounded-lg text-center">
                    Welcome back. Learners are waiting for you
                </div>

                {/* <div className="relative">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full bg-dark-blue p-3 rounded-lg pl-10"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
                </div> */}

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-3 gap-4">
                    {/* Alerts Column */}
                    <div className="md:col-span-2 bg-dark-blue p-4 rounded-lg">
                        <h2 className="font-bold mb-2">Alerts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {Array(6).fill().map((_, i) => (
                                <div key={i} className="flex justify-between items-center bg-blue-700 text-white p-2 rounded border-0 border-dark-yellow-hover hover:border-2 shadow-sm shadow-dark-yellow">Alert {i + 1} <span className='text-dark-yellow-hover'>Learner name</span></div>
                            ))}
                        </div>
                    </div>

                    {/* Profile and Status Column */}
                    <div className="space-y-4">
                        <div className="bg-dark-blue p-4 rounded-lg flex items-center space-x-4">
                            <User size={48} />
                            <div>
                                <div>Mentor name</div>
                                <div className="text-sm text-dark-yellow-hover">Professional title</div>
                            </div>
                        </div>
                        <div className="bg-dark-blue p-4 rounded-lg grid grid-cols-2 gap-2">
                            <div className="text-center">
                                <div className="font-bold text-2xl">99+</div>
                                <div className="text-sm text-dark-yellow-hover">Number of sessions</div>
                            </div>
                            <div className="text-center">
                                <div className="font-bold text-2xl">99+</div>
                                <div className="text-sm text-dark-yellow-hover">Number of hours</div>
                            </div>
                        </div>
                        <div className="bg-dark-blue p-4 rounded-lg">
                            <div className="flex justify-between items-center">
                                <span>Status</span>
                                <span className="flex items-center text-green-400">
                                    {/* Available <CheckCircle size={16} className="ml-1" /> */}
                                    {/* Available <input className='mx-3 w-4 h-4 rounded-sm appearance-none bg-[#fe6a50]  checked:bg-[#59ea5b]' type="checkbox" /> */}
                                    Available <input className='mx-3 w-4 h-4 rounded-sm' type="checkbox" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Schedule */}
                <div className="bg-dark-blue p-4 rounded-lg">
                    <h2 className="font-bold mb-2">Schedule</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                        {scheduleData.map((item, i) => (
                            <div key={i} className="bg-blue-700 p-2 rounded text-center border-0 border-dark-yellow-hover hover:border-2 shadow-sm shadow-dark-yellow">
                                <div className="font-bold">{item.day}</div>
                                <div>{item.date}</div>
                                <div className="text-xs text-dark-yellow-hover">{item.status}</div>
                                <div className="text-xs">{item.time}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Topics for teaching */}
                <div className="bg-dark-blue p-4 rounded-lg">
                    <h2 className="font-bold mb-2">Topics for teaching</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {Array(8).fill().map((_, i) => (
                            <div key={i} className="bg-blue-700 p-2 rounded flex justify-between items-center  shadow-sm shadow-dark-yellow">
                                <span>Topic {i + 1}</span>
                                {/* <ChevronDown size={16} /> */}
                                <input type="checkbox" className='w-4 h-4' />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Assignments */}
                <div className="bg-dark-blue p-4 rounded-lg">
                    <h2 className="font-bold mb-2">Assignments</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                        {Array(5).fill().map((_, i) => (
                            <div key={i} className="bg-blue-700 p-2 rounded">
                                <div>Student name</div>
                                <input type="text" className="w-full bg-white mt-1 p-1 rounded focus:border-dark-blue focus:ring-2   focus:outline-none  focus:ring-dark-yellow-hover text-dark-yellow-hover" placeholder="Assignment details" />
                                <button className="w-full bg-dark-yellow-hover mt-1 p-1 rounded">Submit</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MentorDashboard;