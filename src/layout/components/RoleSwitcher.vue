<template>
  <el-select v-model="selectedRole" placeholder="切换角色" @change="onRoleChange">
    <el-option
      v-for="role in $store.state.user.roles"
      :key="role.roleName"
      :label="role.roleName"
      :value="role.roleNo"
    ></el-option>
  </el-select>
</template>

<script>
export default {
  data() {
    return {
      selectedRole: null
    }
  },
  mounted() {
    this.selectedRole = this.$store.state.user.roles[0].roleNo
  },
  methods: {
    onRoleChange(roleNo) {
      const roleList = this.$store.state.user.roles.filter(el => el.roleNo === roleNo)
      if (roleList && roleList.length > 0) {
        const role = roleList[0]
        this.$store.dispatch('permission/updateRole', {
          role: role.roleName,
          funcs: role.funcs
        })
      }
    }
  }
}
</script>
