import React from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Moon, Phone, Apple, PlayCircle } from 'lucide-react';

import logo from "../images/logo.png";

const Header = () => (
    <header className="bg-dark-blue p-4 flex justify-between items-center">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <div className="flex items-center space-x-2  rounded-full ">
                <Link to="/"><img src={logo} alt="Logo" className="w-10 h-10 bg-white p-[2px] rounded-full" /></Link>
            </div>
        </div>
        <div>
            <Link to="s-register"><button className="bg-dark-yellow-hover text-dark-blue px-4 py-2 rounded mr-2 hover:bg-opacity-90">Sign In</button></Link>
            <Link to="s-register"><button className="bg-white text-dark-blue px-4 py-2 rounded hover:bg-opacity-90">Sign Up</button></Link>
        </div>
    </header>
);

const Hero = () => (
    <div className="relative bg-blue-800 text-white py-20 px-4 text-center">
        <div className="absolute inset-0 overflow-hidden">
            <Moon className="absolute top-10 right-10 text-dark-yellow-hover w-20 h-20" />
        </div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Interactive programming classes with expert mentors.</h1>
            <Link to="/s-register">
                <button className="bg-dark-yellow-hover mt-10 text-dark-blue px-6 py-3 rounded-full text-lg flex items-center mx-auto hover:bg-opacity-90">
                    Get Started <ArrowRight className="ml-2" />
                </button>
            </Link>
        </div>
    </div>
);

const Subscriptions = () => (
    <div className="bg-white py-10 px-4">
        <h2 className="text-dark-blue text-3xl font-bold text-center mb-6">Subscriptions</h2>
        <div className="flex flex-wrap justify-between  w-full">
            {['ESSENTIAL', 'EXTRA', 'PREMIUM'].map((plan) => (
                <div key={plan} className="bg-dark-blue text-white p-6 rounded-lg w-[30%] max-sm:w-auto m-1">
                    <h3 className="text-xl font-bold mb-2">{plan}</h3>
                    <p>Features of {plan} plan</p>
                    <Link to="/s-register"><button className="mt-4 bg-dark-yellow-hover text-white px-4 py-2 rounded hover:bg-opacity-90">Choose Plan</button></Link>
                </div>
            ))}
        </div>
    </div>
);

const Experience = () => (
    <div className="bg-dark-yellow-hover py-10 px-4 flex flex-wrap items-center justify-between">
        <div className="w-full md:w-2/3 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold text-dark-blue mb-2">Get the experience</h2>
            <p className="text-dark-blue mb-4">that qualifies you for the job market.</p>
            <Link to="/s-register">
                <button className="bg-dark-blue text-white px-6 py-3 rounded-full flex items-center hover:bg-opacity-90">
                    subscribe now <ArrowRight className="ml-2" />
                </button>
            </Link>
        </div>
        <div className="w-full md:w-1/3 flex justify-center">
            <Phone className="text-dark-blue w-32 h-32" />
        </div>
    </div>
);

const MobileApp = () => (
    <div className="bg-dark-blue py-10 px-4 text-white flex flex-wrap items-center justify-between">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Coming soon to mobile phones</h2>
            <div className="flex space-x-4">
                <button className="bg-dark-yellow-hover text-dark-blue px-4 py-2 rounded flex items-center hover:bg-opacity-90">
                    <Apple className="mr-2" /> App Store
                </button>
                <button className="bg-dark-yellow-hover text-dark-blue px-4 py-2 rounded flex items-center hover:bg-opacity-90">
                    <PlayCircle className="mr-2" /> Google Play
                </button>
            </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
            <Phone className="text-white w-32 h-32" />
        </div>
    </div>
);

const Features = () => (
    <div className="bg-white py-10 px-4">
        <h2 className="text-3xl font-bold text-dark-blue text-center mb-6">Our Features</h2>
        <div className="flex flex-wrap justify-center gap-6">
            {['Live Coding Sessions', 'Expert Mentorship', 'Project-Based Learning'].map((feature) => (
                <div key={feature} className="bg-dark-yellow-hover p-6 rounded-lg shadow-md w-full sm:w-64">
                    <h3 className="text-xl font-bold text-dark-blue mb-2">{feature}</h3>
                    <p className="text-white">Description of {feature} and its benefits.</p>
                </div>
            ))}
        </div>
    </div>
);

const Testimonials = () => (
    <div className="bg-dark-yellow-hover py-10 px-4">
        <h2 className="text-3xl font-bold text-dark-blue text-center mb-6">What Our Students Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
            {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md w-full sm:w-80">
                    <p className="text-dark-blue mb-4">"This program has been transformative for my career. The mentors are exceptional!"</p>
                    <p className="font-bold text-dark-blue">- Student {i}</p>
                </div>
            ))}
        </div>
    </div>
);

const Footer = () => (
    <footer className="flex  justify-between items-center bg-dark-blue text-white py-6 px-4">
        <div className="flex items-center space-x-2  rounded-full ">
            <Link to="/"><img src={logo} alt="Logo" className="w-10 h-10 bg-white p-[2px] rounded-full" /></Link>
        </div>
        <div className="flex justify-between items-center">
            <p>© 2024 | All rights reserved</p>
            <div className="flex space-x-4">
                <a href="#" className="hover:text-dark-yellow-hover">Facebook</a>
                <a href="#" className="hover:text-dark-yellow-hover">Twitter</a>
                <a href="#" className="hover:text-dark-yellow-hover">LinkedIn</a>
            </div>
        </div>
    </footer>
);

const HomePage = () => {
    return (
        <div className="min-h-screen bg-dark-blue">
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