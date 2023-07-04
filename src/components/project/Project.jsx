/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './Project.css';

const Project = (props) => {
  const { img, title, id } = props.project;
  return (
    <div>
      <Link to={`/myPortfolio/project/${id}`}>
        <li className="project">
          <div>
            <img src={img} alt={title} className="project__img" />
            <h3 className="project__title">{title}</h3>
          </div>
        </li>
      </Link>
    </div>
  );
};

export default Project;
