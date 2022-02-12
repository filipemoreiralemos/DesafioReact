import Image from 'next/image'
import Link from 'next/link'

import TitleExperiment from './TitleExperiment'

import styles from '@styles/modules/Hero.module.css'

const Hero = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <div className={styles.contentColumn}>
        <TitleExperiment />
        <Link href="#">
          <a className={styles.actionCall}>
            <Image
              src="/assets/icons/play-button.svg"
              alt="Play button"
              width={48}
              height={48}
            />
            <span>See hapu in action (27 seconds)</span>
          </a>
        </Link>
      </div>
      <div className={styles.contentColumn}>
        <Image
          src="/assets/images/header-image.png"
          alt="Nanny Share Example"
          width={316}
          height={290}
        />
      </div>
    </div>
  </section>
)

export default Hero
