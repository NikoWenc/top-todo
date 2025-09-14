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
}

// get form values
export function getFormSubmitValues(){

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const fd = new FormData(form);

        form.reset();
        const formData = Array.from(fd);

        const create = new CreateTodoCard(formData);

        create.createCard();
    });
};

export function priorityClassToggle(element, textContent){

    if (textContent.toLowerCase() === 'minor') element.classList.add('text-yellow-400');
    if (textContent.toLowerCase() === 'normal') element.classList.add('text-green-400');
    if (textContent.toLowerCase() === 'urgent') element.classList.add('text-red-400');
}