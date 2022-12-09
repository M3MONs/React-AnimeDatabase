import React from "react";

function AnimeCard({ anime }) {
    const { url, title, images = {} } = anime;
    return (
        <section className='anime-card'>
            <a href={url} target='_blank' rel='noreferrer'>
                <figure>
                    <img src={images.webp.image_url} alt={title} />
                </figure>
                <h3>{title}</h3>
            </a>
        </section>
    );
}

export default AnimeCard;
