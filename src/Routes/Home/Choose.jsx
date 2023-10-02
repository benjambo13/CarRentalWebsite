import { HiArrowRight } from 'react-icons/hi'

import style from './Choose.module.scss'

export const Choose = () => {
  return(
    <div className={style.choose}>
      <div className={style.content}>
        <div className={style.content_half}>
          <h4>Why Choose Us</h4>
          <h1>Best valued deals you will ever find</h1>
          <p>Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.</p>
          <button>See Details<HiArrowRight /></button>
        </div>
        <div className={style.content_half}>
          <div className={style.info_container}>
            <img src={require('../../Images/Choose-1.png')} alt='choose icon 1'/>
            <div>
              <h4>Cross Country Drive</h4>
              <p>Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.</p>
            </div>
          </div>
          <div className={style.info_container}>
            <img src={require('../../Images/Choose-2.png')} alt='choose icon 2'/>
            <div>
              <h4>All Inclusive Pricing</h4>
              <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
            </div>
          </div>
          <div className={style.info_container}>
            <img src={require('../../Images/Choose-3.png')} alt='choose icon 3'/>
            <div>
              <h4>No Hidden Charges</h4>
              <p>Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}