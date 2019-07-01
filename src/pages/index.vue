<template>
  <div class="wrap">
    <ul>
      <li v-for="(item, index) of urlArr" :key="index"><router-link :to="item.url">{{ item.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data () {
      return {
        urlArr: [
          {name: 'Vuex 的使用', url: '/VuexExample'},
          {name: 'Vue 异常处理', url: '/VueErr'},
          {name: 'DeepClone 深拷贝', url: '/deepClone'},
          {name: 'drag 拖动', url: '/vueDrag'}
        ]
      }
    }
  }
</script>

<style  scoped>

</style>