import { useEffect } from "react";
import { UseTask } from "../../contex/TaskContex";
import { useRouter } from "next/router"; // Cambiado a "next/router"
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Page = ({ params }) => { // Cambiado el nombre a "Page"
  const { createTask, tasks, updateTask } = UseTask();
  const router = useRouter();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateTask(params.id, data);
      toast.success("Task Updated");
    } else {
      createTask(data.title, data.description);
      toast.success("Task Created");
    }
    router.push("/");
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      if (taskFound) {
        setValue("title", taskFound.title);
        setValue("description", taskFound.description);
      }
    }
  }, [params.id, tasks, setValue]); // Agregado las dependencias faltantes

  return (
    <div className=" flex justify-center items-center h-[90vh] container mx-auto px-6   ">
      <div className="w-full max-w-sm p-4 bg-white border-4 border-black rounded-lg shadow sm:p-6 md:p-8 ">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div>
            <label className="block mb-2 text-sm font-extrabold text-black">
            Título
            </label>
            <div>
              <input
                className="bg-white border-black text-black border-2 text-sm rounded-lg block w-full p-2.5"
                {...register("title", { required: true })}
              />
              {errors.title && <span>Este campo es requerido.</span>}
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-extrabold text-black">
            Descripción
            </label>
            <div>
              <input
                className="bg-white border-black text-black border-2 text-sm rounded-lg block w-full p-2.5 "
                {...register("description", { required: true })}
              />
              {errors.description && <span>Este campo es requerido.</span>}{" "}
            </div>
          </div>

          <button
            className="w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center border-2 border-black hover:bg-black hover:text-[#fbc2cb]"
            type="submit"
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
