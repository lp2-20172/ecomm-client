import {Content} from './app/AppContent'
import {Home, Bus, Cart, About, Sandwiches}
 from './app/AppContent'
 import CategoriaList from './categorias/List'
 import CategoriaForm from './categorias/Form'
 
////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/home',
    title: 'Home!',
    icon:'home',
    exact: true,
    component: Home
  },

  {
    path: '/sandwiches',
    title: 'sandwiches!',
    icon:'send',
    component: Sandwiches
  },
  {
    path: '/tacos',
    title: 'tacos!',
    icon:'list',
    component: Content,
    routes: [
      {
        path: '/tacos/bus',
        title: 'bus!',
        icon:'send',
        component: Bus
      },
      {
        path: '/tacos/cart',
        component: Cart
      },
      {
        path: '/tacos/about/:id',
        title: 'About!',
        icon:'send',
        component: About
      }
    ]
  },
  {
    path: '/categorias',
    title: 'Categorias!',
    icon:'list',
    component: Content,
    routes: [
      {
        path: '/categorias/list',
        title: 'Lis!',
        icon:'send',
        component: CategoriaList
      },
      {
        path: '/categorias/new',
        title: 'New!',
        icon:'send',
        component: CategoriaForm
      },
      {
        path: '/categorias/edit/:id',
        title: 'Edit!',
        icon:'send',
        component: CategoriaForm
      },
      
    ]
  }
]

export { routes, }