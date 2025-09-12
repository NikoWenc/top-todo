import { createElements, getFormSubmitValues } from './utilityFunctions';


export default class CreateTodoCard {
    
    constructor(form){
        this.parent = document.querySelector('#content');
        this.form = form;
        this.newDiv = createElements('div');
        this.title = createElements('h1');
        this.description = createElements('p');
        this.dueDate = createElements('p');
        this.priority = createElements('p');
    };

    createCard(){
        this.title.textContent = this.form[0][1];
        this.description.textContent = this.form[1][1];
        this.dueDate.textContent = this.form[2][1];
        this.priority.textContent = this.form[3][0];

        this.appendToDo();
    };

    appendToDo(){
        this.newDiv.appendChild(this.title);
        this.newDiv.appendChild(this.description);
        this.newDiv.appendChild(this.dueDate);
        this.newDiv.appendChild(this.priority);

        this.parent.prepend(this.newDiv);
    };

}