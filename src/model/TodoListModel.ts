import { EventEmitter } from "../EventEmitter";
import { TodoItemModel } from "./TodoItemModel";

export class TodoListModel extends EventEmitter {
    /**
     * @param {TodoItemModel[]} [items] 初期アイテム一覧（デフォルトは空の配列）
     */
    items: TodoItemModel[];
    constructor(items: TodoItemModel[] = []) {
        super();
        this.items = items;
    }

    /**
     * TodoItemの合計個数を返す
     * @returns {number}
     */
    getTotalCount(): number {
        return this.items.length;
    }

    /**
     * 表示できるTodoItemの配列を返す
     * @returns {TodoItemModel[]}
     */
    getTodoItems(): TodoItemModel[] {
        return this.items;
    }

    /**
     * TodoListの状態が更新されたときに呼び出されるリスナー関数を登録する
     * @param {Function} listener
     */
    onChange(listener: Function): void {
        this.addEventListener("change", listener);
    }

    /**
     * 状態が変更されたときに呼ぶ。登録済みのリスナー関数を呼び出す
     */
    emitChange(): void {
        this.emit("change");
    }

    /**
     * TodoItemを追加する
     * @param {TodoItemModel} todoItem
     */
    addTodo(todoItem: TodoItemModel): void {
        this.items.push(todoItem)
        this.emitChange();
    }

    /**
     * 指定したidのTodoItemのcompletedを更新する
     * @param {{ id:number, completed: boolean }}
     */
    updateTodo({ id, completed }: {id: number, completed: boolean}) {
        const todoItem = this.items.find(todo => todo.id === id);
        if(!todoItem) {
            return;
        }
        todoItem.completed = completed;
        this.emitChange();
    }

    /**
     * 指定したidのTodoItemを削除する
     * @param {{ id: number }}
     */
    deleteTodo({ id }: {id: number}) {
        this.items = this.items.filter(todo => {
            return todo.id !== id;
        });
        this.emitChange();
    }
}
