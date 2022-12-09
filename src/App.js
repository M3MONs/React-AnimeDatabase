import { useState, useEffect } from "react";
import Header from "./components/Header";
import TopAnime from "./components/TopAnime";
import AnimeQuote from "./components/AnimeQuote";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import axios from "axios";

function App() {
    const [animeList, setAnimeList] = useState([]);
    const [topAnime, setTopAnime] = useState([]);
    const [quotes, setQuotes] = useState(null);

    /**
     * The function getTopAnime is an asynchronous function that uses the axios library to make a GET
     * request to the Jikan API and returns the data from the response.
     */
    const getTopAnime = async () => {
        const topAnimeLink = "https://api.jikan.moe/v4/top/anime?page=1&limit=10";
        try {
            const { data } = await axios.get(topAnimeLink);
            setTopAnime(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    /**
     * The function gets the data from the API and sets the state of the animeList to the data from the
     * API.
     */
    const getAnime = async () => {
        const animeLink = "https://api.jikan.moe/v4/top/anime?page=2&limit=12";
        try {
            const { data } = await axios.get(animeLink);
            setAnimeList(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    /**
     * It gets a random quote from the API and sets it to the state.
     */
    const getQuotes = async () => {
        const quotesLink = "https://animechan.vercel.app/api/random";
        try {
            const { data } = await axios.get(quotesLink);
            setQuotes(data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSearchAnime = async (e) => {
        const name = e.target.value;
        if (name === "") {
            getAnime();
            return;
        }
        if (name.length < 2) return;

        try {
            const animeLink = `https://api.jikan.moe/v4/anime?q=${name}&order_by="title"`;
            const { data } = await axios.get(animeLink);
            setAnimeList(data.data.slice(0, 12));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTopAnime();
        getQuotes();
        getAnime();
    }, []);

    return (
        <div className='App'>
            <Header />
            <TopAnime topAnime={topAnime} />
            {quotes && <AnimeQuote quotes={quotes} />}
            <MainContent search={handleSearchAnime} animeList={animeList} />
            <Footer />
        </div>
    );
}

export default App;
