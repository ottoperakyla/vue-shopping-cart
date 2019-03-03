<template>
  <div>
    <h3>Shopping Cart</h3>
    <ul>
      <li v-for="(product, idx) in cart" :key="idx">{{product.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ShoppingCart",
  props: {
    cart: Array
  }
};
</script>
