import Router from 'vue-router'

let routes = [{
    path: '/',
    name: 'sidebar',
    component: () => import('@/components/sidebar.vue'),
    meta: {
        title: '首页'
    },
    children: []
},
{
    path: '/sidebar1',
    name: 'sidebar1',
    component: () => import('@/components/sidebar.vue'),
    meta: {
        title: '首页1'
    },
    children: [
        {
            path: 'sidebar1-1',
            name: 'sidebar1-1',
            component: () => import('@/components/sidebar.vue'),
            meta: {
                title: '首页1-1'
            },
        }
    ]
},
{
    path: '/sidebar2',
    name: 'sidebar2',
    component: () => import('@/components/sidebar.vue'),
    meta: {
        title: '首页2'
    },
    children: []
},
{
    path: '/sidebar3',
    name: 'sidebar3',
    component: () => import('@/components/sidebar.vue'),
    meta: {
        title: '首页3'
    },
    children: []
}]

export default new Router({
    mode: 'hash',
    routes: routes
})
