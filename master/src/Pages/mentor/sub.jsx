import React from 'react';

const SubscriptionInfo = ({ type, purchaseDate, expiryDate }) => (
    <div className="bg-white rounded-lg p-4 text-blue-900">
        <h3 className="font-bold mb-2">Subscription Type</h3>
        <p>Type: {type}</p>
        <p>Purchase date: {purchaseDate}</p>
        <p>Expiry Date: {expiryDate}</p>
    </div>
);

const PaymentInfo = () => (
    <div className="bg-dark-blue rounded-lg p-4 text-blue-900">
        <input type="text" placeholder="User name" className="w-full mb-2 p-2 border rounded" />
        <input type="text" placeholder="0000 0000 0000 0000" className="w-full mb-2 p-2 border rounded" />
        <div className="flex justify-between">
            <input type="text" placeholder="MM / YY" className="w-1/2 mr-2 p-2 border rounded" />
            <input type="text" placeholder="CVC" className="w-1/3 p-2 border rounded" />
        </div>
        <div className="mt-4 border-t border-blue-300 pt-4">
            <div className="w-full h-32 border-2 border-dashed border-dark-yellow-hover flex items-center justify-center">
                <span className="text-4xl text-dark-yellow-hover ">+</span>
            </div>
        </div>
    </div>
);

const SubscriptionOption = ({ type, duration, price }) => (
    <div className="flex-col justify-center items-center bg-blue-700 rounded-lg p-4 text-white">
        <h2 className="font-bold m-2">{type}</h2>
        <div className="">
            <h3 className="font-bold mb-2">{duration}</h3>
            <p className="mb-4">{price}</p>
            <button className="bg-dark-yellow-hover text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Subscribe Now
            </button>
        </div>
    </div>
);

const SubPage = () => {
    return (
        <div className="bg-[#ffffff] min-h-screen p-4 text-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-dark-blue rounded-lg p-6">
                        <h2 className="text-2xl font-bold mb-4">Subscription Information</h2>
                        <div className="grid grid-cols-1 gap-4">
                            <SubscriptionInfo
                                type="Premium"
                                purchaseDate="30/12/2024"
                                expiryDate="30/12/2025"
                            />
                        </div>
                        <button className="mt-4 bg-dark-yellow-hover text-white px-6 py-2 rounded hover:bg-blue-800 transition">
                            Update
                        </button>
                    </div>
                    <PaymentInfo />
                </div>

                <h2 className="text-3xl font-bold mb-6 text-center text-dark-blue">Subscriptions</h2>
                <div className="grid md:grid-cols-3 gap-8 p-5 bg-dark-blue">
                    <SubscriptionOption type="" duration="One Month" price="$9.99/month" />
                    <SubscriptionOption type="" duration="Six Months" price="$8.99/month" />
                    <SubscriptionOption type="" duration="One Year" price="$7.99/month" />
                </div>
            </div>
        </div>
    );
};

export default SubPage;