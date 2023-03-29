import React, { useEffect, useState } from 'react';
import Model from '../Model/Model';
import Singlecard from '../Singlecard/Singlecard';


const Card = () => {
  const [data, setdata] = useState([]);
  const [showall, setshowall] = useState(false);
  const [modal,setmodal]=useState(null);
  const [singleData, setSingleData] = useState({});

// console.log(modal)


function sortData(){
 const sortbaox=data.sort((a,b)=>{
  return  new Date(a.published_in) - new Date(b.published_in)
   
 })
 setdata([...data,sortbaox])

}

  useEffect(() => {
    const databox = async () => {
      const res = await fetch("https://openapi.programming-hero.com/api/ai/tools")
      const value = await res.json();
      setdata(value.data.tools);
    }
    databox();
  },)

// console.log(singleData)

useEffect(()=>{

    fetch(`https://openapi.programming-hero.com/api/ai/tool/${modal}`)
  .then(res=>res.json()).then(data=>setSingleData(data.data));

},[modal])




  function clickshowbox() {
    setshowall(true)
  }

  return (
    <> 
    <div className=' text-center p-2'>
    <span onClick={sortData} className=' inline-block text-center mx-auto'>
        <button className=' rounded-lg text-center  bg-[#0065fc] text-white p-2 '> Sort by Date</button>
       </span>
    </div>
      
      <div className=' grid md:grid-cols-3 gap-8'>
        {
          data.slice(0, showall ? 12 : 6).map(data => <Singlecard singledata={data} key={data.id} setmodal={setmodal}></Singlecard>)
        }
      </div>

      {
        !showall && <button onClick={clickshowbox} className='  inline-block  text-xl font-bold bg-blue-700 text-white p-2 rounded-lg text-center'> See more</button>

      }
      <Model singleData={singleData}></Model>
    </>
  );
};

export default Card;