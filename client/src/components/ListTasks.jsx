import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import CardTask from "./CardTask";

export default function ListTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const response = await getAllTasks();
      setTasks(response.data);
    }
    loadTasks();
  }, []);

  return (
    <>
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {tasks.map((task) => (
          <CardTask key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
