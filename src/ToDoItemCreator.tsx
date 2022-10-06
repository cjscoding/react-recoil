import { useSetRecoilState } from "recoil";
import { useState } from "react";
import { toDoListState } from "./recoil/state";
import { IToDo } from "./interface";

let id = 0;
const getId = () => id++;

function ToDoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setToDoList = useSetRecoilState<IToDo[]>(toDoListState);

  const addItem = () => {
    setToDoList((oldToDoList: IToDo[]) => [
      ...oldToDoList,
      { id: getId(), text: inputValue, isComplete: false },
    ]);
    setInputValue("");
  };

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default ToDoItemCreator;
