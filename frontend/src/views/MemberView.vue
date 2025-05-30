<template>
  <div>
    <h1>會員專區</h1>
    <div class="login-form">
      <h2>登入</h2>
      <input type="text" placeholder="帳號">
      <input type="password" placeholder="密碼">
      <button>登入</button>
    </div>
    <div class="register-form">
      <h2>註冊</h2>
      <input type="text" placeholder="帳號">
      <input type="password" placeholder="密碼">
      <input type="password" placeholder="確認密碼">
      <button>註冊</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberView'
}
</script>

<style scoped>
.login-form,
.register-form {
  width: 300px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
