<template>
  <div class="common-layout">
    <el-container>
      <el-header
        class="flex justify-between h-[4.5vw] border-b-2 border-black leading-[4.5vw]"
        ><div class="text-[1.5vw] font-semibold leading-[4.5vw]">工作台</div>
        <router-link to="/login">登录</router-link></el-header
      >
      <el-main>
        <div class="flex justify-between"></div>
        <hr />
        <div><router-view></router-view></div>
      </el-main>
    </el-container>
  </div>
</template>
<script setup></script>
