import { HiOutlinePhone, HiOutlineMail, HiLocationMarker } from 'react-icons/hi'

import style from './Contact.module.scss'

export const Contact = () => {
  return (
    <div className={style.contact}>
      <h1>Get In Touch</h1>
      <p className={style.description}>If you have any queries, large or small, please don't hesitate to get in touch. We will aim to respond as fast as possible</p>
      <div className={style.content}>
        <div className={style.grid_column}>
          <h2>Need additional information?</h2>
          <p className={style.additional_info}>A multifaceted professional skilled in multiple fields of research, development as well as a learning specialist. Over 15 years of experience.</p>
          <div className={style.icon_pair}>
            <HiOutlinePhone className={style.icon} />
            <p>01286 123065</p>
          </div>
          <div className={style.icon_pair}>
            <HiOutlineMail className={style.icon} />
            <p>car_rent@rentacar.com</p>
          </div>
          <div className={style.icon_pair}>
            <HiLocationMarker className={style.icon} />
            <p>London, United Kingdom</p>
          </div>
        </div>
        <div className={style.grid_column}>
          <p>Full Name *</p>
          <input placeholder='e.g. Ben Graham'/>
          <p>Email *</p>
          <input placeholder='e.g. bengraham@gmail.com'/>
          <p>Message *</p>
          <textarea placeholder='Enter text here...'/>
          <button className={style.send_btn}>Send</button>
        </div>
      </div>
    </div>
  )
}