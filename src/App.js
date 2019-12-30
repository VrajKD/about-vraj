import React from 'react';
import 'tachyons'
import './App.css';
import Title from './components/title-page/Title';
import Projects from './components/projects/Projects';
import About from './components/about-me/About';
import EndPage from './components/end-page/EndPage';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Title />
        <Projects />
        <About />
        <EndPage />
      </div>
    )
  }
}

export default App;
