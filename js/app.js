document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleForm);

  const deleteButton = document.querySelector("#delete");
  deleteButton.addEventListener("click", handleDelete);

  individualDelete = document.querySelector("#test1");
  individualDelete.addEventListener("click", handleDeleteIndividual);

  individualDelete = document.querySelector("#test2");
  individualDelete.addEventListener("click", handleDeleteIndividual);

  individualDelete = document.querySelector("#test3");
  individualDelete.addEventListener("click", handleDeleteIndividual);

  individualDelete = document.querySelector("#test4");
  individualDelete.addEventListener("click", handleDeleteIndividual);

  individualDelete = document.querySelector("#test5");
  individualDelete.addEventListener("click", handleDeleteIndividual);

  individualDelete = document.querySelector("#test6");
  individualDelete.addEventListener("click", handleDeleteIndividual);

  individualDelete = document.querySelector("#test7");
  individualDelete.addEventListener("click", handleDeleteIndividual);

  individualDelete = document.querySelector("#test8");
  individualDelete.addEventListener("click", handleDeleteIndividual);

  individualDelete = document.querySelector("#test9");
  individualDelete.addEventListener("click", handleDeleteIndividual);
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
  
  // individual delete
  const individualDelete = document.createElement("BUTTON");
  individualDelete.innerHTML = "Delete";
  individualDelete.id = title + author + category;
  console.log(individualDelete.id);
  individualDelete.addEventListener("click", handleDeleteIndividual);
  console.log("individualDelete:", individualDelete);

  listItem.appendChild(titleNode);
  // listItem.appendChild(br);
  listItem.appendChild(authorNode);
  listItem.appendChild(categoryNode);
  listItem.appendChild(individualDelete);

  listItem.id = `${individualDelete.id}`;

  const readingList = document.querySelector("#reading-list");
  readingList.appendChild(listItem);
  document.querySelector("#new-item-form").reset();
}

const handleDelete = function () {
  const readingList = document.querySelector("#reading-list")
  readingList.innerHTML = "";
}

// individual delete
const handleDeleteIndividual = function (event) {
  console.log("ID:", event.target.id);
  const parentUl = document.querySelector("#reading-list");
  let liToDelete = document.querySelector(`#${event.target.id}`);
  console.log(liToDelete);
  parentUl.removeChild(liToDelete);
};
