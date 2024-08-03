import React from 'react';
import { Search, User, Award, Calendar, Book, Star } from 'lucide-react';

const LearningDashboard = () => {
  return (
    // <div className="min-h-screen bg-blue-900 text-white p-4">
    <div className="min-h-screen  text-white p-4">
      <div className="max-w-6xl mx-auto space-y-4">


        {/* Welcome and Search */}
        <div className="bg-blue-800 p-3 rounded-lg text-center">
          Welcome back. Mentors are waiting for you
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full bg-blue-800 p-3 rounded-lg pl-10 pr-4"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300" />
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Progress and Schedule Column */}
          <div className="md:col-span-2 space-y-4 w-full">

            {/* <div className="certificate bg-blue-800 p-4 rounded-lg">
              <h2 className="font-bold mb-2">Progress</h2>
              <div className="bg-blue-700 p-4 rounded-lg flex items-center space-x-4">
                <Award size={48} />
                <div>
                  <div className="font-bold">Certificate of completion</div>
                  <div>User name</div>
                  <div className="text-sm text-blue-300">Accomplished more than 99 sessions and surpass...</div>
                </div>
              </div>
              <button className="mt-2 px-4 py-2 bg-blue-600 rounded">See more</button>
            </div> */}



            {/* <div className="bg-blue-900 p-6 rounded-lg shadow-lg max-w-md mx-auto"> */}
            <div className="bg-blue-900 p-6 rounded-lg shadow-lg max-w-md ">
              <h2 className="text-blue-300 text-2xl font-semibold mb-4 text-center">Progress</h2>
              <div className="bg-blue-400 p-6 rounded-lg text-center">
                <div className="mb-4">
                  <img src="/api/placeholder/64/64" alt="Certificate icon" className="w-16 h-16 mx-auto rounded-full bg-white p-2" />
                </div>
                <h3 className="text-blue-900 text-xl font-semibold mb-2">certificate of completion</h3>
                <p className="text-blue-900 text-lg font-bold mb-2">User name</p>
                <p className="text-blue-800 mb-4 text-sm">
                  Accomplish more than 99 sessions and surpass<br />
                  99 hours each in Topic 1, Topic 2, and Topic 3.
                </p>
                <div className="mb-4">
                  <svg className="w-16 h-8 mx-auto" viewBox="0 0 100 40">
                    <path d="M10 20 Q 30 5, 50 20 T 90 20" fill="none" stroke="#1e40af" strokeWidth="2" />
                  </svg>
                </div>
                <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300">
                  See more
                </button>
              </div>
            </div>
            
            



            <div className="bg-blue-800 p-4 rounded-lg ">
              <h2 className="font-bold mb-2">Schedule</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="bg-blue-700 p-2 rounded text-center">
                    <Calendar size={16} className="mx-auto mb-1" />
                    <div className="text-xs">Session {i + 1}</div>
                    <div className="text-xs">9:00 AM</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile and Premium Column */}
          {/* <div className="space-y-4">
            <div className="bg-blue-800 p-4 rounded-lg">
              <div className="flex items-center space-x-4 mb-4">
                <User size={48} />
                <div>
                  <input type="text" placeholder="User name" className="bg-blue-700 p-1 rounded" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-center">
                <div>
                  <div className="font-bold text-2xl">99+</div>
                  <div className="text-sm text-blue-300">Number of sessions</div>
                </div>
                <div>
                  <div className="font-bold text-2xl">99+</div>
                  <div className="text-sm text-blue-300">Number of hours</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-800 p-4 rounded-lg">
              <h2 className="font-bold mb-2">Premium</h2>
              <div className="bg-blue-700 p-2 rounded mb-2">
                <div className="flex justify-between">
                  <span>Subscription</span>
                  <span>20/06/2024</span>
                </div>
              </div>
              <button className="w-full bg-yellow-500 text-blue-900 py-2 rounded font-bold">
                Upgrade now
              </button>
            </div>
          </div> */}
        </div>

        {/* Sessions available now */}
        <div className="bg-blue-800 p-4 rounded-lg">
          <h2 className="font-bold mb-2">Sessions available now</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-blue-700 p-2 rounded text-center">
                <Book size={24} className="mx-auto mb-1" />
                <div className="text-xs">Session {i + 1}</div>
                <div className="flex justify-center">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={12} className="text-yellow-500" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assignments */}
        <div className="bg-blue-800 p-4 rounded-lg">
          <h2 className="font-bold mb-2">Assignments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-blue-700 p-2 rounded">
                <input type="text" placeholder="Assignment name" className="w-full bg-blue-600 mb-1 p-1 rounded" />
                <div className="flex">
                  <input type="text" placeholder="Progress" className="flex-grow bg-blue-600 p-1 rounded-l" />
                  <button className="bg-blue-500 px-2 rounded-r">Update</button>
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