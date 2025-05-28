<template>
  <div class="order-form">
    <h2>新增訂單</h2>
    <form @submit.prevent="handleSubmit">
      <div v-for="product in products" :key="product.productId">
        <label>
          {{ product.productName }} (庫存: {{ product.quantity }})：
          <input type="number" v-model.number="quantities[product.productId]" :max="product.quantity" min="0">
        </label>
      </div>
      <button type="submit">建立訂單</button>
    </form>
    <h3>訂單總金額：{{ totalPrice }}</h3>
  </div>
</template>

<script>
export default {
  name: 'OrderForm',
  data() {
    return {
      products: [
        { productId: 'P001', productName: 'osii 舒壓按摩椅', price: 98000, quantity: 5 },
        { productId: 'P002', productName: '網友最愛起司蛋糕', price: 1200, quantity: 50 },
        { productId: 'P003', productName: '真愛密碼項鍊', price: 8500, quantity: 20 }
      ],
      quantities: {},
    };
  },
  computed: {
    totalPrice() {
      let total = 0;
      for (const product of this.products) {
        const quantity = this.quantities[product.productId] || 0;
        total += product.price * quantity;
      }
      return total;
    },
  },
  methods: {
    handleSubmit() {
      alert('訂單已建立！總金額：' + this.totalPrice);
    },
  },
};
</script>

<style scoped>
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
