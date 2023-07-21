const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quoteText");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");
const twitterIcon = document.getElementById("twitter-icon")
const loader = document.getElementById("loader");
// Get quotes from api

let apiQuotes = [];



// Show Loading
function loading(){
  loader.hidden = false;
  quoteContainer.style.display = 'none';
}

// Show Complete
function complete(){
  quoteContainer.style.display = 'block';
  loader.hidden = true;
}


function newQuote() {
  loading()
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  if (!quote.author) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = quote.author;
  }

  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;
  complete();
}

async function getQuotes() {
  loading()
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {}
}

function tweetQuote() {
  const twitterUrl = `
  https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  window.open(twitterUrl, "_blank");
}


// Event Listeners

newQuoteBtn.addEventListener('click',getQuotes)
twitterIcon.addEventListener('click',tweetQuote)


getQuotes();
// loading();
