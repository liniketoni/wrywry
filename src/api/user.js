import request from './requsest'

// export function getUserList(data) {
export function getUserList() {
    return request({
        method: 'GET',
        url: '/user/Home',
        // params:{user_id:data.user_id},
        //拦截的路由
    })
}

export function SelectUser(data) {
    return request({
        method: 'POST',
        url: '/user/login',
        data
    })

}