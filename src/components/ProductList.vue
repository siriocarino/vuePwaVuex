<template>
    <div class="products">
      <h3>Product List</h3>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
 
    computed: {
    ...mapState({
      products: state => state.products.all
    })
  },
  methods: mapActions("cart", ["addProductToCart"]),
  created() {
   this.$store.dispatch("getAllProduts");
  }
};
</script>