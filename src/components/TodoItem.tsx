import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: string;
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  const removeHandler = () => {
    props.onRemoveTodo(props.id)
  }
  return (
    <li className={classes.item} onClick={removeHandler}>
      {props.text}
    </li>
  );
};

export default TodoItem;
