import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ProjectDetails } from './views/ProjectDetails';
import { Sidebar } from './views/Sidebar/Sidebar';
import { TranslationEditor } from './views/TranslationEditor';

import './App.scss';

function App() {
  return (
    <div className='main-app'>
      <Router>
        <Sidebar />
        <div className='main-view'>
          <Switch>
            <Route path='/projects/:projectId/:languageId'>
              <TranslationEditor />
            </Route>
            <Route path='/projects/:projectId'>
              <ProjectDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
