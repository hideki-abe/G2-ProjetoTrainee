import { useEffect } from "react"
import SearchBox from "./SearchBox"
import ListAnime from "./ListAnime"

function MainContent(props) {

    useEffect(() => {
        console.log(props.animeList);
    }, [props.animeList])

    return (
        <main>            
            <SearchBox                 
                HandleSearch={props.HandleSearch}
                search={props.search}
                SetSearch={props.SetSearch}
                />

            <ListAnime
                animeList={props.animeList}
                />
            
        </main>

    )
}

export default MainContent
