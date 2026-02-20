import React from "react";
import AppRoutes from "./router/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
