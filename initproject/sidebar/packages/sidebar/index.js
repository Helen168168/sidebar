import sidebar from './sidebar'

const components = { //通过install来安装组件
    install(Vue) {
        Vue.component('sidebar', sidebar)
    }
}

if(typeof window !== 'undefined' && window.vue) {
    window.Vue.use(components);
}

export default components;