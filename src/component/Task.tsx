import React from "react";

interface TaskProps {
  task: {
    id: number;
    text: string;
    isCompleted: boolean;
  };
  removeTask: (id: number) => void;
  toggleTaskCompletion: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, removeTask, toggleTaskCompletion }) => {
  return (
    <div className={`task ${task.isCompleted ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span>{task.text}</span>
      <button onClick={() => removeTask(task.id)}>Удалить</button>
    </div>
  );
};

export default Task;
