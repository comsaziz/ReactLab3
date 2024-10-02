import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import About from '../pages/About';  
import ErrorPage from '../Components/ErrorPage'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    errorElement: <ErrorPage />, 
    children: [
      {
        path: 'about/:id',  
        element: <About />, 
      },
    ],
  },
]);

export default router;
