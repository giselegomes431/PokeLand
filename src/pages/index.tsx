import Image from "next/image";
import styles from "../styles/Home.module.css"
import Card from '../../components/Card'

export async function getStaticProps() {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  interface ApiResponse {
    results: any[]; // Defina a estrutura dos resultados
    // Outras propriedades, se houver
}



  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data: ApiResponse = await res.json();

  data.results.forEach((item: any, index: number) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    },
  }
}

interface Pokemon {
  id: number;
  name: string;
  // outras propriedades do Pokémon, se houver
}

interface HomeProps {
  pokemons: Pokemon[];
}

export default function Home({ pokemons }: HomeProps) {
  return (
    <div className={styles.home}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Land</span></h1>
        <Image src="/images/Pokebola.png" 
        alt="PokeLand"
        width="50"
        height="50"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons?.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
