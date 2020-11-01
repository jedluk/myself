import React, { useEffect, useState } from 'react';
import { joinClassNames } from './App.utils';
import './App.css';

const SWING_INTERVAL = 1.5 * 1000;
const tech = ['python', 'react', 'node', 'redux', 'js'];

function App() {
  const [refresh, setRefresh] = useState(0);
  const [skills, setSkills] = useState(tech);

  useEffect(() => {
    const timeout = setInterval(() => setRefresh(Date.now()), SWING_INTERVAL);
    return () => clearInterval(timeout);
  }, []);

  useEffect(() => {
    setSkills((prevSkills) => {
      const skillsCopy = [...prevSkills];
      return [skillsCopy.pop()].concat(skillsCopy);
    });
  }, [refresh]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="me" alt="me" />
          <div className="circle" />
          <div className="label" />
        </div>
        <h1>Hi there ! I'm Jędrzej </h1>
        <div className="label">
          {skills.map((skill) => (
            <div key={skill} className={joinClassNames('tech', `tech-${skill}`)} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
