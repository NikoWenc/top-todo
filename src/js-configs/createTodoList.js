
import { createElements } from "./utilityFunctions";

export default class CreateTodoList {

    constructor(title){

        this.title = title;
        this.dialog = document.querySelector('#todoListDialog');
        this.titleH1 = document.querySelector('#list-title');
        this.listContent = document.querySelector('#list-content');
        this.addList = document.querySelector('#add-list');
        this.list = createElements('ol');
    };

    addNewTodo(){

        this.addList.addEventListener('click', () => {
            
            const listItem = createElements('li');
            const deleteListItem = createElements('button');
            const newListInput = document.querySelector('#new-list-input');

            if (newListInput.value == '') return;

            listItem.classList.add(
                "w-sm",
                "flex",
                "justify-between");
            deleteListItem.textContent = 'Remove';
            deleteListItem.classList.add("ml-15");

            listItem.textContent = newListInput.value;
            this.list.appendChild(listItem);
            listItem.appendChild(deleteListItem);
            this.listContent.prepend(this.list);
            newListInput.value = '';

            deleteListItem.addEventListener('click', () => {
                listItem.classList.toggle('line-through');
            })
            
        });
    };

    createList(){
        
        this.titleH1.textContent = this.title;
        
        this.addNewTodo();

        this.dialog.showModal();
        
    };

};