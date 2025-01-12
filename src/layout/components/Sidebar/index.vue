<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
<!--        <sidebar-item v-for="route in menuTree" :key="route.path" :item="route" :base-path="route.path" />-->
<!--      </el-menu>-->
<!--       <el-menu :default-active="activeMenu" class="menu" :router="true">-->
        <template v-for="item in menuTree">
          <el-submenu v-if="item.children && item.children.length" :key="item.INNERNO" :index="item.INNERNO">
            <template slot="title">{{ item.FUNCNAME }}</template>
            <el-menu-item
              v-for="child in item.children"
              :key="child.INNERNO"
              :index="child.FUNCADDRESS"
            >
              {{ child.FUNCNAME }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :key="item.INNERNO" :index="item.FUNCADDRESS">
            {{ item.FUNCNAME }}
          </el-menu-item>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    menuTree() {
      return this.$store.state.permission.menuTree
    },
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
