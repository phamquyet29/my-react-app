// src/App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "antd/dist/reset.css";
import Layout from "./components/Layout";
import "@ant-design/v5-patch-for-react-19";

import QnA from "./pages/QnA";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <QnA /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
