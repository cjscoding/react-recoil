import { useRecoilValue } from "recoil";
import ToDoItemCreator from "./ToDoItemCreator";
import { toDoListState } from "./recoil/state";
import ToDoItem from "./ToDoItem";
import { IToDo } from "./interface";
import ToDoListStats from "./ToDoListStats";
import ToDoListFilters from "./ToDoListFilters";

function ToDoList() {
  const toDoList = useRecoilValue<IToDo[]>(toDoListState);
  return (
    <>
      <ToDoListStats />
      <ToDoListFilters />
      <ToDoItemCreator />
      {toDoList.map((toDoItem) => (
        <ToDoItem key={toDoItem.id} item={toDoItem} />
      ))}
    </>
  );
}

export default ToDoList;
