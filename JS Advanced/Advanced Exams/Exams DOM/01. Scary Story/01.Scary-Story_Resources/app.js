window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const ageInput = document.getElementById("age");
  const storyTitleInput = document.getElementById("story-title");
  const storyText = document.getElementById("story");
  const genreSelection = document.getElementById('genre')

  const publishButton = document.getElementById("form-btn");
  const ulElement = document.getElementById("preview-list");
  const main = document.getElementById("main");
  const bodyElement = document.querySelector('.body')

  publishButton.addEventListener("click", () => {
    if (firstNameInput.value == '' || lastNameInput.value == '' || ageInput.value == '' || storyTitleInput.value == '' || storyText.value == ''){
      return;
    } else {
      publishButton.disabled = true;

      const name = firstNameInput.value;
      const lastName = lastNameInput.value;
      const age = ageInput.value;
      const title = storyTitleInput.value;
      const genre = genreSelection.value;
      const story = storyText.value;

      const li = document.createElement('li');
      li.setAttribute("class","story-info")
      li.setAttribute('class','story-info');
      const article = document.createElement('article');
      const h4 = document.createElement('h4');
      h4.textContent = `Name: ${name} ${lastName}`
      const p1 = document.createElement('p');
      p1.textContent = `Age: ${age}`
      const p2 = document.createElement('p');
      p2.textContent = `Title: ${title}`
      const p3 = document.createElement('p');
      p3.textContent = `Genre: ${genre}`
      const p4 = document.createElement('P')
      p4.textContent = storyText.value

      const saveButton = document.createElement('button');
      saveButton.setAttribute("class","save-btn")
      saveButton.textContent = 'Save Story'
      const editButton = document.createElement('button');
      editButton.setAttribute("class","edit-btn")
      editButton.textContent = 'Edit Story'
      const deleteButton = document.createElement('button');
      deleteButton.setAttribute("class","delete-btn")
      deleteButton.textContent = 'Delete Story'

      ulElement.appendChild(li)
      li.appendChild(article)
      li.appendChild(saveButton)
      li.appendChild(editButton)
      li.appendChild(deleteButton)
      article.appendChild(h4)
      article.appendChild(p1)
      article.appendChild(p2)
      article.appendChild(p3)
      article.appendChild(p4)

      firstNameInput.value = '';
      lastNameInput.value = '';
      ageInput.value = '';
      storyTitleInput.value = '';
      storyText.value = ''

      editButton.addEventListener('click', () => {
        firstNameInput.value = name;
        lastNameInput.value = lastName;
        ageInput.value = age;
        storyTitleInput.value = title;
        storyText.value = story

        publishButton.disabled = false;
        li.remove();
      })

      saveButton.addEventListener('click', () => {
      main.remove();
      let h1Saved = document.createElement("h1");
      h1Saved.textContent = "Your scary story is saved!";
      let bodyElement2 = document.createElement("div");
      bodyElement2.setAttribute('id', 'main');
      bodyElement.appendChild(bodyElement2);

      bodyElement2.appendChild(h1Saved);
      })

      deleteButton.addEventListener('click', () => {
        publishButton.disabled = false;
        li.remove();
      })
    }
  });
}
