import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/signIn";
import SignUp from "./pages/SignUp";
import About from "./pages/about";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
