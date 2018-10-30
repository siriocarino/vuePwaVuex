<template>
<div class="columns" >
<p v-show="isVisible"><i>Please add some products to cart.</i></p>

     <h3>Cart LIST</h3>
     <ul>
          <li v-for="(cart, index) in cartList" v-bind:key="index">
               {{ cart.id }} - {{ cart.text }} 
          </li>
    </ul>
    <p><button  @click="checkout(cart)">Checkout</button></p>

</div>

</template>
<script>
import { mapState, mapGetters} from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["cartList"]),
    ...mapGetters({
      isVisible: 'showCart' // map `this.add()` to `this.$store.commit('increment')`
    })
  }
};
</script>
<style scoped lang="scss">
</style>
