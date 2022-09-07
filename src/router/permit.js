//路由拦截
import Router from "./index"
import store_1 from "../store/state"
//路由死循环解决
Router.beforeEach((to, form,next) => {

    console.log("to", to.fullPath)
    // console.log("form",form)
    // console.log("next",next)
    // console.log(store_1.NOTLOGIN)
    console.log(store_1.NOTLOGIN)
    if (store_1.NOTLOGIN) {
        next();
    } else {
        if(to.name ==="Login"){
            next();
        }else{
            next({name:"Login"})
        }
    }
})