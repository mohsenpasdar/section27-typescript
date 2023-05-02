const Todos: React.FC<{ items: string[]; children?: React.ReactNode }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
