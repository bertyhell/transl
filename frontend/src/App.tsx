import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import { ProjectDetails } from './views/ProjectDetails';
import { Sidebar } from './views/Sidebar/Sidebar';
import { TranslationEditor } from './views/TranslationEditor';

import './App.scss';

function App() {
  const queryClient = new QueryClient();

  return (
    <div className='main-app'>
      <QueryClientProvider client={queryClient}>
        <Router>
          <QueryParamProvider ReactRouterRoute={Route}>
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
          </QueryParamProvider>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
