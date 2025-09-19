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

    let storageKey = localStorage.length + 1;

    if (!localStorage.length == 0) {
        // 
        for (let i = 1; i <= localStorage.length; i++ ) {

            const create = new CreateTodoCard(i);

            create.createCard();

        };
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const fd = new FormData(form);

        form.reset();
        const formData = Array.from(fd);

        // test for local storage use - will continue tomorrow
        localStorage.setItem(JSON.stringify(storageKey), JSON.stringify(formData));

        // pass storageKey to parse data
        const create = new CreateTodoCard(storageKey);

        create.createCard();

        return storageKey++;
    });

};

export function priorityClassToggle(element, textContent){

    if (textContent.toLowerCase() === 'minor') element.classList.add('text-yellow-400');
    if (textContent.toLowerCase() === 'normal') element.classList.add('text-green-400');
    if (textContent.toLowerCase() === 'urgent') element.classList.add('text-red-400');
}