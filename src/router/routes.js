import home from '../pages/home/home'
import profile from '../pages/profile/profile'
import things from '../pages/things/things'
import shopcard from '../pages/shopcard/shopcard'
import category from '../pages/category/category'

// things
import find from '../pages/things/find/find'
import choice from '../pages/things/choice/choice'



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
    },
    children:[
      {
        path: '/things/find',
        component:find,
        meta: {
          showFooter: true,
        },
      },
      {
        path: '/things/choice',
        component:choice,
        meta: {
          showFooter: true,
        },
      },
      {
        path: '/things',
        redirect: '/things/find'
      }
    ]
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
