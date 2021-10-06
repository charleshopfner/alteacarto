import React from 'react'

import styles from './Header.module.scss'

const Header = () => (
  <header>
    <nav className={styles.headerNav}>
      <div className="logo-container">ALTEACARTO</div>
    </nav>
  </header>
)

export default Header
