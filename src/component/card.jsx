import { use,} from "react";
import MainCard from "./mainCard";


const Card = ({techData,stackData,setStackData}) => {


let data=use(techData)








  return (


    <>
    {data.map((obj)=>{
      return(<>
              <MainCard  obj={obj} stackData={stackData} setStackData={setStackData}/>
      
      </>)
    })}






    </>
  );
};

export default Card;