import Image from 'next/image'
import Link from 'next/link'

import styles from '@styles/modules/Header.module.css'

const Header = ({ children }) => {
  return (
    <header className={styles.header}>
      <div className={styles.badgeContainer}>
        <Image
          src="/assets/svg/badge.svg"
          alt="Hapu's Logo Badge"
          width={48}
          height={64}
        />
      </div>
      {children}
      <section className={styles.loginArea}>
        <Link href="#">
          <a>Become a Nanny Share Host</a>
        </Link>
        <Link href="#">
          <a>Sign In</a>
        </Link>
      </section>
    </header>
  )
}

export default Header
