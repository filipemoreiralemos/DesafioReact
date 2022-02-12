import Link from 'next/link'

import styles from '@styles/modules/Navbar.module.css'

const Navbar = () => {
  return (
    <nav aria-label="primary" className={styles.navbar}>
      <Link href="#">
        <a>Create Your Nanny Share</a>
      </Link>
      <Link href="#">
        <a>Browse Shares</a>
      </Link>
      <Link href="#">
        <a>Our Story</a>
      </Link>
    </nav>
  )
}

export default Navbar
