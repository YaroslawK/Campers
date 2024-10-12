import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NotFound } from "./components/NotFound/NotFound";
import { HomePage } from "./components/HomePage/HomePage";
import { Catalog } from "./components/Catalog/Catalog";
import { TruckInfo } from "./components/Catalog/Truck/TruckInfo/TruckInfo";



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<TruckInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
