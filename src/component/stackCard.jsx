import { RxCross1 } from "react-icons/rx";
import { toast,Bounce } from 'react-toastify';

const StackCard = ({ stackData, setStackData, stackObj }) => {

    function handelDelBtn(value) {
        if (stackData.includes(value)) {
            let filterData = stackData.filter((n) => n.id !== value.id)
            setStackData(filterData)
            

            toast.success(`${value.name} remove from stack`, {
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
        <div className="border border-[#66708593] flex justify-between items-center px-4 py-3 rounded-[10px]">
            <div className="flex justify-center items-center gap-0 sm:gap-2">
                <div>
                    <img src={stackObj.icon} alt={stackObj.name} width={'30px'} />
                </div>

                <div>
                    <p className="text-[16px] font-bold">{stackObj.name}</p>
                    <p className="text-[12px] font-bold text-[#667085ad] ">{stackObj.category}</p>
                </div>
            </div>
            <div>
                <button onClick={() => handelDelBtn(stackObj)} className="cursor-pointer hover:text-[#D91B7E]  text-[23px]">
                    <RxCross1 />
                </button>

            </div>
        </div>
    </>)
}
export default StackCard