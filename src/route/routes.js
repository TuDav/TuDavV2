import Home from '~/screen/home';
import Products from '~/screen/products';

const publicRoutes = [
    {
        name:'Products',
        href:'/products',
        component:Products
      },
      {
        name:'Home',
        href:'/',
        component: Home
      },
]

const privateRoutes = [

]
export  {publicRoutes, privateRoutes};