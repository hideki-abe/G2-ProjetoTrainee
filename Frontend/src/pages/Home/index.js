import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../../contexts/Auth";
import TopList from "./TopList";
import MainContent from "./MainContent";
import './style.css'

function Home() {

    const{ user } = useContext(AuthContext);
    console.log(user);
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
        <div className="page-content">
            <h2>Bem vindo <strong>{user.username}.</strong> Pesquise animes abaixo para encontrá-los no MyAnimeList. <br/><span>Dica: comece por seu anime favorito!</span></h2>
            <div className="content-wrap">
                <TopList topAnime={topAnime}/>
                <MainContent
                    HandleSearch={HandleSearch}
                    search={search}
                    SetSearch={SetSearch}
                    animeList={animeList} />
            </div>
        </div>
        
    )
}

export default Home
