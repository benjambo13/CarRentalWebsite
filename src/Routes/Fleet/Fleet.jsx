import { CarCard } from './CarCard'
import style from './Fleet.module.scss'

const carList = [
  {
    image: require('../../Images/Car-1.png'),
    details: {
      brand: 'Mercedes Benz',
      model: 'glc coupe',
      fuelType: 'Diesel',
      automatic: false,
      doorNum: 5,
      price: 54
    }
  },
  {
    image: require('../../Images/Car-2.png'),
    details: {
      brand: 'Volkswagen',
      model: 'Polo',
      fuelType: 'Petrol',
      automatic: true,
      doorNum: 5,
      price: 32
    }
  },
  {
    image: require('../../Images/Car-3.png'),
    details: {
      brand: 'Audi',
      model: 'A3',
      fuelType: 'Petrol',
      automatic: true,
      doorNum: 5,
      price: 44
    }
  },
  {
    image: require('../../Images/Car-4.png'),
    details: {
      brand: 'Jaguar',
      model: 'F-Pace',
      fuelType: 'Diesel',
      automatic: false,
      doorNum: 5,
      price: 65
    }
  },
  {
    image: require('../../Images/Car-5.png'),
    details: {
      brand: 'Hyundai',
      model: 'Sonata',
      fuelType: 'Petrol',
      automatic: true,
      doorNum: 5,
      price: 30
    }
  },
  {
    image: require('../../Images/Car-6.png'),
    details: {
      brand: 'Jaguar',
      model: 'F-Type',
      fuelType: 'Petrol',
      automatic: true,
      doorNum: 3,
      price: 32
    }
  },
  {
    image: require('../../Images/Car-7.png'),
    details: {
      brand: 'Range Rover',
      model: 'Evoke',
      fuelType: 'Diesel',
      automatic: false,
      doorNum: 3,
      price: 61
    }
  },
  {
    image: require('../../Images/Car-8.png'),
    details: {
      brand: 'Honda',
      model: 'Accord',
      fuelType: 'Petrol',
      automatic: true,
      doorNum: 5,
      price: 45
    }
  },
  {
    image: require('../../Images/Car-9.png'),
    details: {
      brand: 'Chevrolet',
      model: 'Camero',
      fuelType: 'Diesel',
      automatic: true,
      doorNum: 5,
      price: 23
    }
  },
  {
    image: require('../../Images/Car-10.png'),
    details: {
      brand: 'Audi',
      model: 'TT',
      fuelType: 'Petrol',
      automatic: false,
      doorNum: 3,
      price: 29
    }
  }
]

export const Fleet = () => {
  return(
    <div className={style.fleet}>
      <h1>Our Vehicle Fleet</h1>
      <p className={style.description}>Browse our extensive range of cars for rent. Find the perfect car for you and that suits all your needs.</p>
      <div className={style.cars}>
        { carList.map(car =>  <CarCard image={car.image} details={car.details} />) }
      </div>
    </div>
  )
}