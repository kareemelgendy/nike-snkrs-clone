import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Invalid from "./pages/invalid";
import Feed from "./pages/feed";
import Product from "./pages/product";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/launch" />} />
        <Route path="/launch" element={<Feed />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Invalid />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
