import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Moon, Phone, Apple, PlayCircle } from 'lucide-react';

const Header = () => (
    <header className="bg-blue-900 p-4 flex justify-between items-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <Moon className="text-blue-900" />
        </div>
        <div>
            <Link to="s-register"><button className="bg-blue-700 text-white px-4 py-2 rounded mr-2">Sign In</button></Link>
            <Link to="s-register"><button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button></Link>


        </div>
    </header>
);

const Hero = () => (
    <div className="relative bg-blue-800 text-white py-20 px-4 text-center">
        <div className="absolute inset-0 overflow-hidden">
            <Moon className="absolute top-10 right-10 text-white w-20 h-20 opacity-50" />
            {/* <Wolf className="absolute bottom-10 left-10 text-white w-16 h-16 opacity-30" />
      <Wolf className="absolute top-1/4 left-1/4 text-white w-12 h-12 opacity-20" />
      <Wolf className="absolute bottom-1/4 right-1/4 text-white w-14 h-14 opacity-25" /> */}
        </div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Interactive programming classes with expert mentors.</h1>
            <Link to="/s-register">
                <button className="bg-blue-500 mt-10 text-white px-6 py-3 rounded-full text-lg flex items-center mx-auto">
                    Get Started <ArrowRight className="ml-2" />
                </button>
            </Link>
        </div>
    </div>
);

const Subscriptions = () => (
    <div className="bg-blue-700 py-10 px-4">
        <h2 className="text-white text-3xl font-bold text-center mb-6">Subscriptions</h2>
        <div className="flex flex-wrap justify-center gap-4">
            {['ESSENTIAL', 'EXTRA', 'PREMIUM'].map((plan) => (
                <div key={plan} className="bg-blue-600 text-white p-6 rounded-lg w-full sm:w-auto">
                    <h3 className="text-xl font-bold mb-2">{plan}</h3>
                    <p>Features of {plan} plan</p>
                    <Link to="/s-register"><button className="mt-4 bg-blue-500 px-4 py-2 rounded hover:bg-blue-400">Choose Plan</button></Link>

                </div>
            ))}
        </div>
    </div>
);

const Experience = () => (
    <div className="bg-blue-300 py-10 px-4 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-2/3 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Get the experience</h2>
            <p className="text-blue-800 mb-4">that qualifies you for the job market.</p>
            <Link to="/s-register">
                <button className="bg-blue-900 text-white px-6 py-3 rounded-full flex items-center">
                    subscribe now <ArrowRight className="ml-2" />
                </button>
            </Link>

        </div>
        <div className="w-full md:w-1/3 flex justify-center">
            <Phone className="text-blue-900 w-32 h-32" />
        </div>
    </div>
);

const MobileApp = () => (
    <div className="bg-blue-800 py-10 px-4 text-white flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Coming soon to mobile phones</h2>
            <div className="flex space-x-4">
                <button className="bg-black text-white px-4 py-2 rounded flex items-center">
                    <Apple className="mr-2" /> App Store
                </button>
                <button className="bg-black text-white px-4 py-2 rounded flex items-center">
                    <PlayCircle className="mr-2" /> Google Play
                </button>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
            <Phone className="text-white w-32 h-32" />
        </div>
    </div>
);

// New Sections

const Features = () => (
    <div className="bg-blue-100 py-10 px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">Our Features</h2>
        <div className="flex flex-wrap justify-center gap-6">
            {['Live Coding Sessions', 'Expert Mentorship', 'Project-Based Learning'].map((feature) => (
                <div key={feature} className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{feature}</h3>
                    <p className="text-blue-600">Description of {feature} and its benefits.</p>
                </div>
            ))}
        </div>
    </div>
);

const Testimonials = () => (
    <div className="bg-blue-200 py-10 px-4">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-6">What Our Students Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md w-full sm:w-80">
                    <p className="text-blue-800 mb-4">"This program has been transformative for my career. The mentors are exceptional!"</p>
                    <p className="font-bold text-blue-900">- Student {i}</p>
                </div>
            ))}
        </div>
    </div>
);

const Footer = () => (
    <footer className="bg-blue-900 text-white py-6 px-4">
        <div className="flex justify-between items-center">
            <p>© 2024 | All rights reserved</p>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300">Facebook</a>
                <a href="#" className="hover:text-blue-300">Twitter</a>
                <a href="#" className="hover:text-blue-300">LinkedIn</a>
            </div>
        </div>
    </footer>
);

const HomePage = () => {
    return (
        <div className="min-h-screen bg-blue-900">
            <Header />
            <Hero />
            <Subscriptions />
            <Experience />
            <Features />
            <Testimonials />
            <MobileApp />
            <Footer />
        </div>
    );
};

export default HomePage;