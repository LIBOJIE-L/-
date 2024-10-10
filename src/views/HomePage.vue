<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="5vw" class="border-r-2 border-black"
        ><NavPage />
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
          <div class="flex justify-between">
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
            <div>
              <button
                class="w-[8vw] h-[2vw] bg-black text-center text-[#ffffff] rounded-[5px]"
              >
                创建代码仓库
              </button>
            </div>
          </div>
          <hr />
          <div><router-view></router-view></div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import NavPage from "./Nav/NavPage.vue";
</script>
