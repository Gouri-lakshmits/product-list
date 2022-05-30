import React from 'react'
import './Footer.css'
function Footer() {
  return (
         <div className='grid p-4'>
            <div className="row serch">
                <div className="col-md-5 mt-5  new">
                    <h6 className='text-center nw fw-bolder text-white'>NEWS LETTER</h6>
                    <p className='text-white fw-lighter'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly
                        used to demonstrate the visual form of a document or a typeface without relying
                        on meaningful content.</p>
                    <form className="d-flex former mb-4 ">
                        <input className="form-control " type="search" placeholder="Enter your email" aria-label="Search" />
                        <button className="btn btn-dark sub " type="submit">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            <div className="row d-flex  main-row">
                <div className="col-md-3 ms-4">
                    <ul className='list-unstyled '>
                        <h6 className=' top-head head'>Email</h6>
                        <a className='atag' href='' ><li><i className="fa  fa-3x fa-envelope-o me-3" aria-hidden="true"></i>mail@mahalekshmi.com</li></a>
                        <li> <h6 className=' mt-4 head'>Phone</h6></li>
                        <li><i className="fa fa-3x fa-microphone me-3" aria-hidden="true">   </i>(123)456-7890</li>
                        <li> <h6 className='mt-4 head'>Social Link</h6></li>
                        <li> <a className='atag' href=''>  <i className="fa fa-2x fa-facebook me-3" aria-hidden="true"></i></a>
                            <a className='atag' href=''>  <i className="fa fa-2x fa-linkedin me-3" aria-hidden="true"></i></a>
                            <a className='atag' href=''>  <i className="fa fa-2x fa-instagram me-3 " aria-hidden="true"></i></a>
                            <a className='atag' href=''>  <i className="fa fa-2x fa-twitter me-3" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-2 ms-4">
                    <ul className='list-unstyled'>
                        <h6 className=' mt-5 head'>About Us</h6>
                        <a className='atag' >  <li className='mt-3'>About Us</li> </a>
                        <a className='atag' > <li className='mt-3'>Contact Us</li></a>
                        <a className='atag' >   <li className='mt-3'>Our Stores</li></a>
                        <a className='atag' >  <li className='mt-3'>News & Events</li></a>
                        <a className='atag' >  <li className='mt-3'>CSR</li></a>
                        <a className='atag' >  <li className='mt-3'>FAQ</li></a>
                    </ul>
                </div>
                <div className="col-md-2 ms-4">
                    <ul className='list-unstyled'>
                        <h6 className=' mt-5 head'>Policies</h6>
                        <a className='atag' ><li className='mt-3'>Privacy Policy</li> </a>
                        <a className='atag' href=''> <li className='mt-3'>Disclaimer Policy</li> </a>
                        <a className='atag' href=''> <li className='mt-3'>Shipping Policy</li> </a>
                        <a className='atag' href=''>  <li className='mt-3'>Return Policy</li> </a>
                    </ul>
                </div>
                <div className="col-md-4 ms-4">
                    <ul className='list-unstyled'>
                        <h6 className=' mt-5 head'>Working Days/Hours</h6>
                        <li className='mt-3'>Mon-Saturday / 09:00 A M - 08:00 P M</li>
                        <li className='mt-3'>Sunday / 10:00 A M-08:00 P M</li>
                        <li className='mt-3 head'>We Accept</li>
                        <div className="col-md-6 pay d-flex mt-3">
                            <li  ><a className='text-decaration-none ' href=''><img data-src="//img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.png" className="c-img-con-m j-verlok-lazy loaded pay" data-lazy-src="//img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.png" src="//img.ltwebstatic.com/images3_pi/2021/03/09/161528368123dd7a35ad8708b0dfc74b3630526891.png"  data-was-processed="true" /></a></li>
                            <li><a className='text-decaration-none ' href=''><img data-src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.png" className="c-img-con-m j-verlok-lazy loaded pay" data-lazy-src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.png" src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732803587566708.png" data-was-processed="true"  /></a></li>
                            <li><a className='text-decaration-none ' href=''><img data-src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.png" className="c-img-con-m j-verlok-lazy loaded pay" data-lazy-src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.png" src="//img.ltwebstatic.com/images2_pi/2018/06/06/15282732983375743706.png" data-was-processed="true" /></a></li>
                        </div>
                    </ul>
                </div>
                <hr className='w-75 under' />
                <div className="copy text-center fw-smaller  ">© Copyright 2022 Mahalekshmi Silks.All Rights Reserved.</div>
                <div className="col-md-1">
                </div>
            </div>
        </div>
    )
   
}

export default Footer
