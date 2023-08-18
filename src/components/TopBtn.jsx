import React, { useEffect, useState } from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const TopBtn = () => {
    const [visible, setVisible]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY>500) {
                setVisible(true)
            }
            else{
                setVisible(false)
            }
        }) 
    })
   const scroll=()=>{
    window.scrollTo({
        top:"0",
        behavior:"smooth",
    })
   }

  return (
    <>
       <button onClick={scroll} className='btn top-btn' style={{position:'fixed', display: visible? "block": "none", bottom:"50px", right:"30px", zIndex:"100"}}><KeyboardDoubleArrowUpIcon className='scroll fs-1'/></button>
    </>
  )
}

export default TopBtn