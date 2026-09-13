import { RxHamburgerMenu } from "react-icons/rx";
import logo from './../assets/logo-text.png'
import { useState } from "react";
import { brandColor } from "../App";
const Navber = () => {

    let [isopen, setIsopen] = useState(false)
    const mobilemanu = () => {
        setIsopen(!isopen)
    }
    return (<>
        <header className="sticky top-0 left-0 z-50 border-b-1 border-b-slate-200">
            <nav className="backdrop-blur-sm">
                <div className="flex justify-between items-center w-[95%] mx-auto sm:px-2 py-3">
                    <div onClick={() => mobilemanu()} className=" cursor-pointer text-2xl md:hidden hover:bg-[#D91B7E] hover:text-white px-2 py-2 rounded-[10px]"><RxHamburgerMenu /></div>
                    <div className="hover:scale-105  md:w-auto transition-all flex items-center gap-1 sm:gap-2">
                        <img  src={logo} className="w-30% md:w-auto" />
                        <p className="text-[100%] sm:text-[23px] font-bold ">Dev <span className={`${brandColor} bg-clip-text text-transparent`}>Stack</span></p>
                        
                    </div>
                    <div className={`z-50 w-full overflow-hidden  border-b-1 border-b-slate-300 md:border-b-transparent md:border-b-0 backdrop-blur-sm bg-white rounded-b-2xl md:rounded-b-none md:w-auto absolute md:static top-17 left-0 md:bg-transparent md:inline-block ${isopen ? `block` : `hidden`}`}>
                        <ul className=" flex flex-col md:flex-row gap-5 justify-between items-center">
                            <li className="text-slate-600 cursor-pointer py-3 md:py-0 hover:bg-[#D91B7E] hover:text-white md:hover:bg-transparent md:hover:text-[#D91B7E] w-full md:w-auto text-center duration-300
                hover:-translate-y-1
                hover:scale-105">Home</li>
                            <li className="cursor-pointer py-3 md:py-0 hover:bg-[#D91B7E] hover:text-white md:hover:bg-transparent text-slate-600 md:hover:text-[#D91B7E] w-full md:w-auto text-center duration-300
                hover:-translate-y-1
                hover:scale-105">Technologies</li>
                            <li className="cursor-pointer text-slate-600 py-3 md:py-0 hover:bg-[#D91B7E] hover:text-white md:hover:bg-transparent md:hover:text-[#D91B7E] w-full md:w-auto text-center duration-300
                hover:-translate-y-1
                hover:scale-105">Projects</li>
                            <li className="cursor-pointer  text-slate-600 py-3 md:py-0 hover:bg-[#D91B7E] hover:text-white md:hover:bg-transparent md:hover:text-[#D91B7E] w-full md:w-auto text-center duration-300
                hover:-translate-y-1
                hover:scale-105">About</li>
                            <li className="cursor-pointer text-slate-600 py-3 md:py-0 hover:bg-[#D91B7E] hover:text-white md:hover:bg-transparent md:hover:text-[#D91B7E] w-full md:w-auto text-center duration-300
                hover:-translate-y-1
                hover:scale-105">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex justify-center items-center gap-1 sm:gap-4">
                            <li className="cursor-pointer hover:text-[#D91B7E] transition-all duration-300
                hover:-translate-y-1
                hover:scale-105
                ">Sign In</li>
                            <li className="cursor-pointer py-2.5 px-5 rounded-[70px] bg-[#D91B7E] text-white transition-all duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-lg">Sign Up</li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>




    </>)
}
export default Navber