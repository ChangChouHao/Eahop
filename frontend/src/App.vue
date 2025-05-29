<template>
  <div id="app">
    <h1>電商購物中心</h1>
    <router-link to="/member" style="position: absolute; top: 20px; right: 20px; color: #eee;"><font-awesome-icon icon="user" /></router-link>
    <ProductList />
    <OrderForm />
    <router-view/>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import OrderForm from './components/OrderForm.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    OrderForm,
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

h1, h2 {
  color: #eee;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.product-item {
  background-color: #333;
  color: #fff;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.order-form {
  background-color: #444;
  padding: 20px;
  border-radius: 5px;
  margin-top: 20px;
}

.order-form label {
  color: #fff;
  display: block;
  margin-bottom: 5px;
}

.order-form input {
  width: 100px;
  padding: 5px;
  margin-bottom: 10px;
  border: 1px solid #555;
  border-radius: 3px;
}

.order-form button {
  background-color: #555;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}
</style>
