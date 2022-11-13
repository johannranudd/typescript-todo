import { v4 as uuidV4 } from "uuid";

type Task = {
  id: string;
  title: string | undefined;
  completed: boolean;
  createdAt: Date;
};

export const list = document.querySelector<HTMLUListElement>("#list");

export const form = document.querySelector(
  "#new-task-form"
) as HTMLFormElement | null;

export const input =
  document.querySelector<HTMLInputElement>("#new-task-title");

form?.addEventListener("submit", (e) => {
  if (input?.value === "" || input?.value === null) return;

  const newTask: Task = {
    id: uuidV4(),
    title: input?.value,
    completed: false,
    createdAt: new Date(),
  };
  // addListItem(newTask);
});

// function addListItem(task: Task) {}
