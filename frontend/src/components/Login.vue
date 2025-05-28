<template>
  <div class="login-form">
    <h2>登入會員</h2>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>
          使用者名稱：
          <input type="text" v-model="username">
        </label>
      </div>
      <div>
        <label>
          密碼：
          <input type="password" v-model="password">
        </label>
      </div>
      <button type="submit">登入</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginMember',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    handleSubmit() {
      alert('登入成功！');
    }
  }
}
</script>

<style scoped>
.login-form {
  background-color: #444;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  color: #fff;
}

.login-form label {
  display: block;
  margin-bottom: 5px;
}

.login-form input {
  width: 200px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #555;
  border-radius: 3px;
}

.login-form button {
  background-color: #555;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
