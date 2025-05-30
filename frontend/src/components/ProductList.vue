<template>
  <div class="product-list">
    <h2>商品列表</h2>
    <div class="product-item" v-for="product in products" :key="product.productId">
      <img src="../assets/logo.png" alt="Product Image">
      <h3>{{ product.productName }}</h3>
      <p>價格：{{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  data() {
    return {
      products: [
        { productId: 'P001', productName: 'osii 舒壓按摩椅', price: 98000, quantity: 5 },
        { productId: 'P002', productName: '網友最愛起司蛋糕', price: 1200, quantity: 50 },
        { productId: 'P003', productName: '真愛密碼項鍊', price: 8500, quantity: 20 }
      ]
    }
  }
}
</script>

<style scoped>
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
  width: 200px;
}
</style>
