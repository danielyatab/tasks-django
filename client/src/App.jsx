import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import TasksFormPage from "./pages/TasksFormPage";
import TasksPage from "./pages/TasksPage";
import Navigation from "./components/Navigation";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Navigate to={"/tasks"} />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/create-task" element={<TasksFormPage />} />
        <Route path="/create-task/:id" element={<TasksFormPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
