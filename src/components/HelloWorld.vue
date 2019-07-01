<template>
  <div class="hello" >
    <span class="hello" ref="hello"></span>
    <p class="count">{{ this.$store.state.count }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      animationArr: ['|', '\\', '-','/', '\\', '-', '/'],
      timeId: 0
    }
  },
  created () {
  },
  mounted () {
    this.loadAnimation()
    // clearInterval(this.timeId)
  },
  methods: {
    loadAnimation () {
      let i = 0
      this.timeId = setInterval(() => {
        this.$refs['hello'].innerHTML = this.animationArr[i]
        i++
        if (i >= this.animationArr.length){
          i = 0
        }
      }, 200)
    }
  },
  destroyed () {
    clearInterval(this.timeId)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
