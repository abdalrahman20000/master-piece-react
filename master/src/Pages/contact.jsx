import React from 'react';
import { Mail, Phone, Facebook } from 'lucide-react';

const ContactForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-dark-blue mb-2">Contact Us</h2>
          <p className="text-gray-600">We are happy for you to contact us to hear your opinions and help you</p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-6 max-sm:flex-wrap ">
          <button className="bg-dark-blue hover:bg-dark-blue-2 text-white py-2 px-4 rounded flex items-center max-sm:m-2 max-sm:w-[40%]">
            <Mail className="mr-2" size={18} />
            Email
          </button>
          <button className="bg-dark-yellow hover:bg-dark-yellow-hover text-white py-2 px-4 rounded flex items-center max-sm:m-2 max-sm:w-[40%]">
            <Phone className="mr-2" size={18} />
            Phone
          </button>
          <button className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded flex items-center max-sm:m-2 max-sm:w-[40%]">
            <Facebook className="mr-2" size={18} />
            Facebook
          </button>
        </div>
        
        <form>
          <div className="mb-4">
            <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-dark-yellow hover:bg-dark-yellow-hover text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;