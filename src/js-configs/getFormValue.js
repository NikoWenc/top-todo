

// export default class GetFormValue {

//     constructor(){
//         this.form = document.querySelector('#todo-form');
//         this.dialog = document.querySelector('#inputDialog');
//         this.formData;
//     };

//     getFormSubmitValues(){

//         this.form.addEventListener('submit', (e) => {
//             e.preventDefault();

//             const fd = new FormData(this.form);

//             this.dialog.close();
//             this.formData = Array.from(fd);

//             return this.formData;
//         });

//     };

//     getFormData(){
//         return this.formData;
//     };
// };