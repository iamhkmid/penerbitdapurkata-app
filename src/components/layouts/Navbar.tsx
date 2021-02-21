import { useContext } from "react";
import { NavContext } from "../../contexts/NavContextProvider";
import NavMenu from "../buttons/NavMenu"

const Navbar = () => {
    const { navToggle, changeNavToggle } = useContext(NavContext)
    const toggleHandler = () => {
        navToggle == true ? changeNavToggle(false) : changeNavToggle(true)
    }
    return (
        <nav className="shadow-md fixed w-full bg-white font-poppins">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-10 cursor-pointer" src="/icons/dapurkata.svg" alt="Workflow"></img>
                        </div>

                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavMenu addClass="" />
                            </div>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={toggleHandler}
                            className={`${navToggle === true ? "bg-purple-400 text-gray-800" : "bg-gray-200 text-gray-800 "}  inline-flex items-center justify-center p-2 rounded-full   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-purple-500 focus:ring-white`}>
                            <span className="sr-only">Open main menu</span>

                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>

                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${navToggle === true ? "block" : "hidden"} md:hidden`} >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <NavMenu addClass="block" />
                </div>

            </div>

        </nav>



    )
}


export default Navbar;