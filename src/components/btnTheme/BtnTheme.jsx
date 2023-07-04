import sun from './../../assets/img/icons/sun.svg';
import moon from './../../assets/img/icons/moon.svg';
import './BtnTheme.css';
import { useEffect } from 'react';
import { useLocalStorage } from '../../utils/useLocalStorage';
import detectTheme from '../../utils/detectTheme';

function toggleThemeOnPage(theme) {
  const body = document.querySelector('body');
  if (theme === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}

const BtnTheme = () => {
  const btnNormal = 'dark-mode-btn';
  const btnActive = 'dark-mode-btn dark-mode-btn--active';
  const [theme, setTheme] = useLocalStorage('theme', detectTheme());

  useEffect(() => {
    toggleThemeOnPage(theme);
  }, [theme]);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light';
        setTheme(newColorScheme);
      });
  }, [setTheme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      className={theme === 'dark' ? btnActive : btnNormal}
      onClick={toggleTheme}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnTheme;
