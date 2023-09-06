const boxes = document.querySelectorAll(".col");

let queue = [];

boxes.forEach((box) => {
  box.addEventListener("click", function (e) {
    // let index = e.target.dataset.index;
    queue.push(box);
    box.style.backgroundColor = "green";

    if (queue.length === 7) {
      let cnt = 0;
      for (let i = 0; i < queue.length; i++) {
        setTimeout(() => {
          queue[i].style.backgroundColor = "white";
          cnt++;
          if (cnt === 7) {
            queue = [];
          }
        }, 500 * i);
      }
    }
  });
});
