"use client";
import TaskCard from "@/components/TaskCard";
import { UseTask } from "@/contex/TaskContex";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  const { tasks } = UseTask();

  return (
     <div className="columns-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto px-6">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default Page;
