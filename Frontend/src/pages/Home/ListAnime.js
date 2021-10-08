import AnimeCard from "./AnimeCard"

function ListAnime({animeList}) {
    function MapList() {

        return(
            <div className="anime-list">
                {typeof animeList == 'undefined' ? console.log("503: Serviço Indisponível") :
                animeList.map(anime => (
                <AnimeCard
                    anime={anime}
                    key={anime.mal_id} />
                ))}
            </div>
        )
    }

    return (
        MapList()
    )
}

export default ListAnime
