import "./style.css";
import { persons } from "../persons";
import { useState } from "react";

const Tasks = ({
  tasks,
  hideDone,
  removeTask,
  toggleTaskDone,
  choosePerson,
}) => {
  const [person, setPerson] = useState(persons[0].name);

  const onSubmit = (event) => {
    event.preventDefault();
    choosePerson(person);
  };

  return (
    <ul className="tasks" onSubmit={onSubmit}>
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`tasks__item ${
            task.done & hideDone ? "task__item--hidden" : " "
          }`}
        >
          <button
            className="tasks__button tasks__button--done"
            onClick={() => toggleTaskDone(task.id)}
          >
            {task.done ? "✔" : ""}
          </button>
          <span
            className={`tasks__content ${
              task.done ? " tasks__content--done" : " "
            }`}
          >
            {task.content}
          </span>
          <select
            className="tasks__select"
            value={person}
            onChange={({ target }) => setPerson(target.value)}
          >
            {persons.map((person) => (
              <option key={person.name} value={person.name}>
                {person.name}
              </option>
            ))}
          </select>
          <button
            className="tasks__button task__button--remove"
            onClick={() => removeTask(task.id)}
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
