import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DefaultPage from "./pages/DefaultPage/DefaultPage";
import NewItem from "./pages/NewItem/NewItem";
import InventoryManagement from "./pages/InventoryManagement/InventoryManagement";
import NewHub from "./pages/NewHub/NewHub";
import Reports from "./pages/Reports/Reports";
import Profile from "./pages/Profile/Profile";
import NewForm from "./pages/NewForm/NewForm";
import UpdateFormStatus from "./pages/UpdateFormStatus/UpdateFormStatus";
import FormTransfer from "./pages/FormTransfer/FormTransfer";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={DefaultPage}>
          <Route index Component={Home} />
          <Route path="/new-item" Component={NewItem} />
          <Route path="/inventory-management" Component={InventoryManagement} />
          <Route path="/new-hub" Component={NewHub} />
          <Route path="/reports" Component={Reports} />
          <Route path="/profile" Component={Profile} />

          <Route path="/new-form" Component={NewForm} />
          <Route path="/form-status" Component={UpdateFormStatus} />
          <Route path="/form-transfer-management" Component={FormTransfer} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
