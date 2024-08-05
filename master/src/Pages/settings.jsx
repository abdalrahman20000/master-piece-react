import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, CreditCard, Clock, Users, Bell, LogOut } from 'lucide-react';

const Settings_popups = () => {

  const navigate = useNavigate();

  function add_card_handle(){
    navigate("/payment");
  }


  const [activeTab, setActiveTab] = useState('Profile');

  const tabs = [
    { name: 'Profile', icon: User },
    { name: 'Cards', icon: CreditCard },
    { name: 'Sessions', icon: Clock },
    { name: 'Favorite Mentors', icon: Users },
    { name: 'Alerts', icon: Bell },
    { name: 'Log out', icon: LogOut },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'Profile':
        return (
          <div className="space-y-4">
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-dark-yellow-hover rounded-full flex items-center justify-center">
                <User size={48} className="text-white" />
              </div>
            </div>
            <input className="w-full p-2 bg-white placeholder-dark-yellow text-dark-yellow-hover rounded focus:outline-none focus:ring-2 focus:ring-dark-yellow-hover" placeholder="User name" />
            <input className="w-full p-2 bg-white placeholder-dark-yellow text-dark-yellow-hover rounded focus:outline-none focus:ring-2 focus:ring-dark-yellow-hover" placeholder="Email" />
            <input className="w-full p-2 bg-white placeholder-dark-yellow text-dark-yellow-hover rounded focus:outline-none focus:ring-2 focus:ring-dark-yellow-hover" placeholder="Phone number" />
            <input className="w-full p-2 bg-white placeholder-dark-yellow text-dark-yellow-hover rounded focus:outline-none focus:ring-2 focus:ring-dark-yellow-hover" placeholder="User status" />
            <button className="w-full p-2 bg-dark-yellow hover:bg-dark-yellow-hover text-white rounded">Update</button>
          </div>
        );
      case 'Cards':
        return (
          <div className="space-y-4">
            <div className="bg-blue-600 p-4 rounded">
              <div className="flex justify-between items-center mb-2">
                <span>Card name</span>
                <div className="w-8 h-5 bg-red-500 rounded"></div>
              </div>
              <div className="mb-2">0000 0000 0000 0000</div>
              <div className="flex justify-between">
                <span>00/00</span>
                <span>000</span>
              </div>
            </div>
            <button className="w-full p-2 bg-dark-yellow-hover text-white rounded">Update</button>
            <div className="border-2 border-dashed border-blue-300 rounded-lg p-8 flex items-center justify-center" onClick={()=>{add_card_handle()}}>
              <span className="text-4xl text-blue-300" >+</span>
            </div>
            <button className="w-full p-2 bg-dark-yellow-hover text-white rounded">Add</button>
          </div>
        );
      case 'Favorite Mentors':
        return (
          <div className="space-y-4">
            {[1, 2, 3, 4].map((mentor) => (
              <div key={mentor} className="flex items-center justify-between bg-blue-600 p-2 rounded">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-dark-yellow-hover rounded-full mr-2"></div>
                  <div className="flex-grow">
                    <div className="h-2 bg-white rounded w-24 mb-1"></div>
                    <div className="h-2 bg-white rounded w-16"></div>
                  </div>
                </div>
                <button className="px-2 py-1 bg-dark-yellow-hover text-white rounded">Select</button>
              </div>
            ))}
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5, 6].map((page) => (
                <button key={page} className="bg-dark-yellow hover:bg-dark-yellow-hover text-white w-8 h-8 rounded-full">{page}</button>
              ))}
            </div>
          </div>
        );
      default:
        return <div>Content for {activeTab}</div>;
    }
  };

  return (
    <div className="bg-white p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-1/4 bg-dark-blue text-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <div className="space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`w-full text-left p-2 rounded flex items-center ${activeTab === tab.name ? 'bg-dark-yellow' : 'hover:bg-dark-yellow-hover'}`}
              onClick={() => setActiveTab(tab.name)}
            >
              <tab.icon className="mr-2" size={18} />
              {tab.name}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full md:w-3/4 bg-dark-blue text-white p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-4">{activeTab}</h2>
        {renderContent()}
      </div>
    </div>
  );
};

export default Settings_popups;