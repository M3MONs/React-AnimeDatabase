import React from "react";

function AnimeQuote({ quotes }) {
  return (
    <section>
      <div className="anime-quote">
        <div className="quote">{quotes.quote}</div>
        <h2>{quotes.character}</h2>
      </div>
    </section>
  );
}

export default AnimeQuote;
