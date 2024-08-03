import React from 'react';
import { Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUpPage_l = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Left Side - Welcome Message */}
            <div className="w-full md:w-1/2 bg-indigo-900 p-8 flex flex-col justify-center items-center text-white">
                <h1 className="text-5xl font-bold mb-6">Hello.</h1>
                <p className="mb-8 text-center">You are just a few steps away from increasing your practical experience.</p>
                <div className="space-y-4 w-full max-w-xs">
                    <p className="text-sm text-center">Create account faster with...</p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-white text-indigo-900 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-300">
                            {/* <Google className="mr-2" size={20} /> */}
                            Google
                        </button>
                        <button className="bg-white text-indigo-900 py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-300">
                            <Facebook className="mr-2" size={20} />
                            Facebook
                        </button>
                    </div>
                </div>
                <div className="mt-8">
                    <p className="text-sm">If you have already an account...</p>
                    <Link to="/log-in-l">
                        <button className="mt-2 text-sky-300 hover:underline">Log in</button>
                    </Link>
                </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="w-full md:w-1/2 bg-sky-300 p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900">Sign up</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-indigo-900">User name</label>
                        <input type="text" id="username" name="username" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-indigo-900">Email</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-indigo-900">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-indigo-900">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    </div>
                    
                    <Link to="/log-in-l">
                        <button type="submit" className="w-full bg-white mt-4 text-indigo-900 py-2 px-4 rounded-md hover:bg-indigo-100 transition duration-300">Sign up</button>

                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SignUpPage_l;