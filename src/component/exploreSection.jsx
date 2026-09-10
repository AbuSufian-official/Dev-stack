import { Suspense, use, useState } from "react"
import Card from "./card"
import StackSection from "./stackSection"



const ExplorSection = ({techData}) => {

    let [stackData,setStackData]=useState([]);
    console.log(stackData)







    return (<>
        <div className="container mx-auto px-2">
            <div className="text-center md:text-start">
                <h2 className=" md:text-start text-3xl md:text-4xl font-extrabold tracking-[-1.5px] text-[#101828] ">
                    Explore the <span className="ml-2 bg-gradient-to-r from-[#ff512f] via-[#e91e63] to-[#9c27b0] bg-clip-text text-transparent">Technologies</span>
                </h2>
                <p className=" text-center md:text-start mt-1  text-[16px]  text-[#667085] sm:text-[14px]">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="py-7 grid md:grid-cols-4 gap-7 ">
                <Suspense fallback={<p>LODING...</p>}>
                <div className="grid md:grid-cols-3 gap-3 col-span-3">
                    
                     <Card techData={techData} stackData={stackData} setStackData={setStackData}/>
                    
                   

                </div>
                 </Suspense>
                <div>
                    <StackSection stackData={stackData} setStackData={setStackData}/>
                </div>
            </div>


















        </div>

    </>)
}


export default ExplorSection