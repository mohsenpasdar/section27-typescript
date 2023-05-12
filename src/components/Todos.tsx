import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css'

const Todos: React.FC<{ items: Todo[]; children?: React.ReactNode }> = (
  props
) => {
  return (
    <ul className={classes.items}>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
