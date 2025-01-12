import { constantRoutes, asyncRoutes } from '@/router'
import store from '@/store'
import { buildMenuTree } from '@/utils/menuHelper'

function filterRoutesByFuncs(routes, funcs) {
  const res = []
  routes.forEach(route => {
    const tmp = { ...route }
    if (funcs.includes(tmp.meta?.innerno)) {
      if (tmp.children) {
        tmp.children = filterRoutesByFuncs(tmp.children, funcs)
      }
      res.push(tmp)
    }
  })
  return res
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
    console.log('updateRole', menuTree)
    const accessedRoutes = filterRoutesByFuncs(asyncRoutes, funcs)
    return accessedRoutes
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
