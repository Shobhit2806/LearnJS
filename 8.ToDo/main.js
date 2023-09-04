const inputField = document.getElementById("input-field");
const submitBtn = document.getElementById("submit-btn");
const ItemTitle = document.getElementById("item-title");
const ItemContainer = document.querySelector("#items-container");
const Test = document.querySelector("#test");
const contentCard = document.querySelector("#content-card");
const clearBtn = document.querySelector("#clear-items-btn");
const testGet = document.getElementsByTagName("div");
const testQuery = document.querySelectorAll("div");
let editFlag = false;
let editElement, editId;

window.addEventListener("DOMContentLoaded", setupItems);

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputField.value === "") {
    return;
  }
  if (editFlag) {
    editFlag = false;
    editElement.firstChild.textContent = inputField.value;
    submitBtn.textContent = "Submit";

    editTaskFromLocalStorage(editId, inputField.value);
  } else {
    const id = new Date().getTime().toString();

    const element = document.createElement("div");
    element.className = "items";

    const p = document.createElement("p");
    p.innerHTML = inputField.value;
    p.className = "item-title";

    const iconsDiv = document.createElement("div");
    iconsDiv.className = "icons";

    const editBtn = document.createElement("i");
    editBtn.innerHTML = `<i class="fa fa-edit edit-btn" style="color: green; font-size: 3vh"></i>`;

    const delBtn = document.createElement("i");
    delBtn.innerHTML = `<i class="fa fa-trash del-btn" style="color: red; font-size: 3vh"></i>`;

    element.appendChild(p);
    iconsDiv.appendChild(editBtn);
    iconsDiv.appendChild(delBtn);

    element.appendChild(iconsDiv);

    ItemContainer.appendChild(element);

    addToLocalStorage(id, inputField.value);

    delBtn.addEventListener("click", function () {
      ItemContainer.removeChild(element);
      removeFromLocalStorage(id);
    });

    editBtn.addEventListener("click", function () {
      editElement = element;
      inputField.value = element.firstChild.textContent;
      submitBtn.textContent = "Edit";
      editFlag = true;
      editId = id;
    });
  }

  inputField.value = "";
  clearItems();

  // log vs dir
  console.log(ItemContainer);
  console.dir(ItemContainer);

  // Live Collections: All methods "getElementsBy*" return a live collection. Such collections always reflect the current state of the document and “auto-update” when it changes.
  console.log(testGet.length, testQuery.length);
});

function clearItems() {
  if (ItemContainer.children.length == 1) {
    clearBtn.innerText = "Clear Items";
  }

  clearBtn.addEventListener("click", function () {
    ItemContainer.childNodes.forEach((item) => {
      ItemContainer.removeChild(item);
    });
    clearBtn.innerText = "";
    localStorage.removeItem("list");
  });
}

/*********Local storage*********/

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function addToLocalStorage(id, value) {
  const task = { id, value };
  let tasks = getLocalStorage();
  tasks.push(task);
  localStorage.setItem("list", JSON.stringify(tasks));
}

function removeFromLocalStorage(id) {
  let tasks = getLocalStorage();
  tasks = tasks.filter((item) => item.id != id);
  localStorage.setItem("list", JSON.stringify(tasks));
}

function editTaskFromLocalStorage(id, value) {
  let tasks = getLocalStorage();

  tasks = tasks.map((task) => {
    if (task.id === id) {
      task.value = value;
    }
    return task;
  });
  localStorage.setItem("list", JSON.stringify(tasks));
}

function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function (item) {
      createTaskFromLocal(item.id, item.value);
    });
  }
}

function createTaskFromLocal(id, value) {
  const element = document.createElement("div");
  element.className = "items";

  const p = document.createElement("p");
  p.innerHTML = value;
  p.className = "item-title";

  const iconsDiv = document.createElement("div");
  iconsDiv.className = "icons";

  const editBtn = document.createElement("i");
  editBtn.innerHTML = `<i class="fa fa-edit edit-btn" style="color: green; font-size: 3vh"></i>`;

  const delBtn = document.createElement("i");
  delBtn.innerHTML = `<i class="fa fa-trash del-btn" style="color: red; font-size: 3vh"></i>`;

  element.appendChild(p);
  iconsDiv.appendChild(editBtn);
  iconsDiv.appendChild(delBtn);

  element.appendChild(iconsDiv);

  ItemContainer.appendChild(element);

  addToLocalStorage(id, value);

  delBtn.addEventListener("click", function () {
    ItemContainer.removeChild(element);
    removeFromLocalStorage(id);
  });

  editBtn.addEventListener("click", function () {
    editElement = element;
    value = element.firstChild.textContent;
    submitBtn.textContent = "Edit";
    editFlag = true;
    editId = id;
  });
}
