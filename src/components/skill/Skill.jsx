/* eslint-disable react/prop-types */
import styles from './Skill.module.css';
const Skill = ({ skill }) => {
  return (
    <li className={styles.skillItem}>
      <p>{skill.name}</p>
      <div className={styles.image}>
        <img src={skill.image} alt={skill.name}></img>
      </div>
    </li>
  );
};

export default Skill;
