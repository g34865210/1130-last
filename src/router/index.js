import vue from 'vue'
import VueRouter from 'vue-router'


import routes from './routes';


vue.use(VueRouter);

export default new VueRouter({
  routes
})
