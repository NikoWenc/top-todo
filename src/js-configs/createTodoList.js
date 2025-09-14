
import { createElements } from "./utilityFunctions";

export default class CreateTodoList {

    constructor(title){

        this.title = title;
        this.dialog = document.querySelector('#todoListDialog');
        this.listHeader = document.querySelector('#list-header')
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
            const span = createElements('span');

            if (newListInput.value == '') return;

            listItem.classList.add(
                "w-xs",
                "relative",
                "pl-3"
            );
            deleteListItem.textContent = 'Remove';
            deleteListItem.classList.add(
                "absolute",
                "-right-15",
                "top-0"
            );

            span.textContent = newListInput.value;
            
            listItem.appendChild(span);
            listItem.appendChild(deleteListItem);

            this.list.classList.add(
                "list-decimal",
            )
            this.list.appendChild(listItem);
            
            this.listContent.prepend(this.list);
            newListInput.value = '';

            deleteListItem.addEventListener('click', () => {
                listItem.classList.toggle('line-through');
            })
            
        });
    };

    createList(){

        this.titleH1.textContent = this.title;
        this.listHeader.classList.add(
            "flex",
            "justify-center",
            "items-center",
            "pb-5"
        );
        
        this.addNewTodo();

        this.dialog.showModal();
        
    };

};