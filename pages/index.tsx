import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/cart">
              <a className="nav-link">Cart</a>
            </Link>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <Link href="/login">
              <a className="nav-link">Login</a>
            </Link>
          </li>
          <li className="nav-item active">
            <Link href="/signup">
              <a className="nav-link">Signup</a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        <Head>
          <title>E-shop</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://mikelgaldos.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            My page
          </a>
        </footer>
      </div>
    </div>
  )
}
