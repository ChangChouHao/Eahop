<template>
  <div class="member-module">
    <h2>會員模組</h2>
    <router-link to="/register">註冊</router-link> |
    <router-link to="/login">登入</router-link> |
    <router-link to="/profile">個人資料</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MemberModule'
}
</script>

<style scoped>
.member-module {
  background-color: #444;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  color: #fff;
}

.member-module a {
  color: #fff;
  text-decoration: none;
  margin: 0 10px;
}
</style>
