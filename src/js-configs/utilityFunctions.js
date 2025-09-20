import CreateTodoCard from "./createTodoCard";

const form = document.querySelector('#todo-form');
const dialog = document.querySelector('#inputDialog');


// Dialog eventlisteners
export function closeDialog(){

    form.addEventListener('reset', (e) => dialog.close());
};


export function openDialog() {

    const dialogOpenBtn = document.querySelector('#new-todo');

    dialogOpenBtn.addEventListener("click", (e) => {

        dialog.showModal();
    });
};


// create ele
export function createElements(element){
    return document.createElement(element);
};


// get form values
export function getFormSubmitValues(){

    let storageKey = localStorage.length + 1; // to track todo card index in storage

    if (!localStorage.length == 0) {
        // create cards if LocalStorage has data
        for (let i = 1; i <= localStorage.length; i++ ) {

            const card = new CreateTodoCard(i); // create new instance

            card.createCard(); // create card in the UI

        };
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const fd = new FormData(form); // get the form data when submitted

        form.reset(); // reset form every submit

        const formData = Array.from(fd); // convert to arr for easy iteration

        // save data to local storage
        localStorage.setItem(JSON.stringify(storageKey), JSON.stringify(formData));

        // pass storageKey to parse data
        const card = new CreateTodoCard(storageKey);

        card.createCard();

        return storageKey++; //increment every card created
    });

};

// change color depending on choice
export function priorityClassToggle(element, textContent){

    if (textContent.toLowerCase() === 'minor') element.classList.add('text-yellow-400');
    if (textContent.toLowerCase() === 'normal') element.classList.add('text-green-400');
    if (textContent.toLowerCase() === 'urgent') element.classList.add('text-red-400');
}