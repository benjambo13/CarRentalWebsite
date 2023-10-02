import style from './QuoteCard.module.scss'

export const QuoteCard = ({ name, location, quote, pic }) => {
  return (
    <div className={style.card}>
      <div className={style.identity}>
        <div>
          <h3>{name}</h3>
          <h4>{location}</h4>
        </div>
        <img className={style.avatar} alt='avatar' src={pic} />
      </div>
      <p>"{quote}"</p>
    </div>
  )
}