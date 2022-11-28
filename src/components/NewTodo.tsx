import styles from './styles/NewTodo.module.css';
import { PlusCircle } from 'phosphor-react';

import { EmptyList } from './EmptyList';
import { TodoList } from './TodoList';

import { ChangeEvent, FormEvent, useState } from 'react';

export function NewTodo() {
    const [todos, setTodos] = useState<string[]>([]);
    const [newTodo, setNewTodo] = useState('');
    const [doneTodos, setDoneTodos] = useState(0);
    const emptyTodo = (todos.length === 0);

    function handleCreateNewTodo(event: FormEvent) {
        event.preventDefault();

        setTodos([...todos, newTodo]);
        setNewTodo('');
    }

    function handleNewTodos(event: ChangeEvent<HTMLInputElement>) {
        setNewTodo(event.target.value);
    }

    function handleCompleteTodo(handleCompleteTodo: string) {
        if (handleCompleteTodo === 'sum') {
            setDoneTodos(
                state => {
                    return state + 1;
                }
            )
        } else if (handleCompleteTodo === 'minus') {
            setDoneTodos(
                state => {
                    return state - 1;
                }
            )
        }
    }

    function handleDeleteTodo(handleDeleteTodo: string) {
        const todoWithoutDelete = todos.filter(
            todo => {
                return todo !== handleDeleteTodo;
            }
        )

        setTodos(todoWithoutDelete);
    }

    return (
        <div>
            <form
                onSubmit={handleCreateNewTodo}
                className={styles.newTodo}
            >
                <div className={styles.textNewTodo}>
                    <input
                        type="text" placeholder="Add a todo"
                        onChange={handleNewTodos} value={newTodo}
                    />
                </div>
                <div className={styles.buttonNewTodo}>
                    <button type="submit">
                        <strong> Create </strong>
                        <PlusCircle />
                    </button>
                </div>
            </form>

            <main className={styles.todos}>
                <div className={styles.info}>
                    <span className={styles.createdTodos}>
                        Created Todos
                        <div className={styles.Quantity}>
                            {todos.length}
                        </div>
                    </span>

                    <span className={styles.finishTodos}>
                        Done Todos
                        <div className={styles.Quantity}>
                            {doneTodos}
                        </div>
                    </span>
                </div>
                {emptyTodo ? <EmptyList /> : todos.map(todo => {
                    return (
                        <TodoList
                            key={todo}
                            todo={todo}
                            onCompleteTodo={handleCompleteTodo}
                            onDeleteTodo={handleDeleteTodo}
                        />
                    )
                })}
            </main>
        </div>
    )
}
