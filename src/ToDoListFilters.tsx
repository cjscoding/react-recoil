import { useRecoilState } from "recoil";
import { toDoListFilterState } from "./recoil/state";

function ToDoListFilters() {
  const [filter, setFilter] = useRecoilState(toDoListFilterState);

  const updateFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(value);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}

export default ToDoListFilters;
