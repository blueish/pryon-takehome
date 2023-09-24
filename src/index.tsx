import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter, Navigate, createRoutesFromElements, Route } from 'react-router-dom';
import Login from './pages/login';
import Astronauts from './pages/astronauts';
import Profile from './pages/profile';
import ISSLocation from './pages/iss-location';
import { AuthContext, AuthProvider } from './contexts/auth';
import { TopMenu } from './common/top-menu';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


const ProtectedByLogin = ({ children }: { children: JSX.Element }): JSX.Element => {
  const { user } = useContext(AuthContext);
  if (!user.name) {
    return <Navigate to="/login"/>
  }

  return children
}


const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        element: <TopMenu />,
        children: [
          {
            path: "*",
            element: <Navigate to="/login" />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/iss",
            element: <ProtectedByLogin><ISSLocation /></ProtectedByLogin>,
          },
          {
            path: "/astronauts",
            element: <ProtectedByLogin><Astronauts /></ProtectedByLogin>,
          },
          {
            path: "/Profile",
            element: <ProtectedByLogin><Profile /></ProtectedByLogin>,
          },
        ]
      }

    ]
  }
])


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
