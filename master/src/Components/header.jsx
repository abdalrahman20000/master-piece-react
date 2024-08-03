import logo from "../images/logo.png"
import uicoon from "../images/uicoon.png"

function Header() {



    return (
        <>

            <header className="bg-dark-blue flex justify-between items-center p-4">
                <div className="header_logo w-1/5">
                    <a href="#"><img src={logo} alt="Logo" className="w-12 rounded-full bg-light-blue p-1" /></a>
                </div>

                <nav className="flex justify-center items-center w-auto hidden md:flex">
                    <ul className="flex space-x-2">
                        <li><a href="#" className="bg-light-blue text-dark-blue border border-white font-bold rounded-lg px-3 py-1">Home</a></li>
                        <li><a href="#" className="bg-light-blue text-dark-blue border border-white font-bold rounded-lg px-3 py-1">Session</a></li>
                        <li><a href="#" className="bg-light-blue text-dark-blue border border-white font-bold rounded-lg px-3 py-1">Subscription</a></li>
                        <li><a href="#" className="bg-light-blue text-dark-blue border border-white font-bold rounded-lg px-3 py-1">Contact</a></li>
                        <li><a href="#" className="bg-light-blue text-dark-blue border border-white font-bold rounded-lg px-3 py-1 max-md:hidden">Library</a></li>
                    </ul>
                </nav>

                <div className="header_icons flex justify-end items-center w-1/5">
                    <a href="#" className="bg-light-blue text-dark-blue border border-white font-bold rounded-lg px-3 py-1 mr-2 md:hidden max-md:hidden  max-xl:hidden">Library</a>
                    <a href="#"><img src={uicoon} alt="User Icon" className="w-11 rounded-full border-2 border-light-blue ml-2" /></a>
                    <button className="md:hidden ml-2 text-xl" >
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    {/* <button className="md:hidden ml-2 text-xl" onClick={toggleNavMenu}><AiOutlineMenu /></button> */}
                </div>

                {/* {isNavMenuOpen && ( */}
                {true && (
                    <div className="absolute top-12 right-0 bg-dark-blue rounded-lg p-4 flex flex-col space-y-2 w-56 md:hidden">
                        <a href="#" className="bg-light-blue text-dark-blue rounded-lg px-3 py-1">Profile</a>
                        <a href="#" className="bg-light-blue text-dark-blue rounded-lg px-3 py-1">Home</a>
                        <a href="#" className="bg-light-blue text-dark-blue rounded-lg px-3 py-1">Session</a>
                        <a href="#" className="bg-light-blue text-dark-blue rounded-lg px-3 py-1">Subscription</a>
                        <a href="#" className="bg-light-blue text-dark-blue rounded-lg px-3 py-1">Alerts</a>
                        <a href="#" className="bg-light-blue text-dark-blue rounded-lg px-3 py-1">Cards</a>
                        <a href="#" className="bg-light-blue text-dark-blue rounded-lg px-3 py-1">Library</a>
                        <a href="#" className="bg-light-blue text-dark-blue rounded-lg px-3 py-1">Contact</a>
                        <a href="#" className="bg-light-blue text-dark-blue rounded-lg px-3 py-1">Log out</a>
                    </div>
                )}
            </header>

        </>
    )
}


export default Header;