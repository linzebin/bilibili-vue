import IndexNav from "@/views/indexNav.vue"
import Live from "@/views/live.vue"
import Recommend from "@/views/recommend.vue"
import Bangumi from "@/views/bangumi.vue"
import Space from "@/views/space.vue"

export default [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: IndexNav,
        name: '主页',
        children: [
            {
                path: '/live',
                component: Live,
                name: '直播'
            },
             {
                path: '/recommend',
                component: Recommend,
                name: '推荐'
            },
             {
                path: '/bangumi',
                component: Bangumi,
                name: '追番'
            },
        ]
    },
    {
        path: '/space',
        component: Space,
        name: '个人空间'
    }
]
