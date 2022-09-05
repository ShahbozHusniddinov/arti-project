import React,{useEffect} from 'react'
import 'aos/dist/aos.css';
import AOS from "aos"

const Contact = () => {
  useEffect(() =>{
    AOS.init()
})
  return (
    <div className='max-width'>
      <div className='footer-ota'>
        <div className="footer">
          <div className="last-one">
            <h1>LET’s Get in touch</h1>
            <img src="img/liniya1.svg" alt="" />
          </div>
          <div className='last'>
            <div className='last-card' data-aos="zoom-in" data-aos-duration="1500">
              <img src="img/last.png" alt="" />
              <h2>MEET US IN PERSON</h2>
              <h3>8776 Juniper Street <br /> Unit #204</h3>
              <h3>Merriweather, Ontorio<br />Canada</h3>
            </div>
            <div className='last-card' data-aos="zoom-in" data-aos-duration="1500">
              <img src="img/last1.png" alt="" />
              <h2>MEET US IN PERSON</h2>
              <h3>8776 Juniper Street <br /> Unit #204</h3>
              <h3>Merriweather, Ontorio<br />Canada</h3>
            </div>
            <div className='last-card' data-aos="zoom-in" data-aos-duration="1500">
              <img src="img/last2.png" alt="" />
              <h2>MEET US IN PERSON</h2>
              <h3>8776 Juniper Street <br /> Unit #204</h3>
              <h3>Merriweather, Ontorio<br />Canada</h3>
            </div>
          </div>
        </div>
        <div className='finish'>
          <div className='finish1'>
            <form action="">
              <div className='first-in' data-aos="fade-right" data-aos-duration="1500">
                <input type="text" name="" id="" placeholder='Name'/>
              </div>
              <div className='first1-in' data-aos="fade-left" data-aos-duration="1500">
                <input type="text" name="" id="" placeholder='Email'/>
              </div>
              <div className='first2-in' data-aos="fade-right" data-aos-duration="1500">
                <input type="text" name="" id="" placeholder='Budget'/>
              </div>
              <div className='first3-in' data-aos="fade-left" data-aos-duration="1500">
                <textarea name="" id="" cols="30" rows="10" placeholder='Describe youre project...'></textarea>
              </div>
              <div className="input-btn">
                <button>Send Message</button>
              </div>
            </form>
          </div>
          <div className="fish">
            <div className="fish-img">
              <img src="img/finish1.svg" alt="" />
              <div className="fish-text">
                <p>Minimal Template made in Webflow. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact