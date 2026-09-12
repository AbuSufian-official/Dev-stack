import { Bounce, ToastContainer, toast } from 'react-toastify'
import Navber from './component/navber'
import Hero from './component/hero'
import ExplorSection from './component/exploreSection'
import Footer from './component/footer'
const App=()=>{
 const techData= async() => {

        let fetchData=await fetch('/data.json')
        let convertJson=await fetchData.json()
        return convertJson
    }
  
  return(<>
  <Navber/>
    <Hero/>
    <ExplorSection techData={techData()}/>
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