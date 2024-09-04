function solve() {
   let products = document.querySelectorAll('.shopping-cart')[0];
   let textArea = document.getElementsByTagName('textarea')[0];
   let checkout = document.querySelector('.checkout');
   let list = [];
   let sum = 0;

   products.addEventListener('click', cart);
   checkout.addEventListener('click', check);

   function cart(e) {
      if(e.target.tagName === 'BUTTON'){
         let name = e.target.parentElement.parentElement.children[1].children[0].textContent;
         let money = Number(e.target.parentElement.parentElement.children[3].textContent);

         sum += money;
         
         if(!list.includes(name)) {
            list.push(name)
         }

         let text = `Added ${name} for ${money.toFixed(2)} to the cart.\n`
         textArea.textContent += text
      }
   }

   function check() {
      textArea.textContent += `You bought ${list.join(', ')} for ${sum.toFixed(2)}.`
   
      products.removeEventListener('click', cart)
      checkout.removeEventListener('click', check)
   }
}