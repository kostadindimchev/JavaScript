function lockedProfile() {
  let users = document.querySelectorAll(".profile");

  for (const user of users) {
    let radio = user.querySelector('input[type="radio"]');

    let button = user.getElementsByTagName("button")[0];
    button.addEventListener("click", () => {
      if (!radio.checked) {
        let email = user.querySelector('input[type="email"]');
        let hidden = email.parentElement;

        if (button.textContent === "Show more") {
          hidden.style.display = "block";
          button.textContent = "Hide it";
        } else if (button.textContent === "Hide it") {
          hidden.style.display = "none";
          button.textContent = "Show more";
        }
      }
    });
  }
}
