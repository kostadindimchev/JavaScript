function solve() {
    const [check, clear] = document.querySelectorAll('button');
    const inputElements = Array.from(document.querySelectorAll('tbody tr td input'));
    const tableElement = document.querySelector('table');
    const checkDiv = document.querySelector('#check p');
    const rows = document.querySelectorAll('tbody tr');
    
    clear.addEventListener('click', () => {
        for (const input of inputElements) {
            input.value = '';
        }
        tableElement.style.border = "none"
        checkDiv.textContent = '';
        checkDiv.style.color = '';
    })
    
    check.addEventListener('click', () => {
        if(checking()){
            tableElement.style.border = "2px solid green";
            checkDiv.textContent = "You solve it! Congratulations!"
            checkDiv.style.color = "green"
        }else{
            tableElement.style.border = "2px solid red";
            checkDiv.textContent = "NOP! You are not done yet..."
            checkDiv.style.color = "red"
        }
    })

    function checking() {
        for (let r = 0; r < rows.length; r++) {
          const [row, col] = [new Set(), new Set()];
    
          for (let c = 0; c < rows.length; c++) {
            row.add(Number(rows[r].children[c].querySelector('input').value));
            col.add(Number(rows[c].children[r].querySelector('input').value));
          }
    
          if (row.size < rows.length || col.size < rows.length) {
            return false;
          }
        }
    
        return true;
      }
}