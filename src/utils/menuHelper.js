export function buildMenuTree(menuData) {
  // 将 menuData 转为 Map，便于快速查找
  const menuMap = new Map(menuData.map(item => [item.INNERNO, 
    { 
      ...item,
      path:item.FUNCADDRESS||'',
      redirect:item.FUNCADDRESS||'',
      meta:{
        title:item.FUNCNAME,
        innerno:item.INNERNO,
      },
      children: []
   }
  ]))
  const tree = []
  menuData.forEach(item => {
    if (item.PINNERNO === '0') {
      // 如果是根节点，加入树
      tree.push(menuMap.get(item.INNERNO))
    } else {
      // 如果不是根节点，找到父节点并加入其 children
      const parent = menuMap.get(item.PINNERNO)
      if (parent) {
        parent.children.push(menuMap.get(item.INNERNO))
      }
    }
  })

  return tree
}
