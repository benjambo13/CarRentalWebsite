import { BsFillDropletFill, BsFillGearFill, BsDoorClosedFill } from 'react-icons/bs'

import style from './CarCard.module.scss'

export const CarCard = ({ image, details }) => {
  return(
    <div className={style.card}>
      <div className={style.image_container}>
        <img src={image} alt='fleet car' />
      </div>
      <div>
        <h3>{details.brand}</h3>
        <p className={style.model}>{details.model}</p>
        <div className={style.details}>
          <div className={style.car_facts}>
            <div>
              <BsFillDropletFill className={style.icon}/>
              <p>{details.fuelType}</p>
            </div>
            <div>
              <BsFillGearFill className={style.icon} />
              <p>{details.automatic ? 'automatic' : 'manual'}</p>
            </div>
            <div>
              <BsDoorClosedFill className={style.icon} />
              <p>{details.doorNum} doors</p>
            </div>
          </div>
          <div className={style.price_container}>
            <h4>£{details.price}</h4>
            <p>/day</p>
          </div>
        </div>
        <button className={style.rent_btn}>Rent This Car</button>
      </div>
    </div>
  )
}
