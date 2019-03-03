<template>
  <div>
    <h3>Products</h3>
    <p v-if="loading">Loading...</p>
    <ul>
      <li :key="product.id" v-for="product in products">
        {{product.name}}
        {{product.price}} €
        <button
          v-bind:disabled="product.quantity === 0"
          @click="$emit('add-to-cart', product)"
        >Add to cart</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    products: Array,
    loading: Boolean
  }
};
</script>
