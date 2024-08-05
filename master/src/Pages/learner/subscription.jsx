

function Subscription() {

    return (
        <>
            <div className="p-10 max-sm:p-1">
                <div className="bg-blue-900 text-white min-h-screen p-0  ">


                    <main className="space-y-6">
                        <div className="flex flex-wrap justify-between items-center">
                            <section className="bg-dark-blue p-4 rounded-lg w-[47%] max-lg:w-full max-md:w-full max-sm:w-full  m-4">
                                <h2 className="text-xl font-semibold mb-4">Subscription Information</h2>
                                <div className="grid md:grid-cols-1 gap-4">

                                    {/* <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span>Subscription Type</span>
                                            <span>Premium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Purchase date</span>
                                            <span>30/10/2024</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Expiry Date</span>
                                            <span>30/10/2025</span>
                                        </div>
                                    </div> */}

                                    <div className="w-full">
                                        <div className="flex justify-between">
                                            <span>Subscription Type</span>
                                            <span className="text-dark-yellow-hover">Premium</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Purchase date</span>
                                            <span className="text-dark-yellow-hover">30/10/2024</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Expiry Date</span>
                                            <span className="text-dark-yellow-hover">30/10/2025</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="mt-4 px-4 py-2 bg-dark-yellow-hover text-white  rounded">Update</button>
                            </section>

                            <section className="bg-dark-blue p-4 rounded-lg w-[47%] max-lg:w-full max-md:w-full max-sm:w-full  m-4">
                                <h2 className="text-xl font-semibold mb-4">Card Information</h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <input className="w-full px-3 py-2 bg-white text-dark-yellow-hover placeholder-dark-yellow text-lg rounded" placeholder="0000 0000 0000 0000" />
                                        <div className="flex space-x-2">
                                            <input className="w-1/2 px-3 py-2 bg-white text-dark-yellow-hover placeholder-dark-yellow text-lg rounded" placeholder="MM/YY" />
                                            <input className="w-1/2 px-3 py-2 bg-white text-dark-yellow-hover placeholder-dark-yellow text-lg rounded" placeholder="CVC" />
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="w-full h-32 border-2 border-dashed border-dark-yellow-hover flex items-center justify-center">
                                            <span className="text-4xl ">+</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <section className="p-3">
                            <h2 className="text-2xl font-semibold mb-4">Subscriptions</h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                {['ESSENTIAL', 'EXTRA', 'PREMIUM'].map((plan) => (
                                    <div key={plan} className="bg-dark-blue p-4 rounded-lg">
                                        <h3 className="text-lg font-semibold mb-2">{plan}</h3>
                                        <ul className="space-y-2">
                                            {[1, 2, 3, 4, 5].map((item) => (
                                                <li key={item} className="flex items-center">
                                                    <span className="w-4 h-4 mr-2 bg-blue-700 rounded-full"></span>
                                                    <span className="flex-grow h-2 bg-blue-700 rounded"></span>
                                                </li>
                                            ))}
                                        </ul>
                                        <button className="mt-4 w-full px-4 py-2 bg-dark-yellow-hover text-white rounded">Subscribe</button>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Subscription;