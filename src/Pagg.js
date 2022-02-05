import React, { useEffect, useState } from 'react';
import './App.css';
import Pagination from '@material-ui/lab/Pagination';
function Pagg({ show, changePag }
) {
  const [counter, setcounter] = useState(1)

  useEffect(() => {
    const value = show * counter

    changePag(value - show, value)
  }, [counter])
  const previousButton = () => {

    if (counter === 1) {
      setcounter(1)

    }
    else {
      setcounter(counter - 1)
    }
  }
  const nextButton = () => {

    if (counter === 10) {
      setcounter(counter)

    }
    else {
      setcounter(counter + 1)
    }
  }

  return <div>
    <div>
      {/* <button className='btn1' onClick={() => previousButton()} >Pre</button>
      <h3 className='h3'>{counter} of 10 </h3>
    </div>
   <div>
    <button className='btn2' onClick={() => nextButton()} >Next</button> */}
   </div>

   <div className='Mui'>

     <Pagination count={10}  onChange={(event,value)=>setcounter(value)} 
       color="primary"  size='large'/>

     </div>
     
  </div>
   
}

export default Pagg;
