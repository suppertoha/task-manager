const tasks = [
  {
    title: "Задача изучить JavaScript",
    description: "Повысить квалификацию",
    isCompleted: false,
    createdDate: new Date(), // тут опечатка в названии переменной (в задании).
    completedDate: {},
  },
	{
    title: "Задача модуль React",
    description: "Повысить квалификацию React разработчика",
    isCompleted: false,
    createdDate: new Date(),
    completedDate: {},
  },
];
const completedTask = [];
let completedTaskCount = 0;

// * 1 showTask
const showTask = () => {
  if (tasks.length !== 0) {
    let result = "";
    for (let i = 0; i < tasks.length; i++) {
      result += `${tasks[i].title} - ${tasks[i].description}; `;
    }
    return result;
  }
};

showTask();
console.log("function showTask", showTask());

// * 2 setTask

const setTask = (title, description) => {
	const newTasks = {
    title,
    description,
    isCompleted: false,
    createdDate: new Date(),
    completedDate: {},
  }
	return tasks.push(newTasks)
};

setTask("Закончить модуль F2", "Перейти к другому модулю");
console.log("function tasks", tasks);

// * 3 completeTask

const completeTask = (index) => {
  for (let i = 0; i < tasks.length; i++) {
    if (i === index) {
      completedTask.push(tasks[index]);
			tasks[index].isCompleted = true;
			tasks[index].completedDate = new Date();
      completedTaskCount++;
    }
  }

  return completedTask;
};

completeTask(2);
console.log("function completeTask", completedTask);

// * 4 deleteTask

const deleteTask = (index) => {
	const newTasks = [];
  for (let i = 0; i < tasks.length; i++) {
    if (i !== index) {
			newTasks.push(tasks[i])
    }
  }
	tasks.length = 0;
	for(let i = 0; i < newTasks.length; i++){
		tasks.push(newTasks[i])
	}
  return tasks;
};

deleteTask(2);
console.log("function deleteTask", deleteTask);

// * 5 clearTasks

const clearTasks = () => {
  return (tasks.length = 0);
};

clearTasks();

console.log("function clearTasks", tasks);
