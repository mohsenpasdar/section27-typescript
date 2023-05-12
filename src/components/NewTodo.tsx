import React, { useRef } from 'react';
import classes from './NewTodo.module.css'

const NewTodo: React.FC<{ onAddTodo: (text: string) => void} > = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault()

        const todoText = todoTextInputRef.current!.value

        // console.log(todoText);
        if (todoText.trim().length === 0) {
            // throw an error
            return
        }

        props.onAddTodo(todoText)
    }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;