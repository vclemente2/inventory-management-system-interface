import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DefaultPage from "./pages/DefaultPage/DefaultPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={DefaultPage}>
          <Route index Component={Home} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
