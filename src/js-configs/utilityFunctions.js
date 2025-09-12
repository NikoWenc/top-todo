import CreateTodoCard from "./createTodoCard";

export function closeDialog(){

    const form = document.querySelector('#todo-form');
    const dialog = document.querySelector('#inputDialog');

    form.addEventListener('reset', (e) => dialog.close());
};

export function openDialog() {

    const dialog = document.querySelector('#inputDialog');
    const dialogOpenBtn = document.querySelector('#new-todo');

    dialogOpenBtn.addEventListener("click", (e) => {
        e.preventDefault();

        dialog.showModal();
    });
};

export function createElements(element){
    return document.createElement(element);
}

export function getFormSubmitValues(){

    const form = document.querySelector('#todo-form');
    const dialog = document.querySelector('#inputDialog');
    
    let formData;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const fd = new FormData(form);

        dialog.close();
        formData = Array.from(fd);

        const create = new CreateTodoCard(formData);

        create.createCard();
    });
};