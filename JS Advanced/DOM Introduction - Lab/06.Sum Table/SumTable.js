function sumTable() {
    let prices = document.querySelectorAll(`tr td:nth-of-type(2)`)
    let arr = Array.from(prices)
    let total = arr.reduce((acc, el) => {
        let curEl = Number(el.textContent) || 0
        return acc + curEl
    }, 0)
    
    let result = document.getElementById('sum');
    result.textContent = total;
}