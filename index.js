let groceryLi = document.querySelector("ul");
console.log(groceryLi);

groceryLi.addEventListener("click", (e) => {
  let targetEle = e.target;
  console.log(targetEle);
  if (targetEle.className === "delete") {
    targetEle.parentElement.remove();
  }
});

let submitFormEle = document.getElementById("add-items");
console.log(submitFormEle);

submitFormEle.addEventListener("submit", (e) => {
  e.preventDefault();
  let addInputEle = document.getElementById("add-input-items");
  let ulEle = document.getElementsByTagName("ul")[0];
  const liEle = document.createElement("li");
  const addItem = document.createElement("span");
  const deleteItem = document.createElement("span");

  addItem.textContent = addInputEle.value;
  deleteItem.textContent = "Delete";
  addItem.classList.add("item");
  deleteItem.classList.add("delete");

  liEle.appendChild(addItem);
  liEle.appendChild(deleteItem);
  ulEle.appendChild(liEle);
});

let groceryList = document.getElementById("grocery-list");
let check = document.getElementById("hide");

check.addEventListener("change", () => {
  if (check.checked) {
    groceryList.style.display = "none";
  } else {
    groceryList.style.display = "block";
  }
});

let searchGroceryItems = document.getElementById("search-item");
let searchInput = document.getElementById("input-search");
console.log(searchGroceryItems);
console.log(searchInput.value);
searchGroceryItems.addEventListener("keyup", (e) => {
  let searchTerm = e.target.value.toLowerCase();
  let groceryList = document.getElementsByTagName("ul");
  const grocery = document.getElementsByTagName("li");
  console.log(grocery);
  for (let i = 0; i < grocery.length; i++) {
    let groceryName = grocery[i].firstElementChild.textContent.toLowerCase();
    if (groceryName.indexOf(searchTerm) !== -1) {
      grocery[i].style.display = "flex";
    } else {
      grocery[i].style.display = "none";
    }
  }
});
