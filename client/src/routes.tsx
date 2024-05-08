import Main from './pages/Main';
import Reset from './pages/Reset';
import NotFound from './pages/NotFound';
import Password from './pages/Password';
import Policy from './pages/Policy';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Rates from './pages/Rates';
import Exercises from './pages/Exercises';

const routes = [
    {
        path: 'registration',
        element: <Registration />
    },
    {
        path: 'login',
        element: <Login />,
    },
    {
        path: 'reset',
        element: <Reset />,
    },
    {
        path: 'password',
        element: <Password />
    },
    {
        path: 'policy',
        element: <Policy />
    },
    {
        path: 'rates',
        element: <Rates />
    }
]

export const defaultRoutes = [
    ...routes,
    {
        path: '*',
        element: <Main />,
    },
];

export const authRoutes = [
    ...routes,
    {
        path: '/',
        element: <Main />,
    },
    {
        path: 'exercises',
        element: <Exercises />
    },
    {
        path: '*',
        element: <NotFound />,
    },
];
