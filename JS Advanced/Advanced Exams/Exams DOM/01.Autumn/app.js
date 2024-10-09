window.addEventListener('load', solve);

function solve() {
    const timeInput = document.getElementById('time');
    const dateInput = document.getElementById('date');
    const placeInput = document.getElementById('place');
    const eventInput = document.getElementById('event-name');
    const emailInput = document.getElementById('email');
    const addButton = document.getElementById('add-btn');
    const secondField = document.getElementById('second-field');
    const firstField = document.getElementById('first-field');
    const thirdField = document.getElementById('third-field');
    const clearButton = document.getElementById('clear');

    addButton.addEventListener('click', () => {
        if(!timeInput.value || !dateInput.value || !placeInput.value || !eventInput.value || !emailInput.value){
            return
        }

        const time = timeInput.value
        const date = dateInput.value
        const place = placeInput.value
        const event = eventInput.value
        const email = emailInput.value

        const ul = document.createElement('ul');
        ul.setAttribute("id","check-list");
        const li = document.createElement('li');
        li.setAttribute("class","event-content");
        const article = document.createElement('article');
        article.style.display = 'flex'
        const p1 = document.createElement('p');
        p1.textContent = `Begins: ${date} at: ${time}`
        const p2 = document.createElement('p');
        p2.textContent = `In: ${place}`
        const p3 = document.createElement('p');
        p3.textContent = `Event: ${event}`
        const p4 = document.createElement('p');
        p4.textContent = `Contact: ${email}`
        const editButton = document.createElement('button')
        editButton.setAttribute("class","edit-btn");
        editButton.textContent = 'Edit'
        const continueButton = document.createElement('button')
        continueButton.setAttribute("class","continue-btn")
        continueButton.textContent = 'Continue'
        
        secondField.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(article);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(p3);
        article.appendChild(p4);
        li.appendChild(editButton);
        li.appendChild(continueButton);

        timeInput.value = ''
        dateInput.value = ''
        placeInput.value = ''
        eventInput.value = ''
        emailInput.value = ''

        addButton.disabled = true;

        editButton.addEventListener('click', () => {
            timeInput.value = time;
            dateInput.value = date;
            placeInput.value = place;
            eventInput.value = event;
            emailInput.value = email;
            ul.remove();
            addButton.disabled = false;
        })

        continueButton.addEventListener('click', () => {
            ul.setAttribute("id","upcoming-list");
            firstField.appendChild(ul);
            editButton.remove()
            continueButton.remove()

            const finishedButton = document.createElement('button')
            finishedButton.setAttribute("class","finished-btn")
            finishedButton.textContent = 'Move to finished'
            li.appendChild(finishedButton)
            addButton.disabled = false;

            finishedButton.addEventListener('click', () => {
                ul.setAttribute("id","finished-list");
                thirdField.appendChild(ul)
                finishedButton.remove()
                
                clearButton.addEventListener('click', () => {
                    ul.remove();
                })
            })
        })
    })
}


    
    
