import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`m-1 py-3 px-5 cursor-pointer bg-grayishColor ${
        task.reminder ? "reminder" : ""
      }`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3 className="flex items-center justify-between">
        {task.text}
        <FaTimes
          className="text-red-700 cursor-pointer"
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p className="text-xs">{task.day}</p>
    </div>
  );
};

export default Task;
/* FOR OTHER ELEMENTS 
task.reminder - border-left: 5px solid green
h3 - display-flex, ali-items - center, juscon - space-btw


*/
