document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleForm);

  const deleteButton = document.querySelector("#delete");
  deleteButton.addEventListener("click", handleDelete);
})

const handleForm = function (event){
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const listItem = document.createElement("LI")
  let titleText = `Title: ${title}`;
  let authorText = `Author: ${author}`; 
  let categoryText = `Category: ${category}`;
  // const br = document.createElement("BR");
  const titleNode = document.createElement("P");
  const authorNode = document.createElement("P");
  const categoryNode = document.createElement("P");
  titleNode.textContent = titleText;
  authorNode.textContent = authorText;
  categoryNode.textContent = categoryText;
  titleNode.classList.add("list-element");
  authorNode.classList.add("list-element");
  categoryNode.classList.add("list-element");
  listItem.appendChild(titleNode);
  // listItem.appendChild(br);
  listItem.appendChild(authorNode);
  listItem.appendChild(categoryNode);

  const readingList = document.querySelector("#reading-list");
  readingList.appendChild(listItem);
  document.querySelector("#new-item-form").reset();
}

const handleDelete = function () {
  const readingList = document.querySelector("#reading-list")
  readingList.innerHTML = "";
}
