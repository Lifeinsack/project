import Vue from 'vue'
import router from './router'

router.beforeEach((to, from, next) => {
    let token = sessionStorage.getItem('token')
    if(to.path=='/login' || token){
        next()
    }else{
        next({
            path:'/login'
        })
    }
})