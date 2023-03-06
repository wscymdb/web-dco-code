<template>
  <div class="main">
    <el-container>
      <el-aside :width="mainStore.isCollapse ? '60px' : '210px'">
        <main-menu></main-menu>
      </el-aside>
      <el-container>
        <el-header>
          <main-header></main-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import MainMenu from '@/components/main-menu/main-menu.vue'
import mainHeader from '@/components/main-header/main-header.vue'
import userMainStore from '@/store/main/main'

const mainStore = userMainStore()

mainStore.fetchDepartmentList()
mainStore.fetchRoleList()
</script>

<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  background-color: #f1f2f7;
  .el-container {
    width: 100%;
    height: 100%;

    .el-header {
      background-color: #fff;
    }

    .el-aside {
      transition: width 0.3s linear;
    }
    ::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
