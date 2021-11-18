document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("#new-item-form");
  form.addEventListener("submit", handleForm);
})

const handleForm = function (event){
  event.preventDefault();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;

  const listItem = document.createElement("LI")
  const listText = document.createTextNode(`${title}, ${author}, ${category}`)
  listItem.appendChild(listText);

  const readingList = document.querySelector("#reading-list");
  readingList.appendChild(listItem);
  document.querySelector("#new-item-form").reset();
}