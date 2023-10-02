import { Outlet } from 'react-router-dom'

import { Navigation } from '../Navigation/Navigation'
import { Footer } from '../Footer/Footer'

import styles from './Root.module.scss'

export const Root = () => {
  return (
    <div className={styles.App}>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}
