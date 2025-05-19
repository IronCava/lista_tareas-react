function TaskList({ tasks, toggleTask }) {
  const getPriorityClass = (priority) => {
    if (priority === "alta") return "task-high";
    if (priority === "media") return "task-medium";
    if (priority === "baja") return "task-low";
    return "";
  };

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id} className={getPriorityClass(task.priority)}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTask(task.id)}
          />
          <span>{task.description}</span> - 
          <span>{task.priority}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
