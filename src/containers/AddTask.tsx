import { ChangeEvent, SyntheticEvent, useState } from "react";
import AddTaskField from "../components/AddTaskField";

export default function AddTask() {
  const [input, setInput] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    //do something, add task to the array.
    //store input
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <>
      <AddTaskField onSubmit={handleSubmit} onChange={handleChange} />
    </>
  );
}
