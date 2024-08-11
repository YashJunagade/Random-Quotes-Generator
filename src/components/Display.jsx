import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Display({ author, quote, loding }) {
  return (
    <div className="display-container">
      <div id="text">
        <FaQuoteLeft className="quote-icon1" />
        {loding ? "Loading..." : `${quote}`}
        <FaQuoteRight className="quote-icon2" />
      </div>
      <div id="author">-- {loding ? "" : `${author}`}</div>
    </div>
  );
}

export default Display;
