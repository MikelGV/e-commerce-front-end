import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.scss'
import Search from '@material-ui/icons/Search'
import { Menu, Transition } from '@headlessui/react'
import { MyLink } from '../components/link'

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Header */}
      <div className={styles.header}>
        <Link href={'/'}>
          <a className={styles.headerbutton}>Button</a>
        </Link>
        {/* DropDown */}
        <Menu as="div">
          <Menu.Button className={styles.menuButton}>All the departments</Menu.Button>
          <Menu.Items>
            <Menu.Item>
              <MyLink href="/test">Test</MyLink>
            </Menu.Item>
          </Menu.Items>
        </Menu>
        
        <div>
          <textarea className={styles.Search}></textarea>
          <button className={styles.SearchButton}><Search></Search></button>
        </div>
        <div className={styles.cartDiv}>
          <Link href='/cart'>
            <a className={styles.cart}>Cart</a>
          </Link>
        </div>

        <div className={styles.signUpDiv}>
          <Link href='/login'>
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
