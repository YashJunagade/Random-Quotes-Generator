import { FaRetweet } from "react-icons/fa6";

function Controls({ tweetQuote, fetchQuote }) {
  return (
    <div className="controls-container">
      <a
        href="twitter.com/intent/tweet"
        id="tweet-quote"
        onClick={(e) => {
          e.preventDefault();
          tweetQuote();
        }}
      >
        <button>
          <i class="fa-brands fa-square-x-twitter"></i> tweet
        </button>
      </a>
      <div id="new-quote">
        <button onClick={fetchQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default Controls;
