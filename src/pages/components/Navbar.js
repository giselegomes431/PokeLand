import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
            <Image 
              src="/images/Pokebola.png" 
              width="30" 
              height="30" 
              alt="PokeLand"
            />
            <h1 className={styles.title}>Poke<span>Land</span></h1>
        </div>
        <ul className={styles.link_items}>
            <li>
                <Link href="/" legacyBehavior><a id="link">Home</a></Link>
            </li>
            <li>
                <Link href="/about" legacyBehavior><a id="link">Sobre</a></Link>
            </li>
        </ul>
      </nav>
    );
  }
  