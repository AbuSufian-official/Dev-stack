import StackCard from "./stackCard"

const StackSection = () => {
    return (<>
        <div className=" border border-[#e7edf5] bg-white px-4 py-6 rounded-[20px]">
            <h3 className="text-2xl font-bold">Your Stack</h3>
            <p className="text-[15px] text-[#667085]">No technologies selected yet.</p>


            <div className="mt-6 flex flex-col justify-center items-center border border-dashed border-[#bdbec0] px-4 py-4 rounded-[20px]">
                <p className="text-[#667085c9]">Your stack is empty.</p>
            </div>


            <StackCard />
            <button className=" w-full py-2 border border-[#d82c20a7] text-[#D82C20] text-[19px] font-bold rounded-[10px] hover:bg-[#D82C20] hover:text-white transition-all">Remove All</button>

        </div>

    </>)
}
export default StackSection