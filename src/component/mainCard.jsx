import { useState} from "react";

const MainCard=({obj,stackData,setStackData})=>{


let [isSelectStack,setSelecIsSiack] =useState(false)
function handelSelectStackBtn(value){
  setSelecIsSiack(true)
  setStackData([...stackData,value])
}


    return(<>
    <div key={obj.id} className="text-[15px] w-full md:w-auto max-w-[540px] rounded-[28px] border border-[#e7edf5] bg-white px-4 py-6">
      
      {/* Top Section */}
      <div className="flex items-start justify-between">
        
        {/* React Logo */}
        <img src={obj.icon} alt={obj.name} width={'40px'}/>

        {/* Popular Badge */}
        <span className="rounded-full border border-[#d7edff] bg-[#f0f9ff] px-5 py-2  font-medium text-[#0798e8]">
          {obj.badge}
        </span>
      </div>

      {/* Content */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold leading-tight tracking-[-0.5px] text-[#111827]">
          {obj.name}
        </h2>

        <p className="mt-5 max-w-[470px]  font-normal leading-[1.6] tracking-[-0.2px] text-[#657895]">
          {obj.description}
        </p>
      </div>

      {/* Divider */}
      <div className="my-7 h-px w-full bg-[#edf1f6]" />

      {/* Information */}
      <div className="flex  items-center justify-between gap-2">
        
        {/* Category */}
        <span className="rounded-lg bg-[#f3f6fa] px-4 py-2  font-medium text-[#40516a]">
          {obj.category}
        </span>

        {/* Level */}
        <span className=" font-normal text-[#657895]">
          {obj.difficulty}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-1  font-medium text-[#40516a]">
          <span className=" text-[#ffb411]">★</span>
          <span>{obj.rating}</span>
        </div>
      </div>

      {/* Button */}
      <button
      onClick={()=>handelSelectStackBtn(obj)}
      disabled={isSelectStack}
        className="
          mt-7
          w-full
          rounded-[15px]
          bg-[#080d1b]
          px-5
          py-3
          
          font-medium
          text-white
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#111827]
          hover:shadow-[0_10px_25px_rgba(8,13,27,0.18)]
          active:translate-y-0
        "
      >
        {isSelectStack?"Seleted":'Add to Stack'}
      </button>
    </div>
    
    
    </>)
}
export default MainCard