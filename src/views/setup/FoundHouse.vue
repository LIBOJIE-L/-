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
              <template #prepend
                ><Icon icon="devicon:git" class="mr-[7px]" />GIT 仓库</template
              >
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
          <div class="flex flex-col">
            <el-checkbox label="生成README文件" value="Value A" />
            <el-checkbox label="添加.gitignore文件" value="Value B" />
            <el-checkbox
              label="添加分支模型(仓库创建后将根据所选模型创建分支)"
              value="Value disabled"
              disabled
            />
          </div>
        </div>
        <div class="ml-[1vw]">
          <div class="text-[1vw] font-semibold mt-[1vw]">是否开源</div>
          <div class="w-[10vw]">
            <el-radio-group v-model="radio1" class="flex justify-items-start">
              <el-radio value="1" size="large"
                >私有仓库(仅对仓库成员可见，仓库成员可访问仓库。)</el-radio
              >
              <el-radio value="2" size="large">公开仓库</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="ml-[1vw]">
          <button
            class="w-[6vw] h-[2vw] bg-black text-center mt-[1vw] text-[#ffffff] rounded-[4px]"
          >
            完成创建
          </button>
          <button
            class="w-[4vw] h-[2vw] text-center mt-[1vw] rounded-[4px] border border-black ml-[1vw]"
          >
            取消
          </button>
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
const radio1 = ref("1");
</script>
