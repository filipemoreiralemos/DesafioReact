import Image from 'next/image'
import Link from 'next/link'

import styles from '@styles/modules/AvailableSchedule.module.css'

const AvailableSchedule = () => {
  return (
    <section className={styles.availableSchedule}>
      <Image
        src="/assets/images/profile-example.png"
        alt="Carer's profile image"
        width={66}
        height={66}
      />
      <Link href="#">
        <a>Sarah’s day care available now in North Sydney</a>
      </Link>
      <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
    </section>
  )
}

export default AvailableSchedule
