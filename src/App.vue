<template>
  <div id="app">
    <TabBar></TabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from './components/TabBar';
export default {
  components: {
    TabBar,
  },
};
</script>

<style lang="less">
body {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  height: 500px;
  width: 800px;
  border-radius: 10px;
  display: flex;
}
</style>
