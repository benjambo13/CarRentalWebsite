import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineX, HiMenu } from 'react-icons/hi'

import styles from './Navigation.module.scss'

export const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNavBar = () => {
    const nextValue = !navOpen

    document.getElementById('menu').dataset.isActive=nextValue

    setNavOpen(nextValue)
  }

  return (
    <div className={styles.navigation_bar}>
      <img src={require('../Images/Logo.png')} alt='Company logo'/>
      <div className={styles.page_names}>
        <Link to='/'>Home</Link>
        <Link to='/vehicles'>Vehicle Models</Link>
        <Link to='/testimonials'>Testimonials</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <div className={styles.user_info}>
        <Link to='/'>Sign In</Link>
        <button className={styles.register_btn}>Register</button>
      </div>

      {/* Thin screen mode with menu sliding out mode */}
      <div className={styles.thin_nav_view}>
        <HiMenu className={styles.menu_hamburger_icon} onClick={() => toggleNavBar()}/>

        <div id='menu' className={styles.menu} data-is-active='false'>
          <HiOutlineX className={styles.menu_close_icon} onClick={() => toggleNavBar()}/>
          <div className={styles.menu_items}>
            <Link to='/' onClick={() => toggleNavBar()}>Home</Link>
            <Link to='/vehicles' onClick={() => toggleNavBar()}>Vehicle Models</Link>
            <Link to='/testimonials' onClick={() => toggleNavBar()}>Testimonials</Link>
            <Link to='/contact' onClick={() => toggleNavBar()}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
