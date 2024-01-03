import Sidebar from "./components/Sidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProjectForm from "./components/NewProjectForm.jsx";

import { useState } from "react";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  const handleAddTask = (text) => {
    setProjects((prevState) => {
      const taskID = Math.random();
      const newTask = {
        text: text,
        id: taskID,
        projectID: prevState.selectedProjectId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjects((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  };

  const addProjectHandler = () => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const saveProjectHandler = (projectData) => {
    setProjects((prevState) => {
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID,
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined,
      };
    });
  };

  const cancelProjectHandler = () => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectProject = (projectID) => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectID,
      };
    });
  };

  const deleteSelectedProject = (projectID) => {
    setProjects((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  };

  const selectedProject = projects.projects.find(
    (project) => project.id == projects.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      deleteProject={deleteSelectedProject}
      addTask={handleAddTask}
      deleteTask={handleDeleteTask}
      tasks={projects.tasks}
    />
  );

  if (projects.selectedProjectId === null) {
    content = (
      <NewProjectForm
        saveProject={saveProjectHandler}
        cancelProject={cancelProjectHandler}
      />
    );
  } else if (projects.selectedProjectId === undefined) {
    content = <NoProjectSelected clickHandler={addProjectHandler} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        projects={projects.projects}
        clickHandler={addProjectHandler}
        selectProject={handleSelectProject}
        selectedProjectId={projects.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
