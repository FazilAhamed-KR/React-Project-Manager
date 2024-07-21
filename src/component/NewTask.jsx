import React, { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [givenTask, setGivenTask] = useState();

  const handleChange = (e) => {
    setGivenTask(e.target.value);
  };

  const handleClick = () => {
    if (givenTask.trim() === "") {
      return;
    }
    onAddTask(givenTask);
    setGivenTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={givenTask}
      />
      <button
        className="text-stone-700 hover:text-slate-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
