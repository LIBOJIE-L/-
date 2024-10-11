<template>
  <div class="text-center text-[2vw] mt-[10vw]">欢迎使用代码仓库</div>
  <div class="text-center text-[1vw] mt-[0.5vw] text-[#7d8594]">
    代码仓库用于托管基于GIT或SVN管理的代码库。通过Review合并请求来审查代码变更。
  </div>
  <div class="text-center text-[1vw] mt-[0.5vw] text-[#7d8594]">
    版本发布可以用来标记、发布代码版本。
  </div>
  <div class="flex justify-around">
    <div class="pl-[17vw]">
      <img src="../../images/1.svg" alt="" />
      <div class="text-center text-[1.3vw] font-medium">创建代码仓库</div>
      <div class="text-[0.8vw] text-center text-[#7d8594]">
        浏览、编辑代码以及查看代码提交
      </div>
      <div class="text-[0.8vw] text-center text-[#7d8594]">记录</div>
    </div>
    <Icon
      icon="fluent:arrow-right-16-filled"
      class="w-[2vw] h-[2vw] text-gray-400 mt-[4vw]"
    />
    <div>
      <img src="../../images/2.svg" alt="" />
      <div class="text-center text-[1.3vw] font-medium">合并请求</div>
      <div class="text-[0.8vw] text-center text-[#7d8594]">
        发起合并请求并遂请协作者
      </div>
      <div class="text-[0.8vw] text-center text-[#7d8594]">Review变更内容</div>
    </div>
    <Icon
      icon="fluent:arrow-right-16-filled"
      class="w-[2vw] h-[2vw] text-gray-400 mt-[4vw]"
    />
    <div class="pr-[17vw]">
      <img src="../../images/3.svg" alt="" />
      <div class="text-center text-[1.3vw] font-medium">代码版本</div>
      <div class="text-[0.8vw] text-center text-[#7d8594]">
        发布、标记代码版本
      </div>
    </div>
  </div>
  <router-link to="/setup">
    <button
      class="w-[10vw] h-[3vw] bg-black text-center ml-[41vw] mt-[2vw] text-[#ffffff] rounded-[5px]"
    >
      创建代码仓库
    </button></router-link
  >
</template>
<script setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
</script>
