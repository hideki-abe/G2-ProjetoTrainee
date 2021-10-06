import { useState, useEffect } from "react"
import TopList from "./TopList";
import MainContent from "./MainContent";

function Home() {
    const [animeList, SetAnimeList] = useState([]);
    const [topAnime, SetTopAnime] = useState([]);
    const [search, SetSearch] = useState("");

    const GetTopAnime = async () => {
        const temp = await fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
            .then(res => res.json());

        SetTopAnime(temp.top.slice(0, 10));
    }

    const HandleSearch = e => {
        e.preventDefault();

        FetchAnime(search);
    }

    const FetchAnime = async (query) => {
        try {
           const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`)
            .then(res => res.json());

            SetAnimeList(temp.results); 
        } catch (err) {
            console.log(err);
            SetAnimeList([]);
        }
    }

    useEffect(() => {
            GetTopAnime();

    }, [])

    return (
        <div className="content-wrap">
            <TopList topAnime={topAnime}/>
            <MainContent
                HandleSearch={HandleSearch}
                search={search}
                SetSearch={SetSearch}
                animeList={animeList} />
        </div>
    )
}

export default Home
