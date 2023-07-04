import { Link, useParams } from 'react-router-dom';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import { projects } from '../helpers/projectsList';

const Project = () => {
  const { id } = useParams();
  const project = projects[id - 1];
  if (!project) {
    return <h1>Project not found</h1>;
  }
  return (
    <>
      <main className="section">
        <div className="container">
          <div className="project-details">
            <h1 className="title-1">{project.title}</h1>
            <img
              src={project.imgBig}
              alt={project.title}
              className="project-details__cover"
            />

            <div className="project-details__desc">
              <p>Skills: {project.skills}</p>
            </div>
            {project.githubLink && <BtnGitHub link={project.githubLink} />}
            <div className="deploy">
              <Link to={project.deploy} target="_blank" rel="noreferrer">
                Deploy
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
