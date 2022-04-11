import Detail from '../views/pages/detail';
import favorite from '../views/pages/favorite';
import Home from '../views/pages/home';

const routes = {
    '/': Home, // default page
    '/favorite': favorite,
    '/detail/:id': Detail,
};

export default routes;
