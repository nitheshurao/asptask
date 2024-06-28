import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import EditTemplate from './components/EditTemplate';
import TemplatesList from './components/TemplateList/TemplatesList';
import Createtemplate from './components/CreateTemplate';
import TemList from './components/TemplateList/TemList';

const App = () => {
  return (

    <Router>
      {/* <Header /> */}
      <Routes >
        <Route path='/' exact element={<Login />} />
        <Route path="/TemplatesList" element={<TemList />} />
        <Route path="/CreateTemplate" element={<Createtemplate />} />
        <Route path="/EditTemplate/:id" element={<EditTemplate />} />
      </Routes>
    </Router>
  );
};
export default App;