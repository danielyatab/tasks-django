import { useNavigate } from "react-router-dom";
/* eslint-disable react/prop-types */

export default function CardTask({ task }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/create-task/${task.id}`);
  };

  return (
    <div
      className="bg-slate-600 m-2 p-2 rounded-lg max-w-md min-w-72"
      onClick={handleClick}
    >
      <h4 className="text-2xl">{task.title}</h4>
      <p>{task.description}</p>
      <p className="text-lg">{task.done ? "✅" : "📌"}</p>
    </div>
  );
}
