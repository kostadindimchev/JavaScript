function focused() {
    let inputs = document.querySelectorAll('input')
    
    for (let el of inputs) {
        el.addEventListener("focus", function(e) {
            e.currentTarget.parentElement.classList.add("focused")
        })
        el.addEventListener("blur", function(e) {
            e.currentTarget.parentElement.classList.remove("focused")
        })
    }
}
