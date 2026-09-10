import { Bounce, ToastContainer, toast } from 'react-toastify'
import Navber from './component/navber'
import Hero from './component/hero'
import ExplorSection from './component/exploreSection'
import Footer from './component/footer'
const App=()=>{

  
  return(<>
  <Navber/>
    <Hero/>
    <ExplorSection/>
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