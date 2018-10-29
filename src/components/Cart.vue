<template>
<div class="columns">
     <h3>Cart LIST</h3>
     <ul>
          <li v-for="(cart, index) in cartList" v-bind:key="index">
               {{ cart.id }} - {{ cart.text }} 
          </li>
    </ul>
</div>

</template>
<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapGetters(["cartList"])
  },
  methods() {}
};
</script>
<style scoped lang="scss">
</style>
