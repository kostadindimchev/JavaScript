function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let search = document.getElementById('searchField');
      let rows = Array.from(document.querySelectorAll('tbody tr'));

      for (let row of rows) {
         
         if(row.textContent.includes(search.value) && search.value !== ''){
            row.className = 'select'
         }else{
            row.classList.remove('select')
         } 
      }
      search.value = '';
   }
}