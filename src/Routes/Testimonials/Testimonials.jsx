import { QuoteCard } from './QuoteCard'
import style from './Testimonials.module.scss'

const testimonialObjs = [
  {
    name: 'Dominic Toretto',
    location: 'London, UK',
    pic: require('../../Images/Avatar_1.png'),
    quote: 'We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable.'
  },
  {
    name: 'Letty Ortiz',
    location: 'Paris, France',
    pic: require('../../Images/Avatar_2.png'),
    quote: 'The car was in great condition and made our trip even better. Highly recommend for this car rental website!'
  },
  {
    name: 'Brian O\'Conner',
    location: 'New York, USA',
    pic: require('../../Images/Avatar_1.png'),
    quote: 'Their website is really easy to use, and best of all it looks great as well!'
  },
  {
    name: 'Mia Toretto',
    location: 'Rome, Italy',
    pic: require('../../Images/Avatar_2.png'),
    quote: 'You can really tell Car Rental care about their clients. It was such an easy experience to hire a car through their website!'
  },
  {
    name: 'Roman Pearce',
    location: 'Riga, Latvia',
    pic: require('../../Images/Avatar_1.png'),
    quote: '10/10  - would recommend to a friend. I would really like to know who developed their website as its perfect!'
  },
]

export const Testimonials = () => {
  return(
    <div className={style.testimonials}>
      <h1>Client Testimonies</h1>
      <p className={style.description}>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experienced our service and results, and they're eager to share their positive experiences with you.</p>
      <div className={style.cards}>
        {testimonialObjs.map(testimonial => (
          <QuoteCard
            name={testimonial.name}
            location={testimonial.location}
            quote={testimonial.quote}
            pic={testimonial.pic}
          />
        ))}
      </div>
    </div>
  )
}