import sideimg from './../assets/banner-stack.png'
import { brandColor } from '../App';
const Hero = () => {
    //bg-gradient-to-r from-[#ff512f] via-[#e91e63] to-[#9c27b0]
    return (
        <section className="w-full overflow-hidden bg-white">
            <div className="w-[95%] mx-auto px-1 sm:px-2 flex flex-col md:flex-row gap-0 sm:gap-2 justify-between items-center py-5 md:py-2 ">

                {/* LEFT CONTENT */}
                <div className="flex flex-col justify-center items-center md:items-start md:justify-normal w-full md:w-[55%]">

                    <h1 className="text-center md:text-start text-[29px] sm:text-[36px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#101828] sm:text-[42px] md:text-[30px] lg:text-5xl 2xl:text-5xl">
                        Build Your Ideal
                        <span className= {`block ${brandColor} bg-clip-text text-transparent`}>
                            Development Stack
                        </span>
                    </h1>

                    <p className=" text-center md:text-start mt-5 max-w-[480px] text-[16px] leading-[1.7] text-[#667085] sm:text-[14px]">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits
                        your next project.
                    </p>

                
                    <div className="mt-8 text-[14px] flex items-center gap-1 sm:gap-4">

                        <button
                            className={`
                rounded-md
                ${brandColor}
                px-3 py-2
                
                 font-semibold text-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-1
                hover:scale-105
                hover:shadow-lg
              `}
                        >
                            Explore Technologies
                        </button>

                        <button
                            className="
                rounded-md
                border border-[#e4e7ec]
                bg-white
                px-7 py-2
                 font-medium text-[#475467]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#cbd5e1]
                hover:bg-[#f9fafb]
                hover:shadow-md
              "
                        >
                            Learn More
                        </button>

                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <img
                            src={sideimg}
                            alt="Development Stack"
                            className="
                            
                md:w-[45%]
                
                object-contain
                transition-all duration-500
                group-hover:-translate-y-2
                group-hover:scale-105
                
              "
                        />
               

                

            </div>
        </section>
    );
};

export default Hero;