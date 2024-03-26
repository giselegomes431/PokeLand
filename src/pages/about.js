import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In repellat impedit neque et sapiente ipsam laboriosam adipisci illum. lure voluptate itaque culpa minus ipsa architecto doloruml Dignissimos recusandae ea aperiam?</p>
            <Image  src="https://img.pokemondb.net/sprites/home/normal/jigglypuff.png" width="300" height="300" alt="About"/>
        </div>
    );
  }