import { HiArrowSmRight } from 'react-icons/hi'

import style from './Hero.module.scss'

export const Hero = () => {
  return(
    <div className={style.hero}>
      <img className={style.background} src={require('../../Images/Hero_BG.png')} alt='city background' />
      <div className={style.content}>
        <div className={style.words_container}>
          <h3>Plan your perfect trip</h3>
          <h1>Save <span>big</span> with our car rental</h1>
          <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
          <button>Book Now <HiArrowSmRight /></button>
        </div>
        <div className={style.img_container}>
          <img src={require('../../Images/Car-3.png')} alt='hero car' />
        </div>
      </div>
    </div>
  )
}