import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Form from './Components/Form.jsx'
import Edit from './Components/Edit.jsx'
import Info from './Components/Info.jsx'
import {BrowserRouter, Route, Routes} from 'react-router'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path = '/' element = {<App/>}/>
    <Route path = "/form" element = {<Form/>}/>
    <Route path = "/:id/edit" element = {<Edit/>}/>
    <Route path = "/:id" element = {<Info/>}/>
  </Routes>
  </BrowserRouter>
)
