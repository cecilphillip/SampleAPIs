import About from "../pages/About/About";
import APIDetails from "../pages/APIDetails/APIDetails";
import APIList from "../pages/api-list";
import Home from "../pages";
import StyleGuide from "../pages/StyleGuide/StyleGuide";
import NotFound from "../pages/NotFound/NotFound";
import Docs from "../pages/Docs/Docs";

const Routes = [
  {
    path: "/",
    exact: true,
    component: Home,
  },
  {
    path: "/style-guide",
    exact: true,
    component: StyleGuide,
  },
  {
    path: "/about",
    exact: true,
    component: About,
  },
  {
    path: "/docs",
    exact: true,
    component: Docs,
  },
  {
    path: "/api-list",
    exact: true,
    component: APIList,
  },
  {
    path: "/api-list/:id",
    exact: true,
    component: APIDetails,
  },
  {
    path: "/",
    exact: false,
    component: NotFound,
  },
];

export default Routes;
