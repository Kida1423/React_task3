import React from "react";

interface AddTaskFormProps {
  currentTask: string;
  setCurrentTask: (task: string) => void;
  addTask: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({
  currentTask,
  setCurrentTask,
  addTask,
}) => {
  return (
    <div className="add-task-form">
        <div className="input_task">
            <input
                type="text"
                placeholder="Enter new task"
                value={currentTask}
                onChange={(e) => setCurrentTask(e.target.value)}
            />
            <button onClick={addTask}>Add</button>
        </div>
      
    </div>
  );
};

export default AddTaskForm;
