import Controls from "./components/controls";
import Display from "./components/Display";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Contribute from "./components/Contribute";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    try {
      setLoding(true);
      const { data } = await axios.get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      );
      const randomQuote =
        data.quotes[Math.floor(Math.random() * data.quotes.length)];
      setAuthor(randomQuote.author);
      setQuote(randomQuote.quote);
      setLoding(false);
    } catch (error) {
      console.error("Error fetching the Quote : ", error);
      setLoding(false);
    }
  }

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" — ${author}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <>
      <div id="quote-box">
        <Display author={author} quote={quote} loding={loding}></Display>
        <Controls tweetQuote={tweetQuote} fetchQuote={fetchQuote}></Controls>
      </div>
      <Contribute />
    </>
  );
}

export default App;
