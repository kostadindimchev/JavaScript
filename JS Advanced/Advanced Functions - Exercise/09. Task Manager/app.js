function solve() {
  const task = document.getElementById("task");
  const description = document.getElementById("description");
  const date = document.getElementById("date");
  const [addTask, open, inProgress, complete] = document.querySelectorAll("section > div:nth-child(2)");
  document.getElementById("add").addEventListener("click", add);

  function add(ev) {
    ev.preventDefault();

    if (task.value && description.value && date.value) {
      const article = document.createElement("article");

      const h3 = document.createElement("h3");
      h3.textContent = `${task.value}`;
      article.appendChild(h3);

      const p1 = document.createElement("p");
      p1.textContent = `Description: ${description.value}`;
      article.appendChild(p1);

      const p2 = document.createElement("p");
      p2.textContent = `Due Date: ${date.value}`;
      article.appendChild(p2);

      const div = document.createElement("div");
      div.className = "flex";

      const startBtn = document.createElement("button");
      startBtn.textContent = "Start";
      startBtn.className = "green";
      startBtn.addEventListener("click", start);
      div.appendChild(startBtn);

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "red";
      deleteBtn.addEventListener("click", goDelete);
      div.appendChild(deleteBtn);

      article.appendChild(div);
      open.appendChild(article);

      [task.value, description.value, date.value] = ["", "", ""];

      function start() {
        inProgress.appendChild(article);
        const finishBtn = document.createElement("button");
        finishBtn.textContent = "Finish";
        finishBtn.className = "orange";
        finishBtn.addEventListener("click", finish);
        div.appendChild(finishBtn);
        startBtn.remove();
      }

      function goDelete() {
        article.remove();
      }

      function finish() {
        complete.appendChild(article);
        div.remove();
      }
    }
  }
}
