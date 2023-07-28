// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import './style.css';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipes</h1>
        <Routes>
          <Route exact path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
