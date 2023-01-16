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
    const url = 'https://rickandmortyapi.com/api/character'

    useEffect(() => {
    const fetchData = async () => {
        const data:any = await fetch(url)
        .then((response) => response.json())
        setCharacters(data)
    }
    fetchData();
    }, [])

    console.log(characters?.results)
  
    return (
    <div>
        <section >
            <div className='chars'>
            {characters?.results.splice(0, 6).map((character, i) => (
                <article className='card'>                    
                    <div>
                        <img src={character.image} alt="" />
                    </div>
                    <div>
                        <div className='section'>
                            <span>{character.name}</span>
                            <span>{character.status} - {character.species}</span>
                        </div>
                        <div className='section'>
                            <span>Last known location:</span>
                            <span>{character.location.name}</span>
                        </div>
                        <div className='section'>
                            <span>First seen in:</span>
                            <span>Pilot</span>
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
