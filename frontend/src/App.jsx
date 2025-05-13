import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  const route = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <SignUp />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
