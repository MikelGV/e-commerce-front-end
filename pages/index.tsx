import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link"href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cart">Cart</a>
          </li>
        </ul>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/signup">Signup</a>
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
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </div>
  )
}
