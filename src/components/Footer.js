import Image from 'next/image'
import Link from 'next/link'

import styles from '@styles/modules/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Become a nanny share host</h3>
      <span>Takes less than 5 minutes to get started</span>
      <button className={styles.button}>
        <Image src="/assets/icons/calendar.svg" alt="" width={30} height={30} />
        <span>
          Create your Nanny Share
          <small>Takes less than 5 minutes</small>
        </span>
      </button>
      <Link href="#">
        <a>Or browse local nanny-shares</a>
      </Link>
      <section>
        <div className={styles.logoContainer}>
          <Image
            src="/assets/svg/logo.svg"
            alt="Hapu's Logo"
            width={64}
            height={24}
          />
        </div>
        <nav className={styles.nav}>
          <Link href="#">
            <a>Share Your Nanny</a>
          </Link>
          <Link href="#">
            <a>Our Story</a>
          </Link>
          <Link href="#">
            <a>Blog</a>
          </Link>
          <Link href="#">
            <a>Terms &amp; Privacy</a>
          </Link>
        </nav>
        <div className={styles.socials}>
          {/* anchor tags would have a target _blank here */}
          <a href="#" aria-label="Facebook">
            <Image
              src="/assets/icons/facebook.svg"
              alt="Facebook"
              width={18}
              height={18}
            />
          </a>
          <a href="#" aria-label="Twitter">
            <Image
              src="/assets/icons/twitter.svg"
              alt="Twitter"
              width={18}
              height={18}
            />
          </a>
          <a href="#" aria-label="Instagram">
            <Image
              src="/assets/icons/instagram.svg"
              alt="Instagram"
              width={18}
              height={18}
            />
          </a>
        </div>
      </section>
      <hr className={styles.divider} />
      <small>Copyright © 2017 Hapu PTY Limited All rights reserved</small>
    </footer>
  )
}

export default Footer
