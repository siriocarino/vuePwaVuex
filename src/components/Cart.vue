<template>
<div class="columns" >
<p v-show="isVisible"><i>Please add some products to cart.</i></p>

     <h3>Cart LIST</h3>
     <ul>
          <li v-for="(product, index) in cartList" :key="product.id">
                {{ product.title }} - {{ product.price | currency }} x {{ product.quantity }}
          </li>
    </ul>
    <p>Total: {{ total | currency }}</p>

    <p><button @click="checkout(cart)">Checkout</button></p>

</div>

</template>
<script>
import { mapState, mapGetters} from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["cartList"]),
    ...mapGetters({
      isVisible: 'showCart', // map `this.add()` to `this.$store.commit('increment')`
      total: 'cartTotalPrice'

    })
  }
};
</script>
<style scoped lang="scss">
</style>
