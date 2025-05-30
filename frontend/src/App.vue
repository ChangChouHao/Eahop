<template>
  <div id="app">
    <h1>電商購物中心</h1>
    <div class="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/orders">訂單表單</router-link> |
      <router-link to="/member">會員</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style scoped>
#app {
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  background-color: #333;
  margin-top: 0;
  padding: 20px;
}

</style>
