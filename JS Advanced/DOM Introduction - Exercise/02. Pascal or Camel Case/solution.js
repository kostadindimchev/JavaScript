function solve() {
  let text = document.getElementById('text').value;
  let convention = document.getElementById('naming-convention').value;
  let result = document.getElementById('result')
  let transformed = ''

  if(convention === 'Camel Case'){
    for(let i = 0; i < text.length; i++){
      if(text[i] === ' '){
        transformed += (text[i + 1].toUpperCase());
        i++
      }else{
        transformed += text[i].toLowerCase();
      }
    }
    result.textContent = transformed;
  }else if(convention === 'Pascal Case'){
    transformed += text[0].toUpperCase();
    for(let i = 1; i < text.length; i++){
      if(text[i] === ' '){
        transformed += (text[i + 1].toUpperCase());
        i++
      }else{
        transformed += text[i].toLowerCase();
      }
    }
    result.textContent = transformed;
  }else{
    result.textContent = 'Error!'
  }
}