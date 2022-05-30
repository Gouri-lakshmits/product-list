import React, { useEffect, useState } from 'react';
import {Button} from 'react-bootstrap';
import './Products.css';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
function Products() {
  const [click,setClick] = useState(false)
  const  handleButton =()=> setClick(!click)
   const showButton = ()=>{
      if(window.innerWidth <= 960){

        setClick(true)

      }
      else{
        setClick(false)
      }
   }
  //  const view = ()=>{
  //    if(setClick(false)){
  //      showButton()
  //    }
  //    else{
  //     console.log("h1");
  //    }
  //  }

   useEffect(()=>{
     showButton()
    
   },[])

window.addEventListener('resize', showButton )

  return ( <>
   <div className='menu-icon' onClick={handleButton} >
            <i className={!click ?'fa fa fa-times': 'fa fa-bars'}></i>
            <i className=''></i>
        </div>
   <div className='filter p-3 border border-light-3'>
     <h4 className='head' >Filter</h4>
     <div className='category'>
       <dt>FILTER BY CATEGORY</dt>
       <dd>Men</dd>
       <dd>Speakers</dd>
       <dd>Women</dd>
     </div>
<div className='colors'>
  <dt className='color'>FILTER BY COLOR</dt>
<div class="foo blue"></div>   
  <div class="foo purple"></div> 
  <div class="foo wine"></div> 
  <div class="foo red"></div> 
  <div class="foo white"></div>   
  <div class="foo green"></div>   
  <div class="foo yellow"></div> 
  <div class="foo black"></div> 
</div>
<div className="size">
<dt className='button'>FILTER BY SIZE</dt>
<Button variant="outline-dark">XS</Button>{' '}
  <Button variant="outline-dark">S</Button>{' '}
  <Button variant="outline-dark">M</Button>{' '}
  <Button variant="outline-dark">XL</Button>{' '}
  <Button variant="outline-dark">XXL</Button>{' '}
</div>
<div className='pattern'>
<dt>PATTERN</dt>
<dd>Brocade</dd>
<dd>Embroidery</dd>
<dd>zari works</dd>
</div>
<div className='fabric'>
  <dt>FABRIC</dt>
  <dd>Kanchipuram sliks</dd>
  <dd>Net2</dd>
</div>
<div className='price'>
<dt>PRICE</dt>
<Box width={250}>
      <Slider
        size="small"
        defaultValue={100}
        aria-label="Small"
        valueLabelDisplay="auto"
        color="primary"
      />
    </Box>
    </div>
</div>
</>
  )
}

export default Products
