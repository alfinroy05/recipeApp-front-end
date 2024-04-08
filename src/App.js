import logo from './logo.svg';
import './App.css';
import AddRecipe from './RecipeApp/AddRecipe';
import SearchRecipe from './RecipeApp/SearchRecipe';

import View from './RecipeApp/View';
import { BrowserRouter,Route,Routes } from 'react-router-dom';




function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<AddRecipe/>}/>
    <Route path='/search' element={<SearchRecipe/>}/>
    <Route path='/view' element={<View/>}/>
  </Routes>
  </BrowserRouter>
     
       

    
  );
}

export default App;
