import CreateTodoCard from "./createTodoCard";

const form = document.querySelector('#todo-form');
const dialog = document.querySelector('#inputDialog');

export function closeDialog(){

    form.addEventListener('reset', (e) => dialog.close());
};

export function openDialog() {

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

    let formData;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const fd = new FormData(form);

        form.reset();
        formData = Array.from(fd);

        const create = new CreateTodoCard(formData);

        create.createCard();
    });
};