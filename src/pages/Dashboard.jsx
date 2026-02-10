import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState();
  const [showForm, setshowForm] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("called after API", tasks);
  }, [tasks]);
  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    // console.log('click from dashboard')
    localStorage.removeItem("loginData");
    localStorage.removeItem("authData");
    // localStorage.clear()
    navigate("/login");
  };

  const handleaddTask = async (newTask) => {
    const tasktoAdd = { ...newTask, completed: false };
    try {
      const response = await fetch("http://localhost:3000/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tasktoAdd),
      });
      console.log(tasktoAdd);
      const data = await response.json();
      setTasks([...tasks, data]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateTask = async (updateTask) => {
    try {
      await fetch(`http://localhost:3000/tasks/${updateTask.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateTask),
      });
      setTasks(
        tasks.map((tasks) =>
          tasks.id === updateTask.id ? { ...updateTask } : tasks,
        ),
      );
    } catch (error) {
      console.log(error);
    }
  };

  const editingTask = (editingTask) => {
    console.log(editTask);
    setEditTask(editingTask);
  };
  const handleDeleteTask = async (id) => {
    try {
      await fetch("http://localhost:3000/tasks/$(id)", {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleCompleteTask =async(id)=>{
    const taskToggle = tasks.find((t)=> t.id==id);
    const UpdatedTask ={...taskToggle,completed:!taskToggle.completed};
    try {
      await fetch("http://localhost:3000/task/$(id)",{
        method:"put",
        headers:{"content Type":"aplication/json"},
        bosy:JSON.stringify(updateTask),
      })
      setTasks(tasks.map((task)=>(task.id==id? updatedTask:task)))
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <NavBar
       title="Task Management"
       isFormOpen={showForm}
       onAddTaskBtnClick={()=> setshowForm(!showForm)}
        onLogout={handleLogout}
         />
         {showForm &&(
      <TaskForm
        addTask={handleaddTask}
        updateTask={handleUpdateTask}
        editingTask={editTask}
      />
      )}
      <h1>MY TASKS</h1>
      <TaskList
        tasks={tasks}
        editingTask={editingTask}
        deletingTask={handleDeleteTask}
        handleCompleteTask={handleCompleteTask}
      />
    </div>
  );
};

export default Dashboard;
