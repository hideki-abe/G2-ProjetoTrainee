import AnimeCard from "./AnimeCard"
import { useEffect } from "react"

function MainContent(props) {

    function MapList() {
        console.log('Teste')

        return(
            <div className="anime-list">
                {props.animeList.length === 0 ? "" :
                props.animeList.map(anime => (
                <AnimeCard
                    anime={anime}
                    key={anime.mal_id} />
                ))}
            </div>
        )
    }

    useEffect(() => {
        console.log(props.animeList);
    }, [props.animeList])

    return (
        <main>            
            <div className="main-head">
                <form 
                    className="search-box"
                    onSubmit={(e) => props.HandleSearch(e)}>
                    <input
                        type="search"
                        placeholder="Pesquise seu anime aqui..."
                        required 
                        value={props.search}
                        onChange={e => props.SetSearch(e.target.value)}/>
                    <button
                        type="submit">
                            Pesquisar
                    </button>
                </form>
            </div>

            {MapList()}
            
        </main>

    )
}

export default MainContent
