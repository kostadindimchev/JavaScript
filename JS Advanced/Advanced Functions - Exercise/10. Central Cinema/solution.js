function solve() {
    const name = document.getElementsByTagName('input')[0];
    const hall = document.getElementsByTagName('input')[1];
    const ticketPrice = document.getElementsByTagName('input')[2];
    const movies = document.getElementById('movies');
    const archive = document.getElementById('archive');
    const screen = document.getElementsByTagName('button')[0];
    const clear = document.getElementsByTagName('button')[1];

    screen.addEventListener('click', onScreen);
     clear.addEventListener('click', onClear);

    function onScreen(ev){
        ev.preventDefault();
        const ticketPriceValue = Number(ticketPrice.value);
        const filmName = name.value;

        if(name.value && hall.value && ticketPriceValue){
            const li = document.createElement('li');
            movies.children[1].appendChild(li)

            const span = document.createElement('span');
            span.textContent = name.value;
            li.appendChild(span);

            const strong = document.createElement('strong');
            strong.textContent = `Hall: ${hall.value}`;
            li.appendChild(strong);

            const div = document.createElement('div');

            const strong2 = document.createElement('strong');
            strong2.textContent = ticketPriceValue.toFixed(2);
            div.appendChild(strong2);

            const newInput = document.createElement('input');
            newInput.placeholder = 'Tickets Sold';
            div.appendChild(newInput);

            const archiveBtn = document.createElement('button');
            archiveBtn.textContent = 'Archive';
            archiveBtn.addEventListener('click', onArchive);
            div.appendChild(archiveBtn);

            li.appendChild(div);

            [name.value, hall.value, ticketPrice.value] = ['', '', '']

            function onArchive(ev){
                ev.preventDefault();
                const soldTickets = Number(newInput.value)

                if (newInput.value === "" || Number.isNaN(soldTickets)) return;
                    li.remove();

                const li2 = document.createElement('li');
                archive.children[1].appendChild(li2);

                const span = document.createElement('span');
                span.textContent = filmName;
                li2.appendChild(span);

                const strong = document.createElement('strong');
                strong.textContent = `Total amount: ${(Number(ticketPriceValue) * Number(newInput.value)).toFixed(2)}`
                li2.appendChild(strong);

                const btnDelete = document.createElement('button');
                btnDelete.textContent = 'Delete';
                btnDelete.addEventListener('click', function(){
                    li2.remove();
                })
                li2.appendChild(btnDelete);  
            } 
        }
    }
    function onClear(){
        const allLi = archive.getElementsByTagName('li');
        Array.from(allLi).forEach(x => x.remove())
    }
}