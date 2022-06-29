import { useState, useEffect } from "react";
import Header from "./Header";
import Tasks from "./Tasks";
import AddTask from "./AddTask";

const Home = () => {
  const [showAddForm, setAddForm] =
    useState(false);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await fetch(
      "http://localhost:5000/tasks/",
    );
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(
      `http://localhost:5000/tasks/${id}`,
    );
    const data = await res.json();

    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  // ADD TASK
  const addTask = async (task) => {
    const res = await fetch(
      "http://localhost:5000/tasks/",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      },
    );
    const data = await res.json();
    setTasks([...tasks, data]);
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    await fetch(
      `http://localhost:5000/tasks/${id}`,
      {
        method: "DELETE",
      },
    );
    setTasks(
      tasks.filter((task) => task.id !== id),
    );
  };

  // TOGGLE REMINDER
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder,
    };

    const res = await fetch(
      `http://localhost:5000/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(updTask),
      },
    );

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, reminder: data.reminder }
          : task,
      ),
    );
  };
  return (
    <>
      <Header
        onShow={() => setAddForm(!showAddForm)}
        showAdd={showAddForm}
      />
      {showAddForm && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        <h2 className="text-center text-lg">
          No Tasks To Show!
        </h2>
      )}
    </>
  );
};

export default Home;
