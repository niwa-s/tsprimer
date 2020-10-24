let todoIdx = 0;

export class TodoItemModel {
    /**
     * @param {string} title Todoアイテムのタイトル
     * @param {boolean} completed Todoアイテムが完了済みならばtrue、そうでない場合はfalse
     */
    id: number;
    title: string;
    completed: boolean;
    constructor({ title, completed}: {title: string, completed: boolean}) {
        this.id = todoIdx++;
        this.title = title;
        this.completed = completed;
    }
}
