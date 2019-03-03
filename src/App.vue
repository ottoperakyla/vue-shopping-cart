<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ProductList :loading="loading" :products="products" v-on:add-to-cart="addToCart"/>
    <ShoppingCart :cart="cart"/>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";

export default {
  name: "app",
  data() {
    return {
      loading: true,
      products: [],
      cart: []
    };
  },
  created() {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(products => {
        this.products = products;
        this.loading = false;
      });
  },
  components: {
    ProductList,
    ShoppingCart
  },
  methods: {
    addToCart(product) {
      product.quantity--;
      this.cart.push(product);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
