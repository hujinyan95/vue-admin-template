import { constantRoutes, asyncRoutes } from '@/router'
import store from '@/store'
import { buildMenuTree } from '@/utils/menuHelper'
import Layout from '@/layout';

function filterRoutesByFuncs(routes, funcs) {
  const res = [];

  routes.forEach(route => {
    // 克隆当前路由，避免修改原始数据
    const tmp = { ...route };

    // 检查当前路由或其子路由是否符合权限
    const isAllowed =
      funcs.includes(tmp.meta?.innerno) ||
      (tmp.children && tmp.children.some(child => funcs.includes(child.meta?.innerno)));

    if (isAllowed) {
      if (tmp.children) {
        // 递归过滤子路由
        tmp.children = filterRoutesByFuncs(tmp.children, funcs);
      }

      // 如果当前路由是一级路由且没有组件，自动设置为 Layout
      if (!tmp.component && (!tmp.parent || tmp.children?.length > 0)) {
        tmp.component = Layout;
      }

      res.push(tmp);
    }
  });

  return res;
}

const state = {
  routes: [],
  addRoutes: [],
  roleFuncs: [],
  currentRole: null,
  menuTree: []
}

const mutations = {
  SET_ROUTES(state, routes) {
    state.addRoutes = routes
    state.routes = constantRoutes.concat(routes)
  },
  SET_ROLE(state, { role, funcs }) {
    state.currentRole = role
    state.roleFuncs = funcs
  },
  SET_MENU_TREE(state, tree) {
    state.menuTree = tree
  }
}

const actions = {
  async updateRole({ commit, dispatch }, { role, funcs }) {
    const menuList = store.state.user.menuList // 命名空间访问
    commit('SET_ROLE', { role, funcs })
    const menuTree = buildMenuTree(menuList.filter(item => funcs.includes(item.INNERNO)))
    commit('SET_MENU_TREE', menuTree)
    console.log('menuTree', menuTree)
    const accessedRoutes = filterRoutesByFuncs(asyncRoutes, funcs)
    console.log('accessedRoutes', menuTree)
    commit('SET_ROUTES', accessedRoutes)
    return accessedRoutes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
