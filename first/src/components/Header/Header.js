import logoImg from '../../assets/react-core-concepts.png';
import'./Header.css';
const descriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function getRandomDescription() {
  return descriptions[getRandomInt(3)];
}

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {getRandomDescription()} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}