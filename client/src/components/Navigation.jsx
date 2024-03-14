import { Link, useLocation } from "react-router-dom";

function Navigation() {
  const location = useLocation();

  return (
    <nav className="flex justify-center m-4 gap-5">
      <Link
        className={`p-2 rounded-lg ${
          location.pathname == "/tasks" ? "bg-green-500" : "bg-green-800"
        }`}
        to={"/tasks"}
      >
        Tasks
      </Link>
      <Link
        className={`p-2 rounded-lg ${
          location.pathname == "/create-task" ? "bg-green-500" : "bg-green-800"
        }`}
        to={"/create-task"}
      >
        Create Task
      </Link>
    </nav>
  );
}

export default Navigation;
