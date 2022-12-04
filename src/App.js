import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimals() {
  const animalList = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animalList[Math.floor(Math.random() * animalList.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    const newAni = getRandomAnimals();
    if (animals.includes(newAni) === false) {
      setAnimals([...animals, newAni]);
    } else return;
  };

  return (
    <div className="App">
      <div>Show Animal list here!</div>
      <button onClick={handleClick}>Add Animals</button>
      <div>
        {animals.map((type) => {
          return <AnimalShow type={type} key={type} />;
        })}
      </div>
    </div>
  );
}

export default App;
