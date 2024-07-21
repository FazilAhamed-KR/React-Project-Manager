import React from "react";
import Button from "./Button";

const ProjectSideBar = ({
  onSelected,
  project,
  onSelect,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Projects
      </h1>
      <div>
        <Button onClick={onSelected}>
          <strong>+</strong> ADD PROJECT
        </Button>
      </div>
      <ul className="mt-8">
        {project.map((item) => {
          let cssName = "w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800";
          if (project.id === selectedProjectId) {
            cssName += " bg-stone-800 text-stone-200 w-full text-left px-2 py-1";
          } else {
            cssName += " bg-stone-900";
          }
          return (
            <li key={item.id}>
              <button className={cssName} onClick={() => onSelect(item.id)}>
                {item.projectData.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSideBar;
