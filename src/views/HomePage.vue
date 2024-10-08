<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="5vw" class="border-r-2 border-black"
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
        </div>
        <div class="text-center">
          <Icon
            icon="gravity-ui:cube"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
          制品
        </div>
        <div class="text-center">
          <Icon
            icon="ic:baseline-insights"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
          洞察
        </div>
        <div class="text-center">
          <Icon
            icon="akar-icons:book"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
          知识
        </div>
        <div class="text-center">
          <Icon
            icon="mdi:automatic"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
          自动化
        </div>
        <div class="mt-[1vw]">
          <Icon
            icon="icon-park-solid:people-plus"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
        </div>
        <div class="mt-[1vw]">
          <Icon
            icon="hugeicons:more-01"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
        </div>
        <div class="mt-[1vw]">
          <Icon
            icon="majesticons:bell-line"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
        </div>
        <div class="mt-[1vw]">
          <Icon
            icon="hugeicons:setup-01"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
        </div>
        <div class="mt-[1vw]">
          <Icon
            icon="ph:question-light"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          />
        </div>
      </el-aside>
      <el-container>
        <el-header
          class="flex justify-between h-[4.5vw] border-b-2 border-black leading-[4.5vw]"
          ><div class="text-[1.5vw] font-semibold leading-[4.5vw]">
            代码仓库
          </div>
          <router-link to="/login">登录</router-link></el-header
        >
        <el-main>
          <div>
            <router-link
              to="/basea"
              class="w-[6vw] h-[3vw] inline-block text-[1.3vw] focus:border-b-2 border-[#306fde] text-center"
              >最近访问</router-link
            ><router-link
              to="/baseb"
              class="w-[6vw] h-[3vw] inline-block text-[1.3vw] focus:border-b-2 border-[#306fde] text-center"
              >全部仓库</router-link
            ><router-link
              to="/basec"
              class="w-[6vw] h-[3vw] inline-block text-[1.3vw] focus:border-b-2 border-[#306fde] text-center"
              >开源仓库</router-link
            >
          </div>
          <div><router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>
