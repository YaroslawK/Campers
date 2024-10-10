import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/NotFound/NotFound";
import { HomePage } from "./components/HomePage/HomePage";
import { Catalog } from "./components/Catalog/Catalog";

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="*" element={<NotFound/>}></Route>
      </Route>
    </Routes>
    </>
  );
}

export default App;
