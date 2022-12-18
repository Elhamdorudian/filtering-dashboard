import React, {useState} from "react";
import axios from "axios";
function Quotes() {
  const [text, setText] = useState("");
  const author = ""
function getQuote() {
    axios.get("http://localhost:8000/packages",  { crossdomain: true }).then(response => {
      setText(response.data[0].price);
      console.log(response.data[0].price)
    });
  }
return (
    <div>
      <button onClick={getQuote}>
        package price
      </button>
      <h1>{text}</h1>
      <h3>{"-" + author}</h3>
    </div>
  )
}
export default Quotes;