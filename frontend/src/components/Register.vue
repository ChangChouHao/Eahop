<template>
  <div class="register-form">
    <h2>註冊</h2>
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
      <div>
        <label>
          電子郵件：
          <input type="email" v-model="email">
        </label>
      </div>
      <button type="submit">註冊</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterMember',
  data() {
    return {
      username: '',
      password: '',
      email: ''
    };
  },
  methods: {
    handleSubmit() {
      alert('註冊成功！');
    }
  }
}
</script>

<style scoped>
.register-form {
  background-color: #444;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  color: #fff;
}

.register-form label {
  display: block;
  margin-bottom: 5px;
}

.register-form input {
  width: 200px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #555;
  border-radius: 3px;
}

.register-form button {
  background-color: #555;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
