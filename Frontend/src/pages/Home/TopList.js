import React from 'react'

function TopList({ topAnime }) {
    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {typeof topAnime == undefined ? "" :
                topAnime.map(anime => (
                    <a
                        href={anime.url}
                        target='_blank'
                        key={anime.mal_id}
                        rel='noreferrer'>
                        {anime.title}
                    </a>
                ))}
            </nav>
        </aside>
    )
}

export default TopList
