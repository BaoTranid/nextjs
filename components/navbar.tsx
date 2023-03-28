import Link from 'next/link'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <div style={{ padding: 10 }}>
      <ul className={styles.navbar}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/example/ex1">Ex1</Link>
        </li>
        <li>
          <Link href="/example/ex2/1">Ex2</Link>
        </li>
        <li>
          <Link href="/example/ex3">Ex3</Link>
        </li>
        <li>
          <Link href="/example/ex4">Ex4</Link>
        </li>
        <li>
          <Link href="/example/ex5">Ex5</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
