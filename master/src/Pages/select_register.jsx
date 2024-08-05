import React from 'react';
import { Link } from 'react-router-dom';

const RegisterSelection = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            <div className="w-full md:w-1/2 p-8 bg-dark-blue text-white flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-4">Mentor</h2>
                <p className="text-xl mb-4">Benefit financially</p>
                <p className="text-center mb-6">
                    If you have experience in programming and see yourself as capable of training
                </p>
                <Link to="/log-in-m">
                    <button className="bg-dark-yellow text-indigo-900 px-6 py-2 rounded-full font-semibold hover:bg-dark-yellow-hover transition duration-300">
                        Register now →
                    </button>
                </Link>
            </div>
            <div className="w-full md:w-1/2 p-8 bg-dark-yellow-hover text-white flex flex-col justify-center items-center">
                <h2 className="text-3xl font-bold mb-4">Learner</h2>
                <p className="text-xl mb-4">Increase your experience</p>
                <p className="text-center mb-6">
                    Increase your experience and get a training certificate that will help you find the right job
                </p>
                <Link to="/log-in-l">
                    <button className="bg-dark-blue text-white px-6 py-2 rounded-full font-semibold hover:bg-dark-blue-2 transition duration-300">
                        Register now →
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RegisterSelection;