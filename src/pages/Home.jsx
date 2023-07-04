import Header from '../components/header/Header';
import Skill from '../components/skill/Skill';
import skills from '../helpers/skillsList';

const Home = () => {
  return (
    <>
      <Header />
      <main className="section home-section">
        <div className="container">
          <ul className="content-list skills-list">
            <h2 className="title-2">Skills</h2>
            <div className="content-list-wrapper">
              {skills.map((skill) => (
                <Skill skill={skill} key={skill.id} />
              ))}
            </div>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
