import { UseTask } from "@/contex/TaskContex";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

const TaskCard = ({ task }) => {
  const { deleteTask } = UseTask();
  const route = useRouter();

  return (
    <div className=" bg-white text-black p-4 rounded-md mt-5 border-black border-4 h-max">
      {task.title.length >= 30 ? (
        <>
          <p style={{ wordWrap: "break-word" }} className="text-xl font-extrabold pb-8">{task.title.slice(0, task.title.length)}</p>
        </>
      ) : (
        <p className="text-xl font-extrabold pb-8">{task.title}</p>
      )}

      {task.description.length >= 30 ? (
        <>
          <p style={{ wordWrap: "break-word" }} className=" pb-5">{task.description.slice(0, task.description.length)}</p>
        </>
      ) : (
        <p className=" pb-5">{task.description}</p>
      )}

      <div className="flex justify-between items-end ">
        <button
          className="p-1.5 my-4 justify-end rounded-lg border-2 border-black hover:bg-black hover:text-[#fbc2cb]"
          onClick={(e) => {
            e.stopPropagation();
            const confirm = window.confirm(
              "Are you sure you want to delete this task"
            );

            if (confirm) {
              deleteTask(task.id);
              toast.success("Task deleted successfully");
            }
          }}
        >
          Eliminar
        </button>

        <button
          className="p-1.5 my-4 justify-end rounded-lg border-2 border-black hover:bg-black hover:text-[#fbc2cb]"
          onClick={() => {
            route.push(`edit/${task.id}`);
          }}
        >
          Editar
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
