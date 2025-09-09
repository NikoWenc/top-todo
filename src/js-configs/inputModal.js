
export default function inputModal(dialogID, button) {
    
    const dialog = document.querySelector(dialogID);
    const addBtn = document.querySelector(button);

    addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    dialog.showModal();
})
}