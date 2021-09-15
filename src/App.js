import { useState, useEffect } from "react";
import Header from "./components/Header";
import TopAnime from "./components/TopAnime";
import AnimeQuote from "./components/AnimeQuote";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [quotes, setQuotes] = useState(null);

  const GetTopAnime = async () => {
    const temp = await fetch(
      "https://api.jikan.moe/v3/top/anime/1/bypopularity"
    ).then((res) => res.json());

    setTopAnime(temp.top.slice(0, 10));
    setAnimeList(temp.top.slice(12, 24));
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=12`
    ).then((res) => res.json());

    setAnimeList(temp.results);
  };

  const GetQuotes = async () => {
    const temp = await fetch("https://animechan.vercel.app/api/random").then(
      (res) => res.json()
    );
    setQuotes(temp);
  };

  useEffect(() => {
    GetQuotes();
    GetTopAnime();
  }, []);

  return (
    <div className="App">
      <Header />
      <TopAnime topAnime={topAnime} />
      {quotes&&<AnimeQuote quotes={quotes}/>}
      <MainContent
        HandleSearch={HandleSearch}
        search={search}
        setSearch={setSearch}
        animeList={animeList}
      />
      <Footer />
    </div>
  );
}

export default App;
