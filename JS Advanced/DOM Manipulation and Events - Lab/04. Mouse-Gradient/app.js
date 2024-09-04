function attachGradientEvents() {
    let boxElement = document.getElementById('gradient')
    let resultElement = document.getElementById('result')

    boxElement.addEventListener('mousemove', (e) => {
        let num = Math.floor(e.offsetX / 3)
        resultElement.textContent = `${num}%`
    })
}