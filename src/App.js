import React from 'react';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import PGN from './Pages/pgn';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} exact></Route>
          <Route path='/cart' element={<Cart></Cart>} exact></Route>
          <Route path='*' element={<PGN></PGN>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
