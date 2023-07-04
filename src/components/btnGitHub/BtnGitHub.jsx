/* eslint-disable react/prop-types */
import githubIcon from './../../assets/img/icons/gitHub-black.svg';
import './BtnGitHub.css';

const BtnGitHub = ({ link }) => {
  return (
    <div>
      <a href={link} target="_blank" className="btn-outline" rel="noreferrer">
        <img src={githubIcon} alt="" />
        GitHub repo
      </a>
    </div>
  );
};

export default BtnGitHub;
