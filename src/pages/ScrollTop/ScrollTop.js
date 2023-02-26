import { Button } from 'bootstrap'
import React from 'react'
import { useState } from 'react'
// import 'Scroll.css'
const ScrollTop = ()=> {
    const [visible, setVisible] = useState(false);


    const toggleVisible=()=>{
        const scrolled = document.getElement.ScrollTop;

        if(scrolled>300)
        {
            setVisible(true)

        }
        else if(scrolled<=300)
        {
            setVisible(false)
        }
    };
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    }
  return (
    <>
    {visible &&(
        <Button className='btnClass'
        pos="fixed"
        bottom="50px"
        zIndex="1000"
        right={50}
        onClick={scrollToTop}
        colorScheme="green"
        >lk
            <text
            mr="4"
            >
                Back to Top
            </text>
            
                <span style={{display:visible ? "inline":"none"}}></span>

        </Button>
    )}

    </>
  )
}

export default ScrollTop