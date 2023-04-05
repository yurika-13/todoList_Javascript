import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(completeButton.parentNode);
    const completeTarget = completeButton.parentNode;
    document.getElementById("complete-list").appendChild(completeTarget);
    div.removeChild(completeButton);
    div.removeChild(deleteButton);
    div.appendChild(returnButton);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  const returnButton = document.createElement("button");
  returnButton.innerText = "戻す";
  returnButton.addEventListener("click", () => {
    const returnTarget = returnButton.parentNode;
    document.getElementById("complete-list").removeChild(returnTarget);
    document.getElementById("imconprete-list").appendChild(returnTarget);

    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    div.removeChild(returnButton);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  console.log(div);

  document.getElementById("imconprete-list").appendChild(div);
};

const deleteFromIncompleteList = (target) => {
  document.getElementById("imconprete-list").removeChild(target);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
