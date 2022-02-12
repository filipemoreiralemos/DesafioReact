import Image from 'next/image'
import Link from 'next/link'

import Layout from '@components/Layout'
import Hero from '@components/Hero'
import AvailableSchedule from '@components/AvailableSchedule'
import NewsletterForm from '@components/NewsletterForm'

import FormProvider from '@contexts/form'
import ExperimentProvider from '@contexts/experiment'

import getRandomVariant from '@lib/getRandomVariant'

import styles from '@styles/modules/Home.module.css'

const Home = ({ experimentVariant }) => (
  <Layout
    pageTitle={experimentVariant.data.title}
    description={experimentVariant.data.description}
  >
    <ExperimentProvider experimentVariant={experimentVariant}>
      <Hero />
    </ExperimentProvider>
    <AvailableSchedule />
    <main className={styles.main}>
      {/* [Section 1] Share your home section */}
      <article className={`${styles.content} ${styles.contentLeft}`}>
        <section>
          <h3>
            Share your home,
            <br />
            nanny and costs
          </h3>
          <p>
            You have a fantastic home, a fantastic nanny and wouldn’t cutting
            your costs in half be, well, fantastic?! If only it was easy to
            connect with other parents to share your costs? Well now it is, with
            Hapu.{' '}
            <Link href="#">
              <a>Hapu means tribe</a>
            </Link>{' '}
            and it’s our foundational 3 tribal principles that empowers you to
            create and manage your own tribe. A tribe that together has the
            power to create new affordable solutions in childcare that work for
            you and your community.
          </p>
          <Link href="#">
            <a>Ready to get started?</a>
          </Link>
        </section>
        <section className={styles.imageContainer}>
          <Image
            src="/assets/images/section-1.png"
            alt="Share your home, nanny and costs"
            width={584}
            height={392}
          />
        </section>
      </article>
      <hr className={styles.divider} />

      {/* [Section 2] Newsletter Form */}
      <article
        className={`${styles.content} ${styles.formContent} ${styles.contentCenter}`}
      >
        <section>
          <h3>Are you a parent without a nanny and looking to share?</h3>
          <span>
            Leave us your name and email and we’ll update you as soon as a share
            becomes available in your area!
          </span>
          <FormProvider endpoint="/challenge-newsletter">
            <NewsletterForm />
          </FormProvider>
        </section>
      </article>
      <hr className={styles.divider} />

      {/* [Section 3] Shared payments section */}
      <article className={`${styles.content} ${styles.contentRight}`}>
        <section className={styles.imageContainer}>
          <Image
            src="/assets/images/section-3.png"
            alt="Shared payments made simple"
            width={456}
            height={336}
          />
        </section>
        <section>
          <h3>Shared payments made simple</h3>
          <p>
            Sometimes it’s hard enough just sharing a restaurant bill. Try
            sharing that bill week in, week out and you might encounter more
            than a few snares. But not with Hapu. Simply set your rates and our
            automated payment system takes care of the rest. You need never talk
            money or who owes what.
          </p>
          <Link href="#">
            <a>Read how Bridget’s share (without Hapu) ended over $15</a>
          </Link>
        </section>
      </article>
      <hr className={styles.divider} />

      {/* [Section 4] Built for long term section */}
      <article className={`${styles.content} ${styles.contentCenter}`}>
        <section>
          <h3>A framework built for the long term</h3>
          <p>
            Childcare is for the long term. And you need a framework you can
            count on that gives your share long term viability and success.
            That’s why we’ve defined Hapu around our three tribal principles;
            clearly defined process, transparency over money and equality of
            participation.
          </p>
          <Link href="#">
            <a>Read how Hapu’s tribal background defines our app</a>
          </Link>
        </section>
        <section className={styles.mobileHidden}>
          <Image
            src="/assets/images/section-4.png"
            alt="A framework built for the long term"
            width={984}
            height={392}
          />
        </section>
      </article>
      <hr className={styles.divider} />

      {/* [Section 5] Coming soon section */}
      <article className={`${styles.content} ${styles.contentCenter}`}>
        <section className={styles.imageContainer}>
          <Image
            src="/assets/images/section-5.png"
            alt="Nanny Share Daily Diary"
            width={216}
            height={96}
            quality={100}
          />
        </section>
        <section>
          <h3>Coming soon: Nanny Share Daily Diary!</h3>
          <p>
            With the Hapu daily diary your nanny will be able to update you and
            your sharers with photos and commentary of the day. You and sharers
            will receive notifications and you’ll be able to login to view the
            daily adventures fo your little ones. We can’t wait!
          </p>
        </section>
      </article>
    </main>
  </Layout>
)

export const getServerSideProps = () => {
  const experimentVariant = getRandomVariant()

  return {
    props: {
      experimentVariant,
    },
  }
}

export default Home
