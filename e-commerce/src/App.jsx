import "./assets/css/responsive.css";
import './assets/css/loginSign.css'
import "./assets/css/odersummary.css";
import 'sweetalert2/src/sweetalert2.scss'
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import OrderSummary from "./Pages/OrderSummary";
import Deals from "./Pages/Deals";
import Contact from "./Pages/Contact";
import LoginSign from "./Pages/LoginSign";
import {
  QueryClient,
  QueryClientProvider,

} from "@tanstack/react-query";
import Detail from "./Pages/Detail";
import AppLayout from "./Components/AppLayout";
import { ProductProvider } from "./Context/ProductContext";


function App() {



  const query = new QueryClient();

  let router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/shop", element: <Shop /> },
        { path: "/product/:id", element: <Detail /> },
        { path: "/orderSummary", element: <OrderSummary /> },
        { path: "/deals", element: <Deals /> },
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
     { path: "/loginSign", element: <LoginSign /> },
  ]);
  return (
    <>
      <QueryClientProvider client={query}>
        <ProductProvider >


          <RouterProvider router={router} />

        </ProductProvider>

      </QueryClientProvider>
    </>
  );
}

export default App;
