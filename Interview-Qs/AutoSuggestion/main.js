// Mock Server
const FAILURE_COUNT = 10;
const LATENCY = 200;

function getRandomBool(n) {
  const threshold = 1000;
  if (n > threshold) n = threshold;
  return Math.floor(Math.random() * threshold) % n === 0;
}

function getSuggestions(text) {
  var pre = 'pre';
  var post = 'post';
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  return new Promise((resolve, reject) => {
    const randomTimeout = Math.random() * LATENCY;
    setTimeout(() => {
      if (getRandomBool(FAILURE_COUNT)) {
        reject();
      } else {
        resolve(results);
      }
    }, randomTimeout);
  });
}

// Create an Auto Suggestion Box in Vanilla JS
// Create a suggestion area bottom to the input box that shows the suggestion list.
// The list is visible when the input box is in focus or when user types, it hides when the input box is blurred
// getSuggestions(text); method will act as mock server and will return random text based on the inputs with 0 - 200 millisceond latency and may fail.
// if a suggestion is clicked, populate the input box with its value and bring input box in focus

(function(){
    const input = document.getElementById("search");
    const suggestionArea = document.getElementById("suggestion-area");
   
    const onFocus = ()=>{
        suggestionArea.style.display = "block"
    }
    const onBlur = (e)=>{
        if(e.target=== input || e.target===suggestionArea){
            return;
        }
        suggestionArea.style.display = "none"
    }
    const onChange = (e)=>{
        getData(e.target.value);
  
    }
    const handleSuggestionClick = (e)=>{
        if(e.target===suggestionArea){
            return;
        }
        input.value =e.target.innerText
        input.focus()
    }
    const getData = async (val) =>{
        suggestionArea.innerHTML=""
        if(!val){
           
            return;
        }
        try{
            const data = await getSuggestions(val);
            if(data.length>0){
                const list = document.createElement('ul');
                data.forEach(element => {
                    const li = document.createElement('li');
                    li.innerHTML=element;
                    li.style.cursor = "pointer"
                    list.appendChild(li);
                });
                suggestionArea.innerHTML=""
                suggestionArea.appendChild(list);
            }   
        }catch(err){
            console.log(err)
        }
    }
    input.addEventListener("focus",onFocus);
    window.addEventListener("click",onBlur);
    input.addEventListener("keyup",onChange);
    suggestionArea.addEventListener("click",handleSuggestionClick,true)
}())