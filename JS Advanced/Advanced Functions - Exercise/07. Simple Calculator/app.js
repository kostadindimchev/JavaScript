function calculator() {
    let selector1;
    let selector2;
    let resultSelector;

    return {
        init(sel1, sel2, result) { 
        selector1 = document.querySelector(sel1);
        selector2 = document.querySelector(sel2);
        resultSelector = document.querySelector(result)
        },
        add: () => resultSelector.value = Number(selector1.value) + Number(selector2.value),
        subtract: () => resultSelector.value = Number(selector1.value) - Number(selector2.value),
    }
}

const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 





