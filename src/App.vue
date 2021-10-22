<template>
  <div id="app">
    <Header />
    <div class="main-container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Header from "@/components/header/Header";

export default {
  name: "App",
  components: { Header },
};
</script>
