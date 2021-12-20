import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Header */}
      <div className={styles.header}>
        <Link href={'/'}>
          <a className={styles.headerbutton}>Button</a>
        </Link>
        <div className='dropdwon'></div>
        <div>
          <textarea className={styles.Search}></textarea>
          <button className={styles.SearchButton}></button>
        </div>
        <div className={styles.cartDiv}>
          <Link href='/account/cart'>
            <a className={styles.cart}>Cart</a>
          </Link>
        </div>

        <div className={styles.signUpDiv}>
          <Link href='/account/login'>
            <a className={styles.signUp}>Sign Up</a>
          </Link>
        </div>
        {/* Body-Objects */}

        {/* Footer */}

        <div className={styles.footer}></div>

      </div>
    </div>
  )
}
