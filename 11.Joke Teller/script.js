const button = document.getElementById("button");
const audioElement = document.getElementById("audio");

const jokeApiUrl = "https://v2.jokeapi.dev/joke/Dark";

let jokes = [];
let joke = "";
async function getJoke() {
  toggleButton();
  try {
    const response = await fetch(jokeApiUrl);
    jokes = await response.json();
    if (jokes.setup) {
      joke = jokes.setup + jokes.delivery;
    } else {
      joke = jokes.joke;
    }
    console.log(jokes);
    tellMe();
  } catch (err) {}
}

function toggleButton() {
  button.disabled = !button.disabled;
}


function tellMe() {
  VoiceRSS.speech({
    key: "783e4d6ee5da4c0f8377b5fa39862976",
    src: joke,
    hl: "en-us",
    v: "Linda",
    r: 0,
    c: "mp3",
    f: "44khz_16bit_stereo",
    ssml: false,
  });
}

button.addEventListener("click", getJoke);
audioElement.addEventListener("ended", toggleButton);
