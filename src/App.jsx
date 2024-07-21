import { useState } from "react";
import Noproject from "./component/Noproject";
import ProjectSideBar from "./component/ProjectSideBar";
import NewProject from "./component/NewProject";
import SelectedProject from "./component/SelectedProject";

function App() {
  const [selectedProject, setSelectedProject] = useState({
    selectedProjectId: undefined,
    project: [],
    task: [],
  });
  const handleAddTask = (text) => {
    setSelectedProject((prev) => {
      const taskId = Math.random().toFixed(2);
      const newTask = {
        text: text,
        projectId: prev.selectedProjectId,
        id: taskId,
      };
      return {
        ...prev,
        task: [newTask, ...prev.task],
      };
    });
  };

  const handleSelectedProject = (id) => {
    setSelectedProject((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  };

  const handleSelectAddBtn = () => {
    setSelectedProject((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };

  const handleCancelbtn = () => {
    setSelectedProject((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  };

  const handleAddbtn = (projectData) => {
    setSelectedProject((prev) => {
      const projectId = Math.random().toFixed(2);
      const newProject = {
        projectData,
        id: projectId,
      };
      return {
        ...prev,
        selectedProjectId: undefined,
        project: [...prev.project, newProject],
      };
    });
  };

  const handleDelete = () => {
    setSelectedProject((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        project: prev.project.filter(
          (project) => project.id !== selectedProject.selectedProjectId
        ),
      };
    });
  };

  const handleDeleteTask = (id) => {
    setSelectedProject((prev) => {
      return {
        ...prev,
        task: prev.task.filter((task) => task.id !== id),
      };
    });
  };

  const project = selectedProject.project.find(
    (project) => project.id === selectedProject.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={project}
      onDelete={handleDelete}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={selectedProject.task}
    />
  );
  if (selectedProject.selectedProjectId === null) {
    content = <NewProject onClick={handleAddbtn} onCancel={handleCancelbtn} />;
  } else if (selectedProject.selectedProjectId === undefined) {
    content = <Noproject onSelected={handleSelectAddBtn} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar
        onSelected={handleSelectAddBtn}
        project={selectedProject.project}
        onSelect={handleSelectedProject}
        selectedProjectId={selectedProject.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
