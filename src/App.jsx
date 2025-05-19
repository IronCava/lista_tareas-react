import { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

function App() {
  // guardo todas las tareas en este estado
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all"); // puede ser: all, completed, pending

  // Esta función añade una nueva tarea al array
  const addTask = (description, priority) => {
    const newTask = {
      id: Date.now(), // creo un ID único basado en la hora actual
      description, // Us la descripción que recibo del formulario
      priority, // Us la prioridad que recibo del formulario
      completed: false, // Todas las tareas nuevas empiezan como no completadas
    };
    setTasks([...tasks, newTask]); // Añad la nueva tarea al array actual
  };
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true; // "all"
  });

  return (
    <div className="App">
      <h1>Lista de tareas</h1>
      {/* uestro el formulario y le paso la función addTask como prop */}
      <AddTaskForm addTask={addTask} />
      <div>
        <button onClick={() => setFilter("all")}>Todas</button>
        <button onClick={() => setFilter("pending")}>Pendientes</button>
        <button onClick={() => setFilter("completed")}>Completadas</button>
      </div>
      <p>
        Filtro activo:
        <strong>
          {filter === "all"
            ? "Todas"
            : filter === "pending"
            ? "Pendientes"
            : "Completadas"}
        </strong>
      </p>

      <TaskList tasks={filteredTasks} toggleTask={toggleTask} />
    </div>
  );
}

export default App;
