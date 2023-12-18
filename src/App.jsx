import Sidebar from "./components/Sidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import NewProjectForm from "./components/NewProjectForm.jsx";

import { useState } from "react";

function App() {
  const [projects, setProjects] = useState([]);
  const [addingProject, setAddingProject] = useState(false);

  const addProjectHandler = () => {
    setAddingProject(true);
  };

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar projects={projects} clickHandler={addProjectHandler} />
      {addingProject ? <NewProjectForm /> : <NoProjectSelected />}
    </main>
  );
}

export default App;
