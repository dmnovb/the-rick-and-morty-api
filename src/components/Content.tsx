import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons'

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

    const alive_status_icon = {
      height: '.55rem',
      width: '.55rem',
      marginRight: '0.35rem',
      marginBottom: '0.12rem',
      backgroundColor: '#55cc44',
      borderRadius: '50%',
      display: 'inline-block'
    }
    const deceased_status_icon = {
      height: '.55rem',
      width: '.55rem',
      marginRight: '0.35rem',
      marginBottom: '0.12rem',
      backgroundColor: '#d63d2e',
      borderRadius: '50%',
      display: 'inline-block'
    }
    const unknown_status_icon = {
      height: '.55rem',
      width: '.55rem',
      marginRight: '0.35rem',
      marginBottom: '0.12rem',
      backgroundColor: '#9e9e9e',
      borderRadius: '50%',
      display: 'inline-block'
    }

    const [characters, setCharacters] = useState<ResultObject>()
    const [page, setPage] = useState(1)

    let url = `https://rickandmortyapi.com/api/character?page=${page}`



    const getCharacters = async () => {

      const allCharacters = await fetch(url).then(res => res.json())
      setCharacters(allCharacters)

       
    }
    useEffect(() => {
      getCharacters()
    }, [])

    const handleNextPage = async () => {
      setPage(page + 1)
      const allCharacters = await fetch(url).then(res => res.json())
      setCharacters(allCharacters)
    }

    const handlePreviousPage = async () => {
      setPage(page - 1)
      const allCharacters = await fetch(url).then(res => res.json())
      setCharacters(allCharacters)
    }

    console.log(characters)
    return (
    <div>
        <section>
            <div className='chars'>
            {characters?.results.splice(0,20).map((character, i) => (
                <article className='card' key={i}>                    
                    <div>
                        <img src={character.image} alt="" />
                    </div>
                    <div>
                        <div className='section'>
                            <a href='#' className='char-name'>{character.name}</a>
                            <span>
                              <span style={character.status === 'Alive' ?  alive_status_icon : character.status === 'unknown' ? unknown_status_icon : deceased_status_icon} className='status-icon'></span>
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
        <div className='container-buttons'>
          <div>
          <button onClick={() => handlePreviousPage()} className='prev-button'>
          <FontAwesomeIcon className='arrow-left' icon={faArrowLeft}></FontAwesomeIcon>Prev</button>
          </div>
          <div>
          <button onClick={() => handleNextPage()} className='next-button'>Next
          <FontAwesomeIcon className='arrow-right' icon={faArrowRight}></FontAwesomeIcon>
          </button>
          </div>
        </div>
    </div>
  )
}

export default Content;
