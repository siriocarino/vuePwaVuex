<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Cart></Cart>
    <ProductList></ProductList>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Cart from "@/components/Cart.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Cart,
    ProductList

  }
};
</script>
