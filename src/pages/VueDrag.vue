<template>
  <div>
    <draggable v-model="myArr" @start="drag=true" @end="drag=false" class="box">
      <transition-group>
        <div class="item" v-for="item in myArr" :key="item.id">
          {{item.name}}
        </div>
      </transition-group>
    </draggable>
    {{myArr}}
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  export default {
    name: 'VueDrag',
    data() {
      return {
        myArr: [
          {id: 1, name: 'jack'},
          {id: 2, name: 'mack'},
          {id: 3, name: 'kiven'},
          {id: 4, name: 'lee'},
          {id: 5, name: 'piter'}
        ]
      }
    },
    components: {
      draggable,
    },
    updated() {
      for(let i of this.myArr){
        console.log(i.name)
      }
    },
    methods: {

    }
  }
</script>

<style  scoped>
.box {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item {
  width: 200px;
  height: 80px;
  text-align: center;
  line-height: 80px;
  background: tomato;
  margin: 10px;
}
</style>