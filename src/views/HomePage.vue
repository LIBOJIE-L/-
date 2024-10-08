<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="5vw" class="border-r-2 border-black h-[48vw]"
        ><div class="text-center">
          <Icon
            icon="icon-park-outline:workbench"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />工作台
        </div>
        <div class="text-center">
          <Icon
            icon="tdesign:folder-1"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />项目
        </div>
        <div class="text-center">
          <Icon
            icon="ph:open-ai-logo-fill"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />AI
        </div>
        <div class="text-center">
          <Icon
            icon="ph:file-text-duotone"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />事项
        </div>
        <div class="text-center">
          <Icon
            icon="ph:code-fill"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />代码
        </div></el-aside
      >
      <el-container>
        <el-header
          class="flex justify-between h-[4.5vw] border-b-2 border-black leading-[4.5vw]"
          ><div class="text-[1.5vw] font-semibold leading-[4.5vw]">
            代码仓库
          </div>
          <router-link to="/login">登录</router-link></el-header
        >
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>
