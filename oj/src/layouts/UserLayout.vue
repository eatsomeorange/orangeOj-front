<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/琦良良.jpg" class="logo" />
          <h2>橘子 oj</h2>
        </a-space>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a href="https://www.bilibili.com/">bilibili</a>
      <a-layout-footer class="footer">编程导航 by-orange</a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
#userLayout {
  text-align: center;
  background: url("C:/Users/orange/Pictures/Saved Pictures/风景/黄泉.jpg")
    no-repeat center center / 100% 100%;
}

#userLayout .logo {
  width: 10vh;
  height: 10vh;
}

#userLayout .header {
  margin-top: 16px;
  margin-bottom: 16px;
}

#userLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  margin-bottom: 15px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  text-align: center;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>
