export function buildMenuTree(menuData) {
  const menuMap = {}
  menuData.forEach(item => menuMap[item.INNERNO] = { ...item, children: [] })
  const tree = []
  menuData.forEach(item => {
    if (item.PINNERNO === '0') {
      tree.push(menuMap[item.INNERNO])
    } else if (menuMap[item.PINNERNO]) {
      menuMap[item.PINNERNO].children.push(menuMap[item.INNERNO])
    }
  })
  return tree
}
