import { Trash } from "phosphor-react";
import { ChangeEvent, useState } from "react";

import styles from "./styles/TodoList.module.css";

interface listProps {
    todo: string,
    onCompleteTodo: (completeTodo: string) => void,
    onDeleteTodo: (deleteTodo: string) => void,
}

export function TodoList({ todo, onCompleteTodo, onDeleteTodo }: listProps) {
    const [checkMark, setCheckMark] = useState(0)

    function handleCompleteTodo(event: ChangeEvent<HTMLInputElement>) {

        if (event.target.checked) {

            onCompleteTodo("sum");
            setCheckMark(1);
        } else {

            onCompleteTodo("minus");
            setCheckMark(0);
        }
    }

    function handleDeleteTodo() {
        onDeleteTodo(todo);
    }

    return (
        <div className={styles.list}>
            <input className={styles.checkBox}
                type="checkbox" name="checkTodo"
                onChange={handleCompleteTodo}
            />
            <p> {todo} </p>
            <button onClick={handleDeleteTodo}>
                <Trash size={24} />
            </button>
        </div>
    )
}
