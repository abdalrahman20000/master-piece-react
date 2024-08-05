import React, { useState } from 'react';
import { Facebook } from 'lucide-react';
import { Link,useNavigate } from 'react-router-dom';

const SignUpPage_m = () => {

    const navigate = useNavigate();

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowConfirmation(true);
        
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen relative">
            {/* Left Side - Welcome Message */}
            <div className="w-full md:w-1/2 bg-[#000080] p-8 flex flex-col justify-center items-center text-white">
                <h1 className="text-5xl font-bold mb-6">Hello.</h1>
                <p className="mb-8 text-center">You are just a few steps away from becoming a mentor and sharing your expertise.</p>
                <div className="space-y-4 w-full max-w-xs">
                    <p className="text-sm text-center">Create account faster with...</p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-white text-[#000080] py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-300">
                            Google
                        </button>
                        <button className="bg-white text-[#000080] py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-300">
                            <Facebook className="mr-2" size={20} />
                            Facebook
                        </button>
                    </div>
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <p className="text-sm">If you already have an account...</p>
                    <Link to="/log-in-l">
                        <button className="mx-2 text-[#ffa700] hover:underline">Log in</button>
                    </Link>
                </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="w-full md:w-1/2 bg-[#ffa700] p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-[#000080]">Sign up as a Mentor</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-[#000080]">User name</label>
                        <input type="text" id="username" name="username" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-opacity-50 focus:outline-none focus:ring-[#000080] p-1 text-[#000080]" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#000080]">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-opacity-50 focus:outline-none focus:ring-[#000080] p-1 text-[#000080]" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-[#000080]">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-opacity-50 focus:outline-none focus:ring-[#000080] p-1 text-[#000080]" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#000080]">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-opacity-50 focus:outline-none focus:ring-[#000080] p-1 text-[#000080]" />
                    </div>
                    <div>
                        <label htmlFor="introVideo" className="block text-sm font-medium text-[#000080]">Intro Video URL</label>
                        <input type="url" id="introVideo" name="introVideo" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-opacity-50 focus:outline-none focus:ring-[#000080] p-1 text-[#000080]" />
                    </div>
                    <div>
                        <label htmlFor="cv" className="block text-sm font-medium text-[#000080]">CV (PDF)</label>
                        <input type="file" id="cv" name="cv" accept=".pdf" className="mt-1 block w-full text-sm text-[#000080] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#000080] file:text-white hover:file:bg-blue-900" />
                    </div>
                    <div>
                        <label htmlFor="expertise" className="block text-sm font-medium text-[#000080]">Areas of Expertise</label>
                        <input type="text" id="expertise" name="expertise" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-opacity-50 focus:outline-none focus:ring-[#000080] p-1 text-[#000080]" />
                    </div>
                    <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-[#000080]">Years of Experience</label>
                        <input type="number" id="experience" name="experience" min="0" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-opacity-50 focus:outline-none focus:ring-[#000080] p-1 text-[#000080]" />
                    </div>
                    <div>
                        <label htmlFor="availability" className="block text-sm font-medium text-[#000080]">Availability (hours per week)</label>
                        <input type="number" id="availability" name="availability" min="0" max="168" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#000080] focus:ring-2 focus:ring-opacity-50 focus:outline-none focus:ring-[#000080] p-1 text-[#000080]" />
                    </div>
                    
                    <button type="submit" className="w-full bg-[#000080] mt-4 text-white py-2 px-4 rounded-md hover:bg-blue-900 transition duration-300">Sign up</button>
                </form>
            </div>

            {/* Confirmation Message */}
            {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg text-center">
                        <p className="text-[#000080] text-xl mb-4">Your data has been uploaded and is being reviewed. Once completed, you will be contacted.</p>
                        <button
                            onClick={() => {setShowConfirmation(false),navigate("/");}}
                            className="bg-[#ffa700] text-[#000080] py-2 px-4 rounded-md hover:bg-yellow-600 transition duration-300"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SignUpPage_m;