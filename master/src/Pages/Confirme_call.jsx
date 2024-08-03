import React from 'react';
import { useNavigate } from "react-router-dom";
import { User, Camera, Mic, Phone } from 'lucide-react';

const ConfirmInformation = () => {

  const navigate = useNavigate();


  function cancel_call_handle(){
    navigate("/sessions");
  }

  function call_handle(){
    navigate("/call-sesstion");
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-blue-900 text-white rounded-lg shadow-lg w-full max-w-4xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold mb-6">Confirm information</h2>
            {['User name', 'User name', 'User name', 'User name'].map((label, index) => (
              <div key={index} className="space-y-1">
                <label className="text-sm text-blue-300">{label}</label>
                <input 
                  type="text" 
                  className="w-full bg-blue-800 text-white placeholder-blue-400 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ))}
            <button onClick={() => { call_handle() }} className="mt-4 bg-white text-blue-900 px-4 py-2 rounded hover:bg-blue-100 transition duration-300">
              Confirm
            </button>
          </div>
          
          <div className="bg-blue-400 p-6 flex flex-col justify-between">
            <div className="flex justify-center items-center h-48">
              <User size={80} className="text-blue-900" />
            </div>
            <div className="flex justify-center space-x-6 mt-auto">
              <button className="bg-blue-900 p-3 rounded-full hover:bg-blue-800 transition duration-300">
                <Camera size={24} />
              </button>
              <button className="bg-blue-900 p-3 rounded-full hover:bg-blue-800 transition duration-300">
                <Mic size={24} />
              </button>
              <button onClick={() => { cancel_call_handle() }} className="bg-blue-900 p-3 rounded-full hover:bg-blue-800 transition duration-300">
                <Phone size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmInformation;