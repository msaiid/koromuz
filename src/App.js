import "./App.css";
import {
  Routes,
  Route,
  } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Workers from "./pages/Workers";
import NoPage from "./pages/NoPage";


function App() {
  return (
   
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="workers" element={<Workers />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    
  );
}

export default App;
