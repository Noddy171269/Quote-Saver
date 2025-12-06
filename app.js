let savedStuff = JSON.parse(localStorage.getItem("savedStuff")) || [];

const quoteBox = document.getElementById("quoteBox");
const saveBtn = document.getElementById("saveBtn");
const listArea = document.getElementById("listArea");

function showStuff() {
  listArea.innerHTML = "";
  savedStuff.forEach((item, idx) => {
    const li = document.createElement("li");
    li.textContent = item;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => removeStuff(idx);

    li.appendChild(removeBtn);
    listArea.appendChild(li);
  });
}

function addStuff() {
  const text = quoteBox.value.trim();
  if (!text) return;

  savedStuff.push(text);
  localStorage.setItem("savedStuff", JSON.stringify(savedStuff));

  quoteBox.value = "";
  showStuff();
}

function removeStuff(i) {
  savedStuff.splice(i, 1);
  localStorage.setItem("savedStuff", JSON.stringify(savedStuff));
  showStuff();
}

saveBtn.addEventListener("click", addStuff);
showStuff();
