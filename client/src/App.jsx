import React from 'react';
import { Routes, Route } from 'react-router-dom'

import { Header } from './components';
import {Homepage, SecretPage, WelcomePage, ProjectsPage} from './pages';
import "./assets/css/globalStyles.css"
function App() {

  return (
    <>
    <Routes>
      <Route path='/' >
        <Route index element={<WelcomePage/>}/>
        <Route path='/camille' element={<Header/>}>
          <Route index element={<Homepage/>}/>
          <Route path='projects' element={<ProjectsPage/>} />
        </Route>
        <Route path='secret' element={<SecretPage/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App
