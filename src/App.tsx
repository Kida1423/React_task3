import React, { useState } from "react";
import AddTaskForm from "./component/AddTaskForm";
import Task from "./component/Task";
import "./component/todo.css"
interface TaskType {
  id: number;
  text: string;
  isCompleted: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, text: "Task 1", isCompleted: false },
    { id: 2, text: "Task 2", isCompleted: false },
    { id: 3, text: "Task 3", isCompleted: false },
  ]);

  const [currentTask, setCurrentTask] = useState<string>("");

  const addTask = () => {
    if (currentTask.trim() === "") return;
    const newTask = {
      id: Date.now(), 
      text: currentTask,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    setCurrentTask("");
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <div className="app">
      <h1>ToDo List</h1>
      <AddTaskForm
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        addTask={addTask}
      />
      <div className="task-list">
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            removeTask={removeTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
