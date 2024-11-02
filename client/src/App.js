import {Layout, RequireAuth } from '../src/routes/layout/layout';
import HomePage from './routes/homePage';
import ListPage from './routes/listPage';
import SinglePage from './routes/singlePage/singlePage';
import ProfilePage from './routes/profilePage/profilePage';
import Login from './routes/login/login'
import Register from './routes/register/register'
import ProfileUpdatePage from './routes/profileUpdatePage/profileUpdatePage';
import NewPostPage from './routes/newPostPage/newPostPage';
import { listPageLoader, profilePageLoader, singlePageLoader } from './lib/loaders';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />,
          loader: listPageLoader,
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader: singlePageLoader,
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        }
      ]
    },
    {
      path:"/",
      element:<RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
          loader: profilePageLoader,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/add",
          element: <NewPostPage />
        },
      ]
    }
  ]);

  return (

    <RouterProvider router={router} />
  );
}

export default App;
