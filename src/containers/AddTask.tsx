import { ChangeEvent, SyntheticEvent, useState } from "react";
import AddTaskField from "../components/AddTaskField";
import Task from "../model/Task";

interface AddTaskProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function AddTask({ setTasks, tasks }: AddTaskProps) {
  const [input, setInput] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    setIsInvalid(false);

    if (input === "") {
      setIsInvalid(true);
      return;
    }

    setTasks((prevState) => [
      ...prevState,
      { id: tasks.length + 1, name: input, completed: false },
    ]);

    setInput("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <AddTaskField
        onSubmit={handleSubmit}
        onChange={handleChange}
        value={input}
        isInvalid={isInvalid}
      />
    </>
  );
}
