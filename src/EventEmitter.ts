export class EventEmitter {
    _listeners: Map<string, Set<Function>>;
    constructor() {
        this._listeners = new Map();
    }

    /**
     * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録する
     * @param {string} type イベント名
     * @param {Function} listener イベントリスナー
     */
    addEventListener(type: string, listener: Function): void {
        if(!this._listeners.has(type)) {
            this._listeners.set(type, new Set());
        }
        const listenerSet = this._listeners.get(type);
        listenerSet.add(listener);
    }

    /**
     * 指定したイベントをディスパッチする
     * @param {string} type イベント名
     */
    emit(type: string): void {
        const listenerSet = this._listeners.get(type);
        listenerSet.forEach(listener => {
            listener.call(this);
        });
    }

    /**
     * 指定したイベントのイベントリスナーを解除する
     * @param {string} type イベント名
     * @param {Function} listener イベントリスナー
     */
    removeEventListener(type: string, listener: Function): void {
        const listenerSet = this._listeners.get(type);
        if(!listenerSet) {
            return;
        }
        listenerSet.forEach(ownListener => {
            if(ownListener === listener) {
                listenerSet.delete(listener);
            }
        });
    }
}
