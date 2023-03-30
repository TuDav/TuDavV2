import Home from '~/screen/home';
import Products from '~/screen/products';
import Cart from '~/screen/cart';
import AddNewItems from '~/screen/addNewItems';
import LogIn from '~/screen/logIn';

const publicRoutes = [
      {
        name:'Products',
        href:'/products',
        component:Products
      },
      {
        name:'LogIn',
        href:'/logIn',
        component:LogIn
      },
      {
        name:'AddNewItems',
        href:'/addNewItems',
        component:AddNewItems
      },
      {
        name:'Cart',
        href:'/cart',
        component:Cart
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