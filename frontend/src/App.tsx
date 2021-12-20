import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet, Route, Routes } from 'react-router-dom';

import { CompanyDetail } from './views/CompanyDetail';
import { ProjectDetail } from './views/ProjectDetail';
import { Sidebar } from './views/Sidebar/Sidebar';
import { TranslationEditor } from './views/TranslationEditor/TranslationEditor';

import './App.scss';

function Layout() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className='flex flex-row'>
        <Sidebar className='w-1/4' />
        <div className='w-3/4 p-2'>
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />} path='/'>
        <Route element={<CompanyDetail />} path='companies/:companyUuid' />
        <Route element={<ProjectDetail />} path='companies/:companyUuid/projects/:projectUuid' />
        <Route element={<TranslationEditor />} path='companies/:companyUuid/projects/:projectUuid/translations' />
        <Route element={<p>No found route</p>} path='*' />
      </Route>
    </Routes>
  );
}

export default App;
