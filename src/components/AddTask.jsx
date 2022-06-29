import { useState } from "react";
import FormControl from "./FormControl";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add Task");
      return;
    }

    onAdd({ text, day, reminder });
    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <FormControl
        type="text"
        placeholder="Enter Task..."
        label="Add Task"
        direction="flex-col"
        margin="my-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <FormControl
        type="text"
        placeholder="Add day and time..."
        label="Day and Time"
        direction="flex-col"
        margin="my-3"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />

      <FormControl
        type="checkbox"
        label="Set Reminder"
        direction="flex-row"
        margin="my-3"
        justify="justify-between"
        items="items-center"
        value={reminder}
        onChange={(e) =>
          setReminder(e.currentTarget.checked)
        }
        checked={reminder}
      />

      <input
        type="submit"
        value="Save Task"
        className="block w-full text-zinc-50 py-3 px-5 m-1 rounded-xl text-base cursor-pointer bg-defaultBtn my-5"
      />
    </form>
  );
};

export default AddTask;
