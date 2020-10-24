import { TodoListModel } from "./model/TodoListModel";
import { TodoItemModel } from "./model/TodoItemModel";
import { TodoListView } from "./view/TodoListView";
import { element, render } from "./view/html-util";

export class App {
    todoListModel: TodoListModel;
    constructor() {
        this.todoListModel = new TodoListModel;
    }
    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement: HTMLInputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCountElement = document.querySelector("#js-todo-count");
        this.todoListModel.onChange(() => {
            const todoItems = this.todoListModel.getTodoItems();
            const todoListView = new TodoListView();
            const todoListElement = todoListView.createElement(todoItems, {
                // Todoアイテムが更新イベントを発生したときに呼ばれるリスナー関数
                onUpdateTodo: ({ id, completed}) => {
                    this.todoListModel.updateTodo({ id, completed });
                },
                // Todoアイテムが削除イベントを発生したときに呼ばれるリスナー関数
                onDeleteTodo: ({ id }) => {
                    this.todoListModel.deleteTodo({ id });
                }
            });
            render(todoListElement, containerElement);
            todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
        });
        formElement.addEventListener("submit", (event: Event) => {
            event.preventDefault();
            this.todoListModel.addTodo(new TodoItemModel({
                title: inputElement.value,
                completed: false
            }));
            inputElement.value = "";
        });
    }
}
