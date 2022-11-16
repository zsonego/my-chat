<template>
  <div class="tab-bar">
    <div class="avatar">
      <img
        src="https://img0.baidu.com/it/u=3365573645,2073973856&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
        alt=""
      />
    </div>
    <router-link to="/">
      <div class="talk item" @click="handleSelected">
        <i class="iconfont icon-talk"></i>
      </div>
    </router-link>
    <router-link to="/talk">
      <div class="set item" @click="handleSelected">
        <i class="iconfont icon-shezhi"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    handleSelected(e) {
      console.log(e.target.classList.add('active'));
    },
  },
};
</script>

<style lang="less" scoped>
@import '//at.alicdn.com/t/c/font_3774926_bjit9lv5m0j.css';
.tab-bar {
  height: 100%;
  width: 70px;
  background-color: #e3e0d0;
  border-top-left-radius: 10px;
  border-end-start-radius: 10px;

  a {
    color: #787569;
    text-decoration: none;
    &.router-link-exact-active {
      color: #12bd50;
    }
  }
  .avatar {
    padding-top: 30px;
    padding-bottom: 40px;
    text-align: center;
    img {
      height: 50px;
      width: 50px;
      border-radius: 5px;
      object-fit: cover;
    }
  }
  .item {
    text-align: center;
    margin: 30px 0;
    cursor: pointer;
    .iconfont {
      font-size: 30px;
      cursor: pointer;
    }
  }
}
</style>
