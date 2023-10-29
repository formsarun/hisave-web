import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import SearchPage from "./views/SearchPage";
import QrscanPage from "./views/QrscanPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" key="SearchPage" element={<SearchPage />} />
        <Route path="/home" exact key="HomePage" element={<HomePage />} />
        <Route path="/qr" exact key="HomePage" element={<QrscanPage />} />
      </Routes>
    </Router>
  );
}

export default App;
