import { RxCross1 } from "react-icons/rx";


const StackCard = ({stackData,setStackData}) => {
    return (<>
        <div className="border border-[#66708593] flex justify-between items-center px-4 rounded-[10px]">
            <div className="flex justify-center items-center gap-2"> 
                <div>
                    <RxCross1 />
                </div>
                
                <div>
                    <p className="text-[16px] font-bold">Name</p>
                    <p className="text-[12px] font-bold text-[#667085ad] ">Frontend</p>
                </div>
            </div>
            <div>
                <RxCross1 />
            </div>



        </div>
    </>)
}
export default StackCard