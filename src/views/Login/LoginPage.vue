<template>
  <div class="h-[55vw] w-[100vw] flex">
    <div>
      <el-carousel class="w-[40vw] h-[100%]">
        <el-carousel-item v-for="item in data" :key="item">
          <img :src="item" class="w-[100%] h-[100%]" alt="" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <h1 class="text-[2vw] text-[black] font-bold mt-[13.5vw] ml-[18vw]">
        登录，即刻创造你的应用
      </h1>
      <el-input
        v-model="userLoginInfo.username"
        style="width: 30vw; height: 4vw"
        class="mt-[5.5vw] ml-[14.5vw]"
        placeholder="请输入邮箱"
      /><br />
      <el-input
        v-model="userLoginInfo.password"
        style="width: 30vw; height: 4vw"
        class="ml-[14.5vw] mt-[1vw]"
        type="password"
        placeholder="请输入密码"
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
        @click="loginHandle"
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
import { getAccessToken } from "../../api/index";
import to from "await-to-js";
import { ElNotification } from "element-plus";
import { useRouter } from "vue-router";

const userLoginInfo = ref({
  username: "1355563488@qq.com",
  password: "shengsi5151315",
});
const router = useRouter();
const loginHandle = async () => {
  const loginData = {
    grant_type: "password",
    username: userLoginInfo.value.username,
    password: userLoginInfo.value.password,
    client_id: import.meta.env.VITE_CLIENT_ID,
    client_secret: import.meta.env.VITE_CLIENT_SECRET,
    scope: import.meta.env.VITE_CLIENT_SCOPE,
  };
  const [err, res] = await to(getAccessToken(loginData));
  console.log(err, res);
  if (!err) {
    ElNotification({
      message: "恭喜你，登录成功",
      type: "success",
    });
    router.replace("/home");
  }
};
const data = ref([
  "../../src/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png",
  "../../src/images/app9KTBmXHMK2mtI9RHyzPDs-h0NXne1.png",
  "../../src/images/appzx4bpYR9rpFdZULrF9EFycs2l-416.png",
]);
</script>
<style scoped>
.el-carousel__item {
  height: 55vw;
}
</style>
