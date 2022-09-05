import React,{useEffect} from 'react'
import 'aos/dist/aos.css';
import AOS from "aos"

const Team = () => {
  useEffect(() =>{
    AOS.init()
})
  return (
    <div className='max-width'>
      <div className='team'>
        <div className='team1'>
          <h1>our team</h1>
          <img src="img/liniya1.svg" alt="" />
        </div>
        <div className='team-card'>
          <div className='card-team' data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/odam.png" alt="" />
            <div className='text-team'>
              <h1>Ron Swanson</h1>
              <h3>Founder</h3>
              <div className='icon'>
                <img src="img/twitter.svg" alt="" />
                <img src="img/in.svg" alt="" />
                <img src="img/email.svg" alt="" />
              </div>
            </div>
          </div>
          <div className='card-team' data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/odam1.png" alt="" />
            <div className='text-team'>
              <h1>Julia Depish</h1>
              <h3>Founder</h3>
              <div className='icon'>
                <img src="img/twitter.svg" alt="" />
                <img src="img/in.svg" alt="" />
                <img src="img/email.svg" alt="" />
              </div>
            </div>
          </div>
          <div className='card-team' data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/odam2.png" alt="" />
            <div className='text-team'>
              <h1>Danny Devry</h1>
              <h3>Founder</h3>
              <div className='icon'>
                <img src="img/twitter.svg" alt="" />
                <img src="img/in.svg" alt="" />
                <img src="img/email.svg" alt="" />
              </div>
            </div>
          </div>
          <div className='card-team' data-aos="zoom-in" data-aos-duration="1500">
            <img src="img/odam3.png" alt="" />
            <div className='text-team'>
              <h1>Lisa Smith Ms</h1>
              <h3>Founder</h3>
              <div className='icon'>
                <img src="img/twitter.svg" alt="" />
                <img src="img/in.svg" alt="" />
                <img src="img/email.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='team-second'>
        <div className='team-second1'>
          <img src="img/icon.png" alt="" />
        </div>
          <div className='team-ota'>
            <div className='team-ota1' data-aos="fade-right" data-aos-duration="1500">
              <h1>“I love these guys! They <br /> great job. I would recommend <br /> them to anyone.”</h1>
              <div className='team-ota-img'>
                <img src="img/bir.svg" alt="" />
                <h3>Julius Von Uberstien</h3>
              </div>
            </div>
            <div className='team-ota-liniya'>
              <img src="img/mana.png" alt="" />
            </div>
            <div className='team-ota1' data-aos="fade-left" data-aos-duration="1500">
              <h1>“I love these guys! They <br /> great job. I would recommend <br /> them to anyone.”</h1>
              <div className='team-ota-img'>
                <img src="img/bir1.svg" alt="" />
                <h3>Julius Von Uberstien</h3>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Team