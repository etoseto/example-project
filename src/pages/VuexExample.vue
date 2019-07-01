<template>
  <div>
    {{ doneTodosCount }}
    <ul>
      <li v-for="item of this.$store.getters.todos" :key="item.id">{{ item }}</li>
    </ul>
    <p>{{ this.$store.state.count }}</p>
    <button @click="addCount">Click</button>
  </div>
</template>

<script>
  export default {
    name: "VuexExample",
    data () {
      return {
      }
    },
    computed: {
      doneTodosCount () {
        return this.$store.getters.doneTodosCount
      }
    },
    methods: {
      addCount () {
        this.$store.dispatch('increment')
        console.log(this.$store.state.count)
      }
    }
  }
</script>

<style  scoped>

</style>