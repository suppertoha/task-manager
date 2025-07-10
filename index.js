let task = "Задача изучить JavaScript";
let completedTaskCount = 0;

// * 1 showTask
const showTask = () => {
  if (!task) {
    console.log("Задача отсутсвует");
    return;
  }

  console.log(task);
};

showTask();

// * 2 setTask

const setTask = (taskDescription) => {
  if (task) {
    console.log("Не могу добавить задачу, завершите или удалите предыдущую");
    return;
  }

  task = taskDescription;
};

setTask("Изучил модуль F1");

// * 3 completeTask

const completeTask = () => {
  completedTaskCount++;
  task = "";
};

completeTask()

// * 4 deleteTask

const deleteTask = () => {
  task = "";
};

deleteTask();
