import { Bounce, ToastContainer, toast } from 'react-toastify'
const App=()=>{
  let tostyfy=()=>{
   return toast('🦄 Wow so easy!', {
position: "bottom-right",
autoClose: 2000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  }
  return(<>
  <p className='text-2xl text-red-600' onClick={()=>tostyfy()}>Dev stack</p>

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