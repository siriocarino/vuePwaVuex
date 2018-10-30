<template>
  <div class="hello">
    <h1>{{ title }} {{ count }}</h1>
    <ul>
    <li v-for="(link, index) in links" v-bind:key="index">
      {{ link }}
    </li>
    </ul>
    <ul>
    <li v-for="(todo, index) in doneTodos" v-bind:key="index">
           {{ todo.id }} - {{ todo.text }} -   <button @click="btAddCart(todo)">Add to cart</button>
    </li>
    </ul>
    <p >There are currently links   </p>
    <button @click="add()">Change Score</button>
    <button @click="btAddLink('www.sirio.com')">Add Link</button>
    <button @click="btShowCart(true)">Show Cart</button>

  </div>
</template>

<script>
// mapGetters is a helper that simplifies creating a computed property that reflects the value returned by a given getter.
// Note that even method-style getters should be mapped to computed properties.
// mapActions is a helper that simplifies creating a method that would be equivalent as calling dispatch on an action.
// mapMutations is a helper that simplifies creating a method that would be equivalent as calling  commit on an mutation.
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  created() {},

  computed: {
    ...mapGetters(["doneTodos"]),
    ...mapState(["title", "links", "count"])
  },
  methods: {
    ...mapActions({
      add: "increment",
      btAddLink: "addLink", // map `this.add()` to `this.$store.dispatch('increment')`
      btAddCart: "addToCart", // map `this.add()` to `this.$store.dispatch('increment')`
      btShowCart: "showCart"

    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
