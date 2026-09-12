import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { Bounce,toast  } from "react-toastify";
import { IoIosStar } from "react-icons/io";

const MainCard = ({ obj, stackData, setStackData }) => {


  let [isSelectStack, setSelecIsSiack] = useState(false)
  function handelSelectStackBtn(value) {
    setSelecIsSiack(true)


    if (Boolean(stackData.find(n => n.id == value.id))) {
      toast.error(`${value.name} alredy added `, {
position: "bottom-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});


      return;
    } else {
      setStackData([...stackData, value])




      toast.success(`${value.name} add to stack`, {
position: "bottom-right",
autoClose: 1000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});





    }

  }



  return (<>


{/*daisuy ui card*/}
{/* text-[#0798e8]  bg-[#f0f9ff]  border-[#d7edff]*/}
<div key={obj.id} className={`border rounded-[28px] ${isSelectStack ? `border-[#D91B7E]` : `border-[#e7edf5]`} card w-auto bg-base-100 shadow-sm`}>
  <div className="card-body">
    <div className="flex justify-between">
      <img src={obj.icon} alt={obj.name} width={'40px'} />
      <span className={`rounded-full border  px-5 py-2  font-medium ${obj.bodyColor}  ${obj.textColor}`}>{obj.badge}</span>
    </div>
    <div>
      <h3 className="text-2xl font-bold leading-tight tracking-[-0.5px] text-[#111827]">{obj.name}</h3>
      <p className="mt-5  font-normal leading-[1.6] tracking-[-0.2px] text-[#657895]">
          {obj.description}
        </p>
    </div>

    {/* Divider */}
    <div className="my-7 h-px w-full bg-[#edf1f6]" />

    <div className="flex justify-between items-center">
      <span className="rounded-lg bg-[#f3f6fa] px-4 py-2  font-medium text-[#40516a]">{obj.category}</span>
      <span className=" font-normal text-[#657895]">{obj.difficulty}</span>
      <span className="flex items-center"><span className="text-[#ffb411]"><IoIosStar /></span> {obj.rating}</span>
    </div>
    
    <div className="mt-2">
      <button onClick={() => handelSelectStackBtn(obj)}

        className={`
          ${isSelectStack ? `bg-[#d91b7d34]` : `bg-[#080d1b]`} 
          ${isSelectStack ? `text-[#d91b7d]` : `  text-white`}    mt-7  w-full   rounded-[15px]  justify-center  px-5  py-3  items-center  font-bold   text-center   flex   flex-row  transition-all  duration-300  hover:-translate-y-1  hover:shadow-[0_10px_25px_rgba(8,13,27,0.18)] active:translate-y-0
        `}>{isSelectStack ? (<span className="flex items-center gap-3"><FaCheck />Add to Stack </span>) : 'Add to Stack'}</button>
    </div>
  </div>
</div>


















  </>)
}
export default MainCard