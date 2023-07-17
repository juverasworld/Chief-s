import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Username from './components/Username';
import Password from './components/Password';
import Profile from './components/Profile';
import Recovery from './components/Recovery';
import Reset from './components/Reset';
import Register from './components/Register';
import PageNotFound from './components/PageNotFound';
// route route

const router = createBrowserRouter([
  {
    path : "/",
    element : <Username></Username>
  },
  {
    path : "/register",
    element : <Register></Register>
  },
  {
    path : "/recovery",
    element : <Recovery></Recovery>
  },
  {
    path : "/password",
    element : <Password></Password>
  },
  {
    path : "/profile",
    element : <Profile></Profile>
  },
  {
    path : "/reset",
    element : <Reset></Reset>
  },
  {
    path : "/username",
    element : <Username></Username>
  },
  {
    path : "*",
    element : <PageNotFound></PageNotFound>
  }
])
function App() {
  return (
   <main>
    <RouterProvider router={router}></RouterProvider>
   </main>
  );
}

export default App;
