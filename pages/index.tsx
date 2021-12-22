import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.scss'
import Search from '@material-ui/icons/Search'
import { Menu, Transition } from '@headlessui/react'

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Header */}
      <div className={styles.header}>
        <Link href={'/'}>
          <a className={styles.headerbutton}>Button</a>
        </Link>
        {/* DropDown */}
        <div>
          <Menu as="div">
            <div>
              <Menu.Button className={styles.menuButton}>
                All the departments
              </Menu.Button>
            </div>
          </Menu>
        </div>
        <div>
          <textarea className={styles.Search}></textarea>
          <button className={styles.SearchButton}><Search></Search></button>
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
