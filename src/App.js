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
        <div className="portrait-warning">Please switch to landscape mode </div>
        <div className="entire-project">
          <Title />
          <Projects />
          <About />
          <EndPage />
        </div>
      </div>
    )
  }
}

export default App;
