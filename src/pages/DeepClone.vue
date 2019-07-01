<template>
  <div>
    <p ref="dd" class="pp">{{ newObj }}</p>
    <p>{{ obj }}</p>
  </div>
</template>

<script>
  export default {
    name: 'DeepClone',
    data () {
      return {
        obj: {
          a: {
            a: "hello"
          },
          b: 33
        },
        newObj: {}
      }
    },
    created () {
      console.log(this.$refs)
      console.log(document.getElementsByClassName('pp'))
    },
    mounted () {
      this.newObj = this.deepClone(this.obj)
      this.newObj.a.a = 'hello world'
    },
    computed: {

    },
    methods: {
      deepClone (obj) {
        if (typeof obj !== 'object') return
        let newObj = obj instanceof Array ? [] : {}
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            newObj[key] = typeof obj[key] === 'object' ? this.deepClone(obj[key]) : obj[key]
          }
        }
        return newObj
      }
    }
  }
</script>

<style  scoped>

</style>