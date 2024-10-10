<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="5vw" class="border-r-2 border-black"
        ><div class="text-center">
          <router-link to="/work">
            <Icon
              icon="icon-park-outline:workbench"
              style="color: black"
              class="text-[2vw] ml-[1.5vw] mt-[1vw]"
            />工作台</router-link
          >
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
          <router-link to="/home">
            <Icon
              icon="ph:code-fill"
              style="color: black"
              class="text-[2vw] ml-[1.5vw] mt-[1vw]"
            />代码
          </router-link>
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
        <div class="mt-[1vw]" @click="drawer = true">
          <Icon
            icon="radix-icons:avatar"
            style="color: black"
            class="text-[2vw] ml-[1.5vw] mt-[1vw]"
          /></div
      ></el-aside>
      <el-main style="padding: 0"><router-view></router-view></el-main>
    </el-container>
  </div>

  <el-drawer
    v-model="drawer"
    title="I am the title"
    :with-header="false"
    direction="ltr"
    size="30%"
    modal="false"
  >
    <div>个人账户设置</div>
    <div>服务订购</div>
    <div>邀请成员</div>
    <div>切换语言</div>
    <div>工单中心</div>
    <div>更新日志</div>
    <div>退出</div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref } from "vue";
const drawer = ref(false);
</script>
