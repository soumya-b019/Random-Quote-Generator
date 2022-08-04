
const qts = document.querySelector("#qts");
const auth = document.querySelector("#auth");
const btn = document.querySelector("#btn");

btn.addEventListener("click", getQuote);

function getQuote(){
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
    .then(data => {
        qts.innerHTML = `"${data.content}"`;
        auth.innerHTML = data.author;
    })
}