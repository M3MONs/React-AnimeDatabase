import React from "react";
import AnimeCard from "./AnimeCard";

function MainContent(props) {
  return (
    <main>
      <div className="main-header">
        <h2>Search Anime</h2>
        <form className="search-box" onSubmit={props.HandleSearch}>
          <input
            type="text"
            placeholder="Search for an anime..."
            required
            value={props.search}
            onChange={(e) => props.setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="anime-list">
        {props.animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </main>
  );
}

export default MainContent;
