import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';

import { ProjectDetail } from './views/ProjectDetail';
import { Sidebar } from './views/Sidebar/Sidebar';
import { TranslationEditor } from './views/TranslationEditor/TranslationEditor';

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
                <Route path='/projects/:projectUuid/translations'>
                  <TranslationEditor />
                </Route>
                <Route path='/projects/:projectUuid/details'>
                  <ProjectDetail />
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
