
import { createElements } from "./utilityFunctions";

export default class CreateTodoList {

    constructor(title){

        this.title = title;
        this.dialog = createElements('dialog');
        this.listHeader = createElements('div');
        this.titleH1 = createElements('h1');
        this.listContent = createElements('div');
        this.newListInput = createElements('input');
        this.addList = createElements('button');
        this.list = createElements('ol');
        this.body = document.querySelector('body');
    };

    addNewTodo(){

        this.addList.addEventListener('click', () => {
            
            const listItem = createElements('li');
            const doneListItem = createElements('button');
            const removeListItem = createElements('button');
            const span = createElements('span');

            if (this.newListInput.value == '') return;

            listItem.classList.add(
                "w-xs",
                "relative",
                "pl-3"
            );
            doneListItem.textContent = 'Done';
            doneListItem.classList.add(
                "absolute",
                "-right-15",
                "top-0"
            );

            removeListItem.textContent = 'Remove';
            removeListItem.classList.add(
                "absolute",
                "-right-35",
                "top-0"
            );

            span.textContent = this.newListInput.value;
            
            listItem.appendChild(span);
            listItem.appendChild(doneListItem);
            listItem.appendChild(removeListItem);

            this.list.classList.add(
                "list-decimal",
            )
            this.list.appendChild(listItem);
            
            this.listContent.prepend(this.list);
            this.newListInput.value = '';

            doneListItem.addEventListener('click', () => {
                listItem.classList.toggle('line-through');
            })
            
        });
    };

    createList(){

        this.dialog.setAttribute('closedby', 'any');
        this.dialog.classList.add(
            "w-xl",
            "py-8",
            "fixed", 
            "top-6/12", 
            "left-6/12", 
            "-translate-1/2",
            "rounded-4xl"
        );

        this.titleH1.textContent = this.title;
        this.listHeader.appendChild(this.titleH1);
        this.listHeader.classList.add(
            "flex",
            "justify-center",
            "items-center",
            "pb-5"
        );

        this.newListInput.setAttribute('type', 'text');
        this.newListInput.classList.add(
            "w-xs",
            "mt-5"
        );
        this.addList.textContent = 'Add';
        this.addList.classList.add(
            "ml-5"
        );
        this.listContent.appendChild(this.newListInput);
        this.listContent.appendChild(this.addList);
        this.listContent.classList.add(
            "w-md",
            "mx-auto"

        );

        this.addNewTodo();

        this.dialog.appendChild(this.listHeader);
        this.dialog.appendChild(this.listContent);

        this.body.appendChild(this.dialog);

        this.dialog.showModal();
        
    };

};