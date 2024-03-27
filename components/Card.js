import Image from "next/image"
import Link from "next/link"

import styles from '../src/styles/Card.module.css'

export default function Card({pokemon}) {
    return (
        <div className={styles.card}>
            <Image
            src={`https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`}
            width="120"
            height="120"
            alt={pokemon.name}
            />
            <p className={styles.id}>#{pokemon.id}</p>
            <h3 className={styles.title}>{pokemon.name}</h3>
            <Link legacyBehavior href={`/pokemon/${pokemon.id}`}>
                <a className={styles.btn}>Detalhes</a>
            </Link>
        </div>
    )
}