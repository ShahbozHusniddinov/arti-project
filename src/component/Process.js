import React,{useEffect} from 'react'
import 'aos/dist/aos.css';
import AOS from "aos"

const Process = () => {
    useEffect(() =>{
        AOS.init()
    })
  return (
    <div className='max-width'>
        <div className='dad' data-aos="fade-right" data-aos-duration="1500">
            <div className='dad1'>
                <h1>Making brands stand out <br /> is our obsession</h1>
                <img src="img/liniya.svg" alt="" />
                <p>Let us help your brand stand out.</p>
            </div>
        </div>
        <div className='dad2' data-aos="fade-left" data-aos-duration="1500">
            <div className='dad3'>
                  <p>Minimalist is a full-service digital creative agency located in Ontorio Canada. We focus on design, consulting, <br /> technology, and photography. We’ve been building unique digital products, platforms, and experiences for the past 6 <br /> years. Let us help your company grow.</p>
                  <button>Get in Touch</button>
            </div>
        </div>
        <div className='dad4'>
            <div className='dad-text'>
                <h1>How we make brands thrive</h1>
                <img src="img/liniya1.svg" alt="" />
            </div>
            <div className='dad-title' data-aos="zoom-in" data-aos-duration="1500">
              <div className='text'>
                  <div className='dad-title1'>
                        <img src="img/img.png" alt="" />
                  </div>
                  <div className='text-dad'>
                      <h1>SET a target</h1>
                      <h3>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique.</h3>
                  </div>
              </div>
              <div className='text'>
                  <div className='dad-title1'>
                        <img src="img/img1.png" alt="" />
                  </div>
                  <div className='text-dad'>
                      <h1>SET a targett</h1>
                      <h3>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique.</h3>
                  </div>
              </div>
              <div className='text'>
                <div className='dad-title1'>
                      <img src="img/img2.png" alt="" />
                </div>
                <div className='text-dad'>
                      <h1>design a solution</h1>
                      <h3>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Suspendisse varius enim in <br /> eros elementum tristique.</h3>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Process