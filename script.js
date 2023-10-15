const jokeContainer = document.getElementById("jokes");
const btn = document.getElementById("getjokes");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then (item => {
        jokeContainer.textContent = `${item.joke}`;
    });
}

btn.addEventListener("click",getJoke);
getJoke();
