import {useState, useEffect} from 'react'

const Content = () => {
    type ResultObject = {
        info: {
          count: number,
          pages: number,
          next: string,
          prev: null
        },
        results: [{
          id: number,
          name: string,
          status: string,
          species: string,
          type: string,
          gender: string,
          origin: {
            name: string,
            url: string
          }
          location: {
            name: string,
            url: string,
          }
          image: string,
          episode: [],
          url: string,
          created: string,
        }]
      }

    const [characters, setCharacters] = useState<ResultObject>()
    // const [ep, setEp] = useState([])

    const url = 'https://rickandmortyapi.com/api/character'



    const getCharacters = async () => {

      const allCharacters = await fetch(url).then(res => res.json())
      setCharacters(allCharacters)

      // for(let i =0; i < allCharacters.info.count; i++) {
      //   const episodeUrl = allCharacters.results[i].episode[0] 
      //   if(allCharacters.results[i].episode[0] != undefined) {
      //     const firstEp = await fetch(episodeUrl).then(res => res.json())
      //     setEp(firstEp)
      //   }
      // }
       
    }
    useEffect(() => {
      getCharacters()
    }, [])

    return (
    <div>
        <section>
            <div className='chars'>
            {characters?.results.splice(0,6).map((character, i) => (
                <article className='card' key={i}>                    
                    <div>
                        <img src={character.image} alt="" />
                    </div>
                    <div>
                        <div className='section'>
                            <a href='#' className='char-name'>{character.name}</a>
                            <span>
                              <span className='status-icon'></span>
                              {character.status} - {character.species}
                            </span>
                        </div>
                        <div className='section'>
                            <span className='last-known'>Last known location:</span>
                            <a href='#' >{character.location.name}</a>
                        </div>
                        <div className='section'>
                            <span className='first-seen'>First seen in:</span>
                            <a href='#'>Pilot</a>
                        </div>
                    </div>
                </article>
            ))}              
            </div>
        </section>
    </div>
  )
}

export default Content;
