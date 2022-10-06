import { atom } from "recoil";
import { IToDo } from "../interface";

export const toDoListState = atom<IToDo[]>({
  key: "toDoListState",
  default: [],
});

export const toDoListFilterState = atom({
  key: "toDoListFilterState",
  default: "Show All",
});
