import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentForm = () => {

  const navigate = useNavigate()

  function cancel_handle(){
    navigate("/settings");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-blue-900 text-white rounded-lg shadow-lg w-full max-w-4xl p-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Card Information</h2>
            <div className="bg-blue-800 p-4 rounded-lg">
              <div className="mb-4">
                <input type="text" placeholder="Card Number" className="w-full bg-blue-700 text-white placeholder-blue-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className="bg-blue-700 text-white placeholder-blue-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <input type="text" placeholder="CVV" className="bg-blue-700 text-white placeholder-blue-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4">Personal Information</h2>
            <input type="text" placeholder="First Name" className="w-full bg-blue-800 text-white placeholder-blue-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Last Name" className="w-full bg-blue-800 text-white placeholder-blue-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" placeholder="Address" className="w-full bg-blue-800 text-white placeholder-blue-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="City" className="bg-blue-800 text-white placeholder-blue-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="text" placeholder="State" className="bg-blue-800 text-white placeholder-blue-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <input type="text" placeholder="Zip Code" className="w-full bg-blue-800 text-white placeholder-blue-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
            add
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={()=>{cancel_handle()}}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;