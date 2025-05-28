<template>
  <div class="profile-form">
    <h2>個人資料</h2>
    <div>
      <label>
        使用者名稱：
        <input type="text" v-model="username">
      </label>
    </div>
    <div>
      <label>
        電子郵件：
        <input type="email" v-model="email">
      </label>
    </div>
    <button @click="handleSubmit">儲存</button>
  </div>
</template>

<script>
export default {
  name: 'MemberProfile',
  data() {
    return {
      username: 'testuser',
      email: 'test@example.com'
    };
  },
  methods: {
    handleSubmit() {
      alert('個人資料已儲存！');
    }
  }
}
</script>

<style scoped>
.profile-form {
  background-color: #444;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
  color: #fff;
}

.profile-form label {
  display: block;
  margin-bottom: 5px;
}

.profile-form input {
  width: 200px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #555;
  border-radius: 3px;
}

.profile-form button {
  background-color: #555;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
