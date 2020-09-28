import React from 'react';
import './styles/index.scss'
import PokemonBadge from './components/PokemonBadge'

function App() {
  return (
  <>
    <nav>
      <img 
	src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
	alt="PokeApi"
	className='logo'
      />
    </nav>
    <main>
      <section className='results'>
        {
          [].map(() =>{
            return <PokemonBadge/>
          })
        }
      </section>
    </main>
  </>
  )
  
}

export default App;
