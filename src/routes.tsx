import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import DefaultPage from "./pages/DefaultPage/DefaultPage";
import NewItem from "./pages/NewItem/NewItem";
import InventoryManagement from "./pages/InventoryManagement/InventoryManagement";
import NewHub from "./pages/NewHub/NewHub";
import Profile from "./pages/Profile/Profile";
import NewForm from "./pages/NewForm/NewForm";
import UpdateFormStatus from "./pages/UpdateFormStatus/UpdateFormStatus";
import FormTransfer from "./pages/FormTransfer/FormTransfer";
import ItemReports from "./pages/ItemReports/ItemReports";
import RegionalResume from "./pages/FormReports/RegionalResume/RegionalResume";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={DefaultPage}>
          <Route index Component={Home} />
          <Route path="/new-item" Component={NewItem} />
          <Route path="/inventory-management" Component={InventoryManagement} />
          <Route path="/new-hub" Component={NewHub} />
          <Route path="/reports" Component={ItemReports} />

          <Route path="/new-form" Component={NewForm} />
          <Route path="/form-status" Component={UpdateFormStatus} />
          <Route path="/form-transfer-management" Component={FormTransfer} />
          <Route path="/regional-resume" Component={RegionalResume} />

          <Route path="/profile" Component={Profile} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
