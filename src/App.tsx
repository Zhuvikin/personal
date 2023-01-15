import React from 'react';
import './App.css';

import Terminal from 'react-animated-term'
import 'react-animated-term/dist/react-animated-term.css'


const termLines = [
  {
    'text': 'whoami',
    'cmd': true,
    'repeat': true,
  },
  {
    'text': `I'm a full-stack software engineer`,
    'cmd': false,
    'repeat': true,
  },
  {
    'text': 'ls -la experience/',
    'cmd': true,
    'repeat': true,
  },
  {
    'text': `total 8 years
2022-pres   T-Systems Iberia S.A.U.   senior software engineer     
2018-2022   T-Systems LLC             senior software engineer     
2016-2018   Deutche Telecom IT        full-stack software developer
2017-2018   Hot Defense               software engineer            
2015-2016   WAP Business              web developer                
2010-2016   Self-employed             UI/UX designer, web developer`,
    'cmd': false,
    'repeat': true,
  },
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aleksei Zhuvikin</h1>
        <div className="terminal-wrapper">
          <Terminal
            lines={termLines}
            interval={80}
            white
          />
        </div>
      </header>
    </div>
  );
}

export default App;
