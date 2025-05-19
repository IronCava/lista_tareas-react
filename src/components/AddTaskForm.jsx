import { useState } from 'react';

function AddTaskForm({ addTask }) {
  // creo un estado local para guardar lo que el usuario escribe en la descripción
  const [description, setDescription] = useState('');

  // creo otro estado local para guardar la prioridad seleccionada
  const [priority, setPriority] = useState('media');

  // Esta función se ejecuta cuando el usuario envía el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evito que el navegador recargue la página
    if (description.trim() === '') return; // Si el input está vacío, no hago nada
    addTask(description, priority); // Llamo a la función que me pasaron desde App.jsx
    setDescription(''); // Limpio el campo de texto
    setPriority('media'); // Vuelvo a poner la prioridad en "media"
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Descripción de la tarea"
        value={description} // muestro el valor actual del input
        onChange={(e) => setDescription(e.target.value)} // Actualizo el estado cada vez que el usuario escribe
      />
      <select
        value={priority} // muestro la prioridad actual
        onChange={(e) => setPriority(e.target.value)} // Actualizo la prioridad cuando el usuario selecciona otra
      >
        <option value="baja">Baja</option>
        <option value="media">Media</option>
        <option value="alta">Alta</option>
      </select>
      <button type="submit">Agregar</button> {/* Botón que envía el formulario */}
    </form>
  );
}

export default AddTaskForm;
