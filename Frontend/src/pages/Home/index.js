import { useState, useEffect } from "react"
import TopList from "./TopList";

function Home() {
    const [animeList, SetAnimeList] = useState([]);
    const [topAnime, SetTopAnime] = useState([]);
    const [search, SetSearch] = useState("");

    const GetTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
            .then(res => res.json());

        SetTopAnime(temp.top.slice(0, 10));
    }

    useEffect(() => {
            GetTopAnime();

    }, [])

    return (
        <div>
            <TopList topAnime={topAnime}/>
            
        </div>
    )
}

export default Home
