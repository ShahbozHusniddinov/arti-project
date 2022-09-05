import React,{useEffect} from 'react'
import 'aos/dist/aos.css';
import AOS from "aos"
const Projects = () => {
  useEffect(() =>{
    AOS.init();
  })
  return (
    <div className='max-width'>
      <div className='second'>
        <div className='second-title'>
          <h1>Recent projects</h1>
          <img src="img/liniya1.svg" alt="" />
        </div>
        <div className='second1'>
          <div className='second2'data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/card.png" alt="" />
            <div className='second-text'>
              <h2>woods</h2>
              <h3>Photography</h3>
            </div>
          </div>
          <div className='second2' data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/card1.png" alt="" />
            <div className='second-text'>
              <h2>woods</h2>
              <h3>Photography</h3>
            </div>
          </div>
          <div className='second2' data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/card2.png" alt="" />
            <div className='second-text'>
              <h2>woods</h2>
              <h3>Photography</h3>
            </div>
          </div>
        </div>
        <div className='second1'>
          <div className='second2' data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/card3.png" alt="" />
            <div className='second-text'>
              <h2>woods</h2>
              <h3>Photography</h3>
            </div>
          </div>
          <div className='second2' data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/card4.png" alt="" />
            <div className='second-text'>
              <h2>woods</h2>
              <h3>Photography</h3>
            </div>
          </div>
          <div className='second2' data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/card5.png" alt="" />
            <div className='second-text'>
              <h2>woods</h2>
              <h3>Photography</h3>
            </div>
          </div>
        </div>
        <div className='second1'>
          <div className='second2' data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/card6.png" alt="" />
            <div className='second-text'>
              <h2>woods</h2>
              <h3>Photography</h3>
            </div>
          </div>
          <div className='second2' data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/card7.png" alt="" />
            <div className='second-text'>
              <h2>woods</h2>
              <h3>Photography</h3>
            </div>
          </div>
          <div className='second2' data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/card8.png" alt="" />
            <div className='second-text'>
              <h2>woods</h2>
              <h3>Photography</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects