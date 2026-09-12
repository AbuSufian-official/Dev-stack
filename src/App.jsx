import { Bounce, ToastContainer, toast } from 'react-toastify'
import Navber from './component/navber'
import Hero from './component/hero'
import ExplorSection from './component/exploreSection'

import Footer from './component/footer'

import { Suspense, useState } from "react"
import Loader from './component/loder'
import StackSection from './component/stackSection'
import Card from './component/card'
const App=()=>{

 const techData= async() => {

        let fetchData=await fetch('/data.json')
        let convertJson=await fetchData.json()
        return convertJson
    }
    let [techDataa]=useState(techData())
    let [stackData,setStackData]=useState([]);
    let [isStackhasSelectedDataObj,setIsStackhasSelectedDataObj]=useState()
   

  
  
  return(<>
  <Navber/>
    <Hero/>





          <div className="w-[95%]  mx-auto px-2">
              <div className="text-center md:text-start">
                  <h2 className=" md:text-start text-3xl md:text-4xl font-extrabold tracking-[-1.5px] text-[#101828] ">
                      Explore the <span className="ml-2 bg-gradient-to-r from-[#ff512f] via-[#e91e63] to-[#9c27b0] bg-clip-text text-transparent">Technologies</span>
                  </h2>
                  <p className=" text-center md:text-start mt-1  text-[16px]  text-[#667085] sm:text-[14px]">
                      Pick one technology per category to build your ideal stack.
                  </p>
              </div>
  
              <div className="py-7 grid md:grid-cols-4 gap-7 ">
                  <Suspense fallback={<div className="md:col-span-3"><Loader/></div>}>
                  <div className="grid sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-3 md:col-span-3">
                      
                       <Card  techData={techDataa} stackData={stackData} setStackData={setStackData} isStackhasSelectedDataObj={isStackhasSelectedDataObj} setIsStackhasSelectedDataObj={setIsStackhasSelectedDataObj}  />
                      
                  </div>
                   </Suspense>
                  <div>
                      <StackSection  stackData={stackData} setStackData={setStackData}  isStackhasSelectedDataObj={isStackhasSelectedDataObj}  setIsStackhasSelectedDataObj={setIsStackhasSelectedDataObj}/>
                  </div>
              </div>
  
  
          </div>







































































    {/* <ExplorSection techData={techData()}/> */}





    <Footer/>
  <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>







  </>)
}
export default App