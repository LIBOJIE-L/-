<template>
  <div class="h-[55vw] w-[100vw] flex">
    <div>
      <img
        src="../../images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
        class="w-[40vw] h-[55vw]"
        alt=""
      />
    </div>
    <div>
      <h1 class="text-[2vw] text-[black] font-bold mt-[13.5vw] ml-[18vw]">
        登录，即刻创造你的应用
      </h1>
      <el-input
        v-model="nameinput"
        style="width: 30vw; height: 4vw"
        class="mt-[5.5vw] ml-[14.5vw]"
        placeholder="账号"
      /><br />
      <el-input
        v-model="passinput"
        style="width: 30vw; height: 4vw"
        class="ml-[14.5vw] mt-[1vw]"
        type="password"
        placeholder="密码"
        show-password
      />
      <div class="text-[1.2vw] text-[#c9cad3] ml-[14.5vw] mt-[1.5vw]">
        <el-checkbox value="Online activities" name="type">
          我已阅读并同意<a class="text-[#4d72eb]">服务协议</a>和<a
            class="text-[#4d72eb]"
            >隐私政策</a
          >
        </el-checkbox>
      </div>
      <el-button
        type="primary"
        style="width: 30vw; height: 4vw"
        class="ml-[14.5vw] mt-[3vw]"
        >登录</el-button
      >
      <div class="text-[1.2vw] text-[#c9cad3] mt-[1.3vw] ml-[25vw]">
        还未注册？<a class="text-[#4d72eb]">立即注册</a>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const nameinput = ref("");
const passinput = ref("");
</script>
