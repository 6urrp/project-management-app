import Button from "./Button";

const Sidebar = ({ clickHandler, projects }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your projectst
      </h2>
      <div>
        <Button onClick={clickHandler}>+ Add project</Button>
      </div>
      <ul>
        {projects?.map((project, index) => {
          return <li key={project.id}>{project.title}</li>;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
