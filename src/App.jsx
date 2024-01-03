import Sidebar from "./components/Sidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProjectForm from "./components/NewProjectForm.jsx";

import { useState } from "react";

function App() {
  const [projects, setProjects] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

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

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects.projects} clickHandler={addProjectHandler} />
      {projects.selectedProjectId === null ? (
        <NewProjectForm
          saveProject={saveProjectHandler}
          cancelProject={cancelProjectHandler}
        />
      ) : (
        <NoProjectSelected clickHandler={addProjectHandler} />
      )}
    </main>
  );
}

export default App;
