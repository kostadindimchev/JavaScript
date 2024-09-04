function validate() {
  let inputElement = document.getElementById("email");

  inputElement.addEventListener("change", (e) => {
    let pattern = /[a-z]+@[a-z]+.[a-z]+/g;
    let match = pattern.exec(inputElement.value);
    if (match !== null) {
      e.currentTarget.classList.remove('error')
    } else {
      e.currentTarget.classList.add('error')
    }
  });
}
