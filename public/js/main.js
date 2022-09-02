const deleteBtn = document.querySelectorAll(".del");
const todoItem = document.querySelectorAll("span.not");
const todoComplete = document.querySelectorAll("span.completed");

const imageFile = document.getElementById("image-file");
const previewImg = document.getElementById("preview-img");
const base64 = document.getElementById("base64");

const topTextPreview = document.getElementById("top-text-preview");
const bottomTextPreview = document.getElementById("bottom-text-preview");
const topTextInput = document.getElementById("top-text-input");
const bottomTextInput = document.getElementById("bottom-text-input");

topTextInput.addEventListener("keyup", (e) => previewMemeText(e));
bottomTextInput.addEventListener("keyup", (e) => previewMemeText(e));

function previewMemeText(e) {
  switch (e.target.name) {
    case "topCaption":
      topTextPreview.innerText = e.target.value;
      break;
    case "bottomCaption":
      bottomTextPreview.innerText = e.target.value;
      break;
    default:
      break;
  }

  console.log(e.target.name);
  console.log(e.target.value);
}

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTodo);
});

Array.from(todoItem).forEach((el) => {
  el.addEventListener("click", markComplete);
});

Array.from(todoComplete).forEach((el) => {
  el.addEventListener("click", markIncomplete);
});

imageFile.addEventListener("change", (e) => handleFileInputChange(e));

function handleFileInputChange(e) {
  const file = e.target.files[0];
  previewFile(file);
}

function previewFile(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    previewImg.src = reader.result;
    base64.setAttribute("value", reader.result);
  };
}

async function deleteTodo() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markComplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markIncomplete() {
  const todoId = this.parentNode.dataset.id;
  try {
    const response = await fetch("todos/markIncomplete", {
      method: "put",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}
