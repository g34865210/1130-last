import home from '../pages/home/home'
import profile from '../pages/profile/profile'
import things from '../pages/things/things'
import shopcard from '../pages/shopcard/shopcard'
import category from '../pages/category/category'



export default[
  {
    path:'/home',
    component:home,
    meta: {
      showFooter: true,
      showHeader: true
    }
  },
  {
    path:'/profile',
    component:profile,
    meta: {
      showFooter: true,
    }
  },
  {
    path:'/things',
    component:things,
    meta: {
      showFooter: true,
    }
  },
  {
    path:'/shopcard',
    component:shopcard,
    meta: {
      showFooter: true,
    }
  },
  {
    path:'/category',
    component:category,
    meta: {
      showFooter: true,
    }
  },
  {
    path:'/',
    redirect: '/home'
  }
]
