function search() {
   let search = document.getElementById('searchText').value;
   let towns = Array.from(document.querySelectorAll('ul li'));
   let result = document.getElementById('result');
   let counter = 0

   for (let town of towns) {
      if(town.textContent.includes(search) && search !== ''){
         counter++
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }else{
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      } 
   }
   result.textContent = `${counter} matches found`
}
