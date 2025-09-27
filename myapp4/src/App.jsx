import Layout from "./Routes/Layout";
import { Home, About, Contact } from "./way";
// import About from "./Routes/about";
// import Contact from "./Routes/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Suspense>
        {/* <Stopwatch></Stopwatch> */}
      </BrowserRouter>
    </>
  );
}

export default App;