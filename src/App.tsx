import AppLayout from "./components/appLayout/AppLayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DashboardPage from "./pages/dashboard/DashboardPage";
import TalentsPage from "./pages/talents/TalentsPage";
import PicPage from "./pages/pic/PicPage";
import CompanyPage from "./pages/company/CompanyPage";
import TrackerPage from "./pages/tracker/TrackerPage";



const routing = [
  {
    exact: true,
    path: '/',
    component: DashboardPage
  },
  {
    exact: true,
    path: '/talent',
    component: TalentsPage
  },
  {
    exact: true,
    path: '/pic',
    component: PicPage
  },
  {
    exact: true,
    path: '/company',
    component: CompanyPage
  },
  {
    exact: true,
    patch: '/tracker',
    component: TrackerPage
  },

]

const renderRouting = routing.map((route, index) => <Route key={index} {...route}/>);
function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Switch>
          {renderRouting}
        </Switch>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
