import StackCard from "./stackCard"
import { Bounce,toast  } from "react-toastify";
const StackSection = ({stackData,setStackData}) => {


    function hendelRemoveAllBtn(){
        setStackData([])

          toast.success(`Remove all from stack`, {
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
    return (<>
        <div className=" border border-[#e7edf5] bg-white px-4 py-6 rounded-[20px]">
            <h3 className="text-2xl font-bold">Your Stack</h3>
            <p className="text-[15px] md:text-[13px] lg:text-[15px] text-[#667085]">
                
                {stackData.length==0?"No technologies selected yet.":`${stackData.length} Technology Selected`}
            </p>
            {stackData.length==0?(<div className="mt-6 flex flex-col justify-center items-center border border-dashed border-[#bdbec0] px-4 py-4 rounded-[20px]">
                <p className="text-[#667085c9]">Your stack is empty.</p>
            </div>):(<div className="flex flex-col gap-2 py-3">
                {stackData.map((stackObj)=>{
                    return(<>
                    <StackCard  stackObj={stackObj} stackData={stackData} setStackData={setStackData}  />
                    
                    </>)
                })}
                

            <button onClick={()=>hendelRemoveAllBtn()} className="mt-4 w-full py-2 border border-[#d82c20a7] text-[#D82C20] text-[19px] font-bold rounded-[10px] hover:bg-[#D82C20] hover:text-white transition-all">Remove All</button></div>
            )}



        </div>

    </>)
}
export default StackSection