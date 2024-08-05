import React from 'react';
import { Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignInPage_m = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen">
            {/* Left Side - Sign In Form */}
            <div className="w-full md:w-1/2 bg-dark-yellow-hover p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-6 text-dark-blue">Log in</h2>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-dark-blue">User name</label>
                        <input type="text" id="username" name="username" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-blue focus:ring-2  focus:ring-opacity-50 focus:outline-none  focus:ring-dark-blue p-1 text-dark-yellow-hover" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-dark-blue">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-dark-blue  focus:ring-opacity-50 focus:outline-none focus:ring-2 focus:ring-dark-blue p-1 text-dark-yellow-hover" />
                    </div>
                    <Link to="/l">
                        <button type="submit" className="w-full mt-3 bg-white text-dark-blue py-2 px-4 rounded-md hover:bg-indigo-100 transition duration-300">Log in</button>

                    </Link>
                </form>
            </div>

            {/* Right Side - Welcome Back */}
            <div className="w-full md:w-1/2 bg-dark-blue p-8 flex flex-col justify-center items-center text-white">
                <h2 className="text-4xl font-bold mb-4">Welcome back.</h2>
                <p className="mb-8 text-center">You are just a few steps away from increasing your practical experience.</p>
                <div className="space-y-4 w-full max-w-xs">
                    <button className="w-full bg-white text-dark-blue py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-300">
                        {/* <Google className="mr-2" size={20} /> */}
                        Log in with Google
                    </button>
                    <button className="w-full bg-white text-dark-blue py-2 px-4 rounded-md flex items-center justify-center hover:bg-gray-100 transition duration-300">
                        <Facebook className="mr-2" size={20} />
                        Log in with Facebook
                    </button>
                </div>
                <div className="mt-8 flex justify-center items-center">
                    <p className="text-sm">If you don't have an account...</p>
                    <Link to="/sign-up-m">
                        <button className="mx-2 text-dark-yellow-hover hover:underline">Sign up</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignInPage_m;