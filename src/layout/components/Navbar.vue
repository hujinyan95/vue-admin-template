<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <RoleSwitcher />
<!--      <el-dropdown class="avatar-container" trigger="click">-->
<!--        <div class="avatar-wrapper">-->
<!--          <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar"> &nbsp; &nbsp; &nbsp; &nbsp; -->
<!--          <span  style="cursor: pointer;position: relative;top: -14px;">{{ roleName }}</span> -->
<!--          <i class="el-icon-caret-bottom" />  -->
<!--        </div>-->
<!--        <el-dropdown-menu slot="dropdown" class="user-dropdown" >-->
<!--          <el-dropdown-item @click.native="changeRole(item)" v-for="(item,indx) in roles" :key="indx">-->
<!--            {{ item.roleName }}-->
<!--          </el-dropdown-item>-->
<!--          <el-dropdown-item divided @click.native="logout">-->
<!--            <span style="display:block;text-align: center;font-weight: 700;">退 出</span>-->
<!--          </el-dropdown-item>-->
<!--        </el-dropdown-menu>-->
<!--      </el-dropdown>-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import RoleSwitcher from './RoleSwitcher'
export default {
  components: {
    Breadcrumb,
    Hamburger,
    RoleSwitcher
  },
  data() {
    return {
      roleName:''
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'roles',
      'avatar'
    ])
  },
  mounted() {
  },
  methods: {
    changeRole(item){
      this.roleName = item.roleName
    },
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }

}
.navbar .right-menu .avatar-container .avatar-wrapper .el-icon-caret-bottom{
  top: 15px!important;
}
</style>
