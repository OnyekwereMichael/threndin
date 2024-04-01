import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer"
import Community from "./pages/community";
import Home from "./pages/home";
import Signup from "./pages/signup";

function App() {
  return (
    <>
      {/* <Header />
      <Community />
      <Home />
      <Footer /> */}

      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path = "/signup" element={<Signup />}/> 
          {/* <Route path = "/Map" element={<Map />}/> 
          <Route path = "/Marketplace" element={<Marketplace />}/> 
          <Route path="*" element={"PAGE NOT FOUND"} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;
