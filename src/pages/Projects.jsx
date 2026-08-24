import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
