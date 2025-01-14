<template>
  <div :class="{ 'has-logo': showLogo }">
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
        :router="true"
      >
        <menu-item v-for="item in menuTree" :key="item.INNERNO" :item="item" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import variables from '@/styles/variables.scss'

// 使用 MenuItem 的 render 函数版本
const MenuItem = {
  props: ['item'],
  render(h) {
    if (this.item.children && this.item.children.length) {
      return h(
        'el-submenu',
        { props: { index: this.item.FUNCADDRESS || this.item.INNERNO } },
        [
          h('template', { slot: 'title' }, this.item.FUNCNAME),
          this.item.children.map(child =>
            h(MenuItem, { props: { item: child }, key: child.INNERNO })
          ),
        ]
      );
    } else {
      return h(
        'el-menu-item',
        { props: { index: this.item.FUNCADDRESS || this.item.INNERNO } },
        this.item.FUNCNAME
      );
    }
  },
};

export default {
  components: { Logo, 'menu-item': MenuItem },
  computed: {
    ...mapGetters(['permission_routes', 'sidebar', 'routes']),
    menuTree() {
      return this.$store.state.permission.menuTree;
    },
    activeMenu() {
      const { meta, path } = this.$route;
      return meta.activeMenu || path;
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    variables() {
      return variables;
    },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  mounted() {
    console.log('Menu Tree:', this.menuTree);
    console.log('Routes:', this.$store.state.permission.routes);
  },
};
</script>
