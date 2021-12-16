import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <Link href={'/'}>
          <a className={styles.headerbutton}>Button</a>
        </Link>
        <div className='dropdwon'></div>
        <div>
          <textarea className={styles.Search}></textarea>
          <button className={styles.SearchButton}></button>
        </div>
        <div>
          <Link href={'/cart'}>
            <a className={styles.cart}>Cart</a>
          </Link>
        </div>

        <div>
          <Link href={'/login'}>
            <a className={styles.signUp}>Sign Up</a>
          </Link>
        </div>

      </div>
    </div>
  )
}
