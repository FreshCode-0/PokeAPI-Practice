import React from 'react';
import './styles/index.scss'

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
	
	<article>
	  <header>	  
	    <img
	    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
	    alt="Pokeball"/>
	  </header>
	  <footer>
	    Pokemon!
	  </footer>
	</article>
	
	<article>
	  <header>	  
	    <img
	    src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
	    alt="Pokeball"/>
	  </header>
	  <footer>
	    Pokemon!
	  </footer>
	</article>

      </section>
    </main>
  </>
  )
  
}

export default App;
