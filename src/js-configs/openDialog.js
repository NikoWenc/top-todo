

export default function openDialog() {

    const dialog = document.querySelector('#inputDialog');
    const dialogOpenBtn = document.querySelector('#new-todo');

    dialogOpenBtn.addEventListener("click", (e) => {
        e.preventDefault();

        dialog.showModal();
    })
}