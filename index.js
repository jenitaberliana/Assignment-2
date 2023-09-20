const todoCards = [];
const doingCards = [];
const doneCards = [];

function addToDo() {
    const inputElement = document.getElementById('todo-input');
    const task = inputElement.value;
    if (task.trim() === '') return;

    todoCards.push(task);
    inputElement.value = '';

    renderCards();
}

function moveCard(source, destination, index) {
    const card = source.splice(index, 1)[0];
    destination.push(card);

    renderCards();
}

function deleteCard(column, index) {
    column.splice(index, 1);

    renderCards();
}

function renderCards() {
    const todoCardsElement = document.getElementById('todo-cards');
    const doingCardsElement = document.getElementById('doing-cards');
    const doneCardsElement = document.getElementById('done-cards');

    todoCardsElement.innerHTML = '';
    doingCardsElement.innerHTML = '';
    doneCardsElement.innerHTML = '';

    for (let i = 0; i < todoCards.length; i++) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.display = 'flex';
    
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.value = todoCards[i];
        cardElement.appendChild(inputElement);
    
        const buttonContainer = document.createElement('div'); // tempat untuk button-buttonnya
        buttonContainer.className = 'button-container';
    
        const moveButton = document.createElement('moveButton');
        moveButton.textContent = 'Next';
        moveButton.addEventListener('click', () => moveCard(todoCards, doingCards, i));
        buttonContainer.appendChild(moveButton);
    
        const deleteButton = document.createElement('deleteButton');
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => deleteCard(todoCards, i));
        buttonContainer.appendChild(deleteButton);
    
        cardElement.appendChild(buttonContainer); // menambahkan tempat button ke dalam card
        todoCardsElement.appendChild(cardElement);
    }

    for (let i = 0; i < doingCards.length; i++) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.display = 'flex';
    
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.value = doingCards[i];
        cardElement.appendChild(inputElement);
    
        const buttonContainer = document.createElement('div'); 
        buttonContainer.className = 'button-container';
    
        const moveButton = document.createElement('moveButton'); 
        moveButton.textContent = 'Next';
        moveButton.addEventListener('click', () => moveCard(doingCards, doneCards, i));
        buttonContainer.appendChild(moveButton);
    
        const deleteButton = document.createElement('deleteButton'); 
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => deleteCard(doingCards, i));
        buttonContainer.appendChild(deleteButton);
    
        cardElement.appendChild(buttonContainer); 
        doingCardsElement.appendChild(cardElement);
    }

    for (let i = 0; i < doneCards.length; i++) {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.style.display = 'flex';
    
        const inputElement = document.createElement('input');
        inputElement.type = 'text';
        inputElement.value = doneCards[i];
        cardElement.appendChild(inputElement);
    
        const buttonContainer = document.createElement('div'); 
        buttonContainer.className = 'button-container';
    
        const deleteButton = document.createElement('deleteButton'); 
        deleteButton.textContent = 'X';
        deleteButton.addEventListener('click', () => deleteCard(doneCards, i));
        buttonContainer.appendChild(deleteButton);
    
        cardElement.appendChild(buttonContainer); 
        doneCardsElement.appendChild(cardElement);
    }
    
}

renderCards();
