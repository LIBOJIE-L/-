<template>
  <div class="common-layout">
    <el-container>
      <el-header
        class="flex justify-between h-[4.5vw] border-b-2 border-black leading-[4.5vw]"
        ><div class="text-[1.5vw] font-semibold leading-[4.5vw]">代码仓库</div>
        <router-link to="/login">登录</router-link></el-header
      >
      <el-main>
        <div class="flex">
          <Icon icon="emojione:left-arrow" class="text-[2vw] ml-[2vw]" />
          <div class="text-[1.3vw] font-medium ml-[1vw]">创建仓库</div>
        </div>
        <div class="ml-[1vw]">
          <div class="text-[1vw] font-semibold mt-[1vw]">
            所属项目<span class="text-[red]">*</span>
          </div>
          <el-input
            v-model="input"
            style="width: 22vw"
            placeholder="所属项目"
            class="mt-[0.5vw]"
          />
        </div>
        <div class="ml-[1vw]">
          <div class="flex">
            <div class="text-[1vw] font-semibold mt-[1vw]">
              仓库类型<span class="text-[red]">*</span>
            </div>
            <div class="text-[1vw] font-semibold mt-[1vw] ml-[2vw]">
              仓库名称<span class="text-[red]">*</span>
            </div>
          </div>
          <div class="mt-[0.5vw]">
            <el-input
              v-model="input1"
              style="max-width: 40vw"
              placeholder="仓库名称只支持字母、数字、下划线(_)、中划线(-)和(.)的组合"
            >
              <template #prepend>GIT 仓库</template>
            </el-input>
          </div>
        </div>
        <div class="ml-[1vw]">
          <div class="text-[1vw] font-semibold mt-[1vw]">仓库描述</div>
          <el-input
            v-model="textarea"
            style="width: 50vw"
            placeholder="请输入仓库描述"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            class="mt-[0.5vw]"
          />
        </div>
        <div class="ml-[1vw]">
          <div class="text-[1vw] font-semibold mt-[1vw]">初始化仓库</div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { Icon } from "@iconify/vue/dist/iconify.js";
import { ref } from "vue";
const input = ref("");
const input1 = ref("");
const textarea = ref("");
</script>
