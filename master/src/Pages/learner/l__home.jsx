import React from 'react';
import { Search, User, Award, Calendar, Book, Star } from 'lucide-react';
import logo from "../../images/logo.png";

const LearningDashboard = () => {
  return (
    <div className="min-h-screen bg-white text-white p-4">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Welcome and Search */}
        <div className="bg-dark-blue p-3 rounded-lg text-center text-[#ffffff] font-bold">
          Welcome back. Mentors are waiting for you
        </div>
        <div className="relative">
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
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Progress and Schedule Column */}
          <div className="md:col-span-2 space-y-4">
            {/* Progress */}
            <div className="bg-dark-blue p-6 rounded-lg shadow-lg">
              <h2 className="text-white text-2xl font-semibold mb-4 text-center">Certificate</h2>
              <div className="bg-dark-yellow-hover p-6 rounded-lg text-center">
                <div className="mb-4 ">
                  <img src={logo} alt="Certificate icon" className="w-16 h-16 mx-auto rounded-full bg-white p-2" />
                </div>
                <h3 className="text-dark-blue text-xl font-semibold mb-2">Certificate of Completion</h3>
                <p className="text-dark-blue text-lg font-bold mb-2">User name</p>
                <p className="text-white mb-4 text-sm">
                  Accomplish more than 99 sessions and surpass<br />
                  99 hours each in Topic 1, Topic 2, and Topic 3.
                </p>
                <div className="mb-4">
                  <svg className="w-16 h-8 mx-auto" viewBox="0 0 100 40">
                    <path d="M10 20 Q 30 5, 50 20 T 90 20" fill="none" stroke="#000080" strokeWidth="2" />
                  </svg>
                </div>
                <button className="bg-dark-blue text-white py-2 px-6 rounded-full hover:bg-opacity-90 transition duration-300">
                  See more
                </button>
              </div>
            </div>


          </div>



          {/* Profile and Premium Column */}
          <div className="space-y-4">
            {/* Profile */}
            <div className="bg-dark-blue p-4 rounded-lg h-[246px]">
              <div className="flex items-center space-x-4 mb-6">
                <User size={48} className="text-white" />
                <div>
                  <input type="text" placeholder="User name" className="bg-dark-white p-1 rounded text-dark-yellow-hover" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center h-[75%]">
                <div className='flex-col justify-between items-center h-[90%]'>
                  <div className="text-md text-center text-dark-yellow-hover mb-2">Number of sessions</div>
                  <div className="flex justify-center items-center font-bold text-4xl text-white bg-dark-yellow-hover h-[77%] rounded-md text-center ">99+</div>
                </div>
                <div className='flex-col justify-center items-center h-[90%]'>
                  <div className="text-md text-center text-dark-yellow-hover mb-2">Number of hours</div>
                  <div className="flex justify-center items-center font-bold text-4xl text-white bg-dark-yellow-hover h-[77%] rounded-md text-center ">99+</div>
                </div>
              </div>
            </div>
            {/* Premium */}
            <div className="bg-dark-blue p-6 rounded-lg h-44">
              <h2 className="text-white font-bold mb-2">Premium</h2>
              <div className="bg-dark-yellow-hover p-2 rounded mb-2">
                <div className="flex justify-between text-white">
                  <span>Subscription</span>
                  <span>20/06/2024</span>
                </div>
              </div>
              <button className="w-full bg-dark-yellow-hover text-white py-2 rounded font-bold hover:bg-opacity-90">
                Upgrade now
              </button>
            </div>
          </div>
        </div>


        {/* Schedule */}
        <div className="bg-dark-blue p-4 rounded-lg">
          <h2 className="text-white font-bold mb-2">Schedule</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="bg-white p-2 rounded text-center">
                <Calendar size={16} className="mx-auto mb-1 text-dark-blue" />
                <div className="text-xs text-dark-blue">Session {i + 1}</div>
                <div className="text-xs text-dark-yellow-hover">9:00 AM</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sessions available now */}
        <div className="bg-dark-blue p-4 rounded-lg w-full">
          <h2 className="text-white font-bold mb-2">Sessions available now</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white p-2 rounded text-center">
                <Book size={24} className="mx-auto mb-1 text-dark-blue" />
                <div className="text-xs text-dark-blue">Session {i + 1}</div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-dark-yellow-hover" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assignments */}
        <div className="bg-dark-blue p-4 rounded-lg">
          <h2 className="text-white font-bold mb-2">Assignments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-dark-yellow-hover p-2 rounded">
                <input type="text" placeholder="Assignment name" className="w-full bg-white mb-1 p-1 rounded text-dark-blue" />
                <div className="flex">
                  <input type="text" placeholder="Progress" className="flex-grow bg-white p-1 rounded-l text-dark-blue" />
                  <button className="bg-dark-blue  px-2 rounded-r text-white">Update</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDashboard;