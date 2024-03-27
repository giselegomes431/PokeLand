import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Este é um projeto pessoal criado com o propósito de estudar a linguagem Next.js.</p>
            <Image  
            src="https://img.pokemondb.net/sprites/home/normal/pidgeot.png" 
            width="300" 
            height="300" 
            alt="About"
            className={styles.image}
            />
        </div>
    );
  }