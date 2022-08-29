<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
const count = ref(0)
const state = reactive({
  count:0,
  goods:{
    count:0
  },
  list:[1,2,3]
})

defineProps<{ msg: string }>()

const onAdd = ()=>{
  state.count++
  count.value++

  // 深层响应式，以下操作也可以检测到，vue2不行
  state.goods.count++
  state.list.push(7)

  nextTick(()=>{
    console.log('DOM 更新了')
  })
}


</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="onAdd">count is {{ count }}--{{state.count  }}</button>
  </div>
  <div>
    goods: {{ state.goods.count }}
  </div>
  <div v-for="(item,index) in state.list" :key="index">
    <span>{{ item }}</span>
  </div>

</template>

<style scoped>

</style>
