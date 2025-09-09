import './assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/cart.css'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from './Pages/Home'
import About from './Pages/About';
import Shop from './Pages/Shop';
import Categories from './Pages/Categories';
import Deals from './Pages/Deals';
import Contact from './Pages/Contact';

function App() {

  let router = createBrowserRouter([
    {
      path: "/",
      Component: Home,
    },
    {
      path: "/shop",
      Component: Shop,
    },
    {
      path: "/categories",
      Component: Categories,
    },
    {
      path: "/deals",
      Component: Deals,
    },
    {
      path: "/about",
      Component: About,
    },
    {
      path: "/contact",
      Component: Contact,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
