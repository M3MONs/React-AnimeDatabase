import React from "react";
import AnimeCard from "./AnimeCard";

function MainContent({ animeList, search }) {
    const handleDefault = (e) => {
        e.preventDefault();
    };
    return (
        <main>
            <div className='main-header'>
                <h2>Search Anime</h2>
                <form className='search-box' onSubmit={handleDefault}>
                    <input type='text' placeholder='Search for an anime...' onChange={search} />
                </form>
            </div>
            <div className='anime-list'>
                {animeList.map((anime) => (
                    <AnimeCard key={anime.mal_id} anime={anime} />
                ))}
            </div>
        </main>
    );
}

export default MainContent;
