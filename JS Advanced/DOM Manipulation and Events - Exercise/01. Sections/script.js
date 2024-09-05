function create(words) {
  let div = document.getElementById("content");

  for (let i = 0; i < words.length; i++) {
    let section = document.createElement("div");
    let sectionContent = document.createElement("p");

    sectionContent.textContent = words[i];
    sectionContent.style.display = "none";

    div.appendChild(section);
    section.appendChild(sectionContent);

    section.addEventListener('click', (e) => {
      e.target.children[0].style.display = "block"
    })
  }
}
