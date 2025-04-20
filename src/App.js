// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'antd/dist/reset.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import FinanceNews from './pages/FinanceNews';
import QnA from './pages/QnA';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'tin-tuc-tai-chinh', element: <FinanceNews /> },
      { path: 'hoi-dap', element: <QnA /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;