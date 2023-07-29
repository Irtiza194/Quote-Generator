const btn = document.getElementById("btn");
const place = document.getElementById("label");
const auth = document.getElementById("author");
const url = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      place.innerText = item.content;
      auth.innerText = item.author;
    });
};
window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
