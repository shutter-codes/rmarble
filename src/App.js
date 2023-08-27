
import { Routes,Route,BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDesc from "./pages/ProductDesc";

export default function App() {
  return (
<BrowserRouter>

<Routes>

<Route path="/" element={<HomePage/>} />

<Route path="/productInfo/:id" element={<ProductDesc/>} />
 </Routes>

</BrowserRouter>
  );
}
