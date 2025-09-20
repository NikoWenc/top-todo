
import { createElements, priorityClassToggle } from './utilityFunctions';
import CreateTodoList from "./createTodoList";


export default class CreateTodoCard {
    
    constructor(storageKey){
        this.parent = document.querySelector('#content');
        this.storageKey = storageKey; // unique storage key for todocard instance
        this.form = JSON.parse(localStorage.getItem(this.storageKey)); // get arr of values from storage
        this.newDiv = createElements('div');
        this.title = createElements('h1');
        this.description = createElements('p');
        this.dueDate = createElements('p');
        this.priority = createElements('p');
        this.delBtn = createElements('button');
    };

    // create todocard on UI
    createCard(){
        this.title.textContent = this.form[0][1];
        this.title.classList.add(
            "text-center",
            "border-2",
            "border-white",
            "p-3",
            "w-[100%]"
        )
        this.description.textContent = this.form[1][1];
        this.description.classList.add(
            "text-xs"
        )
        this.dueDate.textContent = `Due Date: ${this.form[2][1]}`;
        this.dueDate.classList.add(
            "text-xs"
        );
        this.priority.textContent = this.form[3][1].toUpperCase();

        priorityClassToggle(this.priority, this.priority.textContent);

        this.delBtn.textContent = 'X';
        this.delBtn.classList.add(
            "absolute",
            "text-1xl",
            "top-2",
            "right-2",
            "bg-gray-600",
            "size-[35px]",
            "rounded-[50%]",
        )

        this.appendToDo();
    };


    doneBtnListener(){
        this.delBtn.addEventListener('click', (e) => {
            e.stopPropagation();

            this.parent.removeChild(this.newDiv);
            localStorage.removeItem(JSON.stringify(this.storageKey));
        })
    };


    todoCardListener(element, title){
        
        const todoList = new CreateTodoList(title);
        
        element.addEventListener('click', (e) => {
            e.stopPropagation();

            todoList.createList();
        });
    };

    // append newDiv / todocard to UI
    appendToDo(){
        this.newDiv.appendChild(this.title);
        this.newDiv.appendChild(this.description);
        this.newDiv.appendChild(this.dueDate);
        this.newDiv.appendChild(this.priority);
        this.newDiv.appendChild(this.delBtn);

        // add listener to todocard to open todolist modal
        this.todoCardListener(this.newDiv, this.title.textContent);

        this.newDiv.classList.add(
            "relative",
            "size-60",
            "sm:size-70",
            "text-white",
            "bg-gray-500",
            "rounded-3xl",
            "hover:cursor-pointer",
            "hover:opacity-80",
            "active:opacity-50",
            "pt-13",
            "px-10",
            "flex",
            "flex-col",
            "items-center",
            "gap-5"
        ); 

        // prepend to append new div as first child
        this.parent.prepend(this.newDiv);

        this.doneBtnListener();
    };

}