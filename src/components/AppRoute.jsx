import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import Main from "../pages/Main";
import Configuration from "../pages/Configuration";
import Email from "../pages/Email";
import Matrix from "../pages/Matrix";
import Pacman from "../pages/Pacman";
import Header from "./Header";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/configuration" element={<Configuration />} />
        <Route path="/email" element={<Email />} />
        <Route path="/matrix" element={<Matrix />} />
        <Route path="/pacman" element={<Pacman />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRoute;
