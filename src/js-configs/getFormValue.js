
export default function getFormValue() {

    const form = document.querySelector('#todo-form');
    const dialog = document.querySelector('#inputDialog');
    let formData;

    form.addEventListener('submit', (e) => {
            e.preventDefault();

            const fd = new FormData(form);

            formData = Array.from(fd);

            dialog.close();
            console.log(formData);
        });
    
    form.addEventListener('reset', (e) => dialog.close());
}
