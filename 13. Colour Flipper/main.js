const BgColor = document.getElementById("bg-color-code");
const Content_Area = document.getElementById("content-area");
const clickBtn = document.getElementById("click-btn");
const simpleBtn = document.getElementById("simple");
const hexBtn = document.getElementById("hex");

let ColorArr = ["Red", "Green", "Yellow"];
let HexColArray = [" #F1f5f8", "#B342A8", "#2889CE"];
let isHex = false;
clickBtn.addEventListener("click", function () {
  let randomColor;
  if (isHex) {
    randomColor = HexColArray[Math.floor(Math.random() * ColorArr.length)];
  } else {
    randomColor = ColorArr[Math.floor(Math.random() * ColorArr.length)];
  }

  BgColor.innerText = randomColor;
  Content_Area.style.backgroundColor = randomColor;
});

hexBtn.addEventListener("click", function () {
  isHex = true;
  let randomColor = HexColArray[Math.floor(Math.random() * ColorArr.length)];
  BgColor.innerText = randomColor;
  Content_Area.style.backgroundColor = randomColor;
});

simpleBtn.addEventListener('click',function(){
    isHex=false;
    let randomColor = ColorArr[Math.floor(Math.random() * ColorArr.length)];
    BgColor.innerText = randomColor;
    Content_Area.style.backgroundColor = randomColor;
})