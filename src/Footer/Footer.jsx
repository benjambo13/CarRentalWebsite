import { HiOutlinePhone, HiOutlineMail } from 'react-icons/hi'

import style from './Footer.module.scss'

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.info_pair}>
        <div className={style.info_section}>
          <h3>CAR RENTAL</h3>
          <p>We have the perfect car for you! We offer a big range of vehicles for all your driving needs.</p>
          <div className={style.contact_info}>
            <HiOutlinePhone />
            <p>01286 123065</p>
          </div>
          <div className={style.contact_info}>
            <HiOutlineMail />
            <p>car_rent@rentacar.com</p>
          </div>
        </div>
        <div className={style.info_section}>
          <h3>COMPANY</h3>
          <ul className={style.company_list}>
            <li>London</li>
            <li>Careers</li>
            <li>Blog</li>
            <li>Our Principles</li>
          </ul>
        </div>
      </div>
      <div className={style.info_pair}>
        <div className={style.info_section}>
          <h3>WORKING HOURS</h3>
          <p>Mon - Fri: 9:30am - 7:00pm</p>
          <p>Sat: 10:00am - 3:00pm</p>
          <p>Sun: Closed</p>
        </div>
        <div className={style.info_section}>
          <h3>SUBSCRIBE</h3>
          <p>Enter your email address for the latest news and updates</p>
          <input className={style.email_input} placeholder='Enter Email Address'/>
          <button className={style.submit_btn}>Submit</button>
        </div>
      </div>
    </footer>
  )
}
