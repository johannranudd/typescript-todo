import { v4 as uuidV4 } from "uuid";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.querySelector("#new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-title");

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    input?.value === "" ||
    input?.value === null ||
    input?.value === undefined
  ) {
    return;
  }

  const newTask: Task = {
    id: uuidV4(),
    title: input?.value,
    completed: false,
    createdAt: new Date(),
  };
  addListItem(newTask);
});

function addListItem(task: Task) {
  const li = document.createElement("li");
  const paragraph = document.createElement("p");
  paragraph.textContent = task.title;
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  li.append(checkbox, paragraph);
  list?.append(li);
}
