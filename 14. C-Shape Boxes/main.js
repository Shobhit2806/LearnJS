const boxes = document.querySelectorAll(".col");
const boxContainer = document.querySelector(".box-container");

let queue = [];

//Implementing event delegation in this

boxContainer.addEventListener("click", function (e) {
  let index = e.target.dataset.index;
  if (index != undefined) {
    e.target.style.backgroundColor = "green";

    queue.push(index);
  }

  if (queue.length === 7) {
    let cnt = 0;
    for (let i = 0; i < queue.length; i++) {
      setTimeout(() => {
        boxes[queue[i]].style.backgroundColor = "white";
        cnt++;
        if (cnt === 7) {
          queue = [];
        }
      }, 500 * i);
    }
  }
});

// boxes.forEach((box) => {
//   box.addEventListener("click", function (e) {
//     // let index = e.target.dataset.index;
//     queue.push(box);
//     box.style.backgroundColor = "green";

//     if (queue.length === 7) {
//       let cnt = 0;
//       for (let i = 0; i < queue.length; i++) {
//         setTimeout(() => {
//           queue[i].style.backgroundColor = "white";
//           cnt++;
//           if (cnt === 7) {
//             queue = [];
//           }
//         }, 500 * i);
//       }
//     }
//   });
// });
