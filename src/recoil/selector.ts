import { selector } from "recoil";
import { toDoListFilterState, toDoListState } from "./state";

export const filteredToDoListState = selector({
  key: "filteredToDoListState",
  get: ({ get }) => {
    const filter = get(toDoListFilterState);
    const list = get(toDoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const toDoListStatsState = selector({
  key: "toDoListStatsState",
  get: ({ get }) => {
    const toDoList = get(toDoListState);
    const totalNum = toDoList.length;
    const totalCompletedNum = toDoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
