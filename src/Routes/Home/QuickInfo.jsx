import style from './QuickInfo.module.scss'

export const QuickInfo = () => {
  return(
    <div className={style.quick_info}>
      <h4>Plan your trip now</h4>
      <h3>Quick & easy car rental</h3>
      <div className={style.tiles}>
        <div className={style.tile}>
          <img src={require('../../Images/Quick_Icon-1.png')} alt='quick icon' />
          <h4>Select Car</h4>
          <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
        </div>
        <div className={style.tile}>
          <img src={require('../../Images/Quick_Icon-2.png')} alt='quick icon' />
          <h4>Contact Operator</h4>
          <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
        </div>
        <div className={style.tile}>
          <img src={require('../../Images/Quick_Icon-3.png')} alt='quick icon' />
          <h4>Let's Drive</h4>
          <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
        </div>
      </div>
    </div>
  )
}