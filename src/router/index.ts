import IndexNav from "@/views/indexNav.vue"
import Space from "@/views/space.vue"

export default [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: IndexNav,
        name: '主页'
    },
    {
        path: '/space',
        component: Space,
        name: '个人空间'
    }
]
