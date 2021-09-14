import React from "react";

function AnimeCard({ anime }) {
  return (
    <section className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.image_url} alt={anime.title} />
        </figure>
        <h3>{anime.title}</h3>
      </a>
    </section>
  );
}

export default AnimeCard;
