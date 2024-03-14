import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getTask, postTask, putTask } from "../api/tasks.api";
import { useNavigate, useParams } from "react-router-dom";
import { deleteTask } from "../api/tasks.api";
import toast from "react-hot-toast";

function TasksFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (values) => {
    if (params.id) {
      await putTask(params.id, values);
      toast.success("Update Delete");
    } else {
      await postTask(values);
      toast.success("Add Delete");
    }
    navigate("/tasks");
  });

  const handleClick = async (id) => {
    await deleteTask(id);
    navigate("/tasks");
    toast.success("Task Delete");
  };

  useEffect(() => {
    async function fieldsUser() {
      if (params.id) {
        const res = await getTask(params.id);
        const data = await res.data;
        setValue("title", data.title);
        setValue("description", data.description);
      }
    }
    fieldsUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="text-black p-12 ">
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <input
            className="rounded-lg"
            type="text"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <span className="text-red-500">Error en el titulo</span>
          )}
          <textarea
            type="text"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <span className="text-red-500">Error en la descripcion</span>
          )}
          <button
            type="submit"
            className="text-white px-2 py-1 bg-blue-500 rounded-lg m-4"
          >
            Subir
          </button>
        </form>
        {params.id && (
          <button
            className="p-1 bg-red-500 rounded-lg mx-2 w-full"
            onClick={() => handleClick(params.id)}
          >
            Delete
          </button>
        )}
      </div>
    </>
  );
}

export default TasksFormPage;
