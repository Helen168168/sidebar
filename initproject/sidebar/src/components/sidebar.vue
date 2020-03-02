<template>
  <div class='container'>
    <div style='display: inline-block; vertical-align: top; center; width: 25%'>
      <el-menu default-active="1"
        :router='true'
        :unique-opened="true"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <template v-for='item in routers'>
          <el-menu-item  @click='selectMenu(item)' :index="item.path" v-if='item.children.length === 0' :key='item.meta.title'>{{ item.meta.title }}</el-menu-item>
          <el-submenu :index="item.path" v-else-if='item.children.length > 0' :key='item.meta.title'>
            <template slot="title">{{ item.meta.title }}</template>
            <el-menu-item-group>
              <el-menu-item @click='selectMenu(child)' :index="child.path" v-for='child in item.children' :key='child.meta.title'>{{ child.meta.title }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
    </el-menu>
    </div>
    <div style='display: inline-block; vertical-align: top; width: 72%'>
    <el-tabs v-model="active" type="card" @tab-click="clickTab"  @tab-remove="removeTab">
      <el-tab-pane :key="item.meta.title"
        v-for="(item, index) in tabsLabel"
        :label="item.meta.title"
        :closable='index !== 0'
        :name="item.meta.title">
          <router-view />
      </el-tab-pane>
    </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      routers: [],
      active: '',
      tabsLabel: [
        {  
          path: '/',
          name: 'sidebar',
          component: () => import('@/components/sidebar.vue'),
          meta: {
            title: '首页'
          },
          children: []
        }
      ]
    }
  },
  created() {
    this.routers = this.$router.options.routes;
    this.active = this.tabsLabel[0].meta.title;
  },
  methods: {
    selectMenu(item) {
      let isRepeat = this.tabsLabel.some(ele => {
        return item.meta.title === ele.meta.title;
      })
      if(!isRepeat) {
        this.tabsLabel.push(item);
      }
      this.active = item.meta.title;
    },

    removeTab(tag) {
      this.tabsLabel.splice(this.tabsLabel.indexOf(tag), 1);
    },

    clickTab(tag) {
      
    }
  }
}
</script>


<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }
</style>
