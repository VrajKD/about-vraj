import React from 'react';
import 'tachyons'
import './App.css';
import Title from './components/title-page/Title';
import Projects from './components/projects/Projects';
import About from './components/about-me/About';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Projects />
        <About />
      </div>
    )
  }
}

export default App;
