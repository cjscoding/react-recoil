import { useRecoilState } from "recoil";
import { IToDo } from "./interface";
import { toDoListState } from "./recoil/state";

const replaceItemAtIndex = (array: IToDo[], index: number, newValue: IToDo) => [
  ...array.slice(0, index),
  newValue,
  ...array.slice(index + 1),
];

const removeItemAtIndex = (array: IToDo[], index: number) => [
  ...array.slice(0, index),
  ...array.slice(index + 1),
];

function ToDoItem({ key, item }: { key: number; item: IToDo }) {
  const [toDoList, setToDoList] = useRecoilState(toDoListState);
  const index = toDoList.findIndex((listItem) => listItem === item);

  const editItemText = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(toDoList, index, {
      ...item,
      text: value,
    });
    setToDoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(toDoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setToDoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(toDoList, index);
    setToDoList(newList);
  };

  return (
    <div>
      <input type="text" value={item.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
}

export default ToDoItem;
