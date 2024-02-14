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
