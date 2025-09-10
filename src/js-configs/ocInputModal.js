
export default function ocInputModal(dialogID, formEle, addTodoBtn, closeButton) {
    
    const dialog = document.querySelector(dialogID);
    const addToDo = document.querySelector(addTodoBtn);
    const closeBtn = document.querySelector(closeButton);
    const form = document.querySelector(formEle);

    addToDo.addEventListener("click", (e) => {
        e.preventDefault();

        dialog.showModal();
    })

    closeBtn.addEventListener("click", (e) => {
        e.preventDefault();

        dialog.close();
        form.reset();
    })
};
