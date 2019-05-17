import home from '../pages/home/home'
import profile from '../pages/profile/profile'
import things from '../pages/things/things'
import shopcard from '../pages/shopcard/shopcard'
import category from '../pages/category/category'



export default[
  {
    path:'/home',
    component:home
  },
  {
    path:'/profile',
    component:profile
  },
  {
    path:'/things',
    component:things
  },
  {
    path:'/shopcard',
    component:shopcard
  },
  {
    path:'/category',
    component:category
  },
  {
    path:'/',
    redirect: '/home'
  }
]
