<template>
 <button @click="toggle" :class="{checked:value}"> <span></span> </button>
  <div>{{ value }}</div>
</template>
<script lang="ts">
export default {
  props:{
    value:Boolean
  },
  // props和context 传值方式
  setup(props,context){
    const toggle = ()=>{
      // 事件：vue3的v-model改动，之前是input
      context.emit('update:value', !props.value)
    }
    return { toggle }
  }
}
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button{
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  cursor: pointer;
}
span{
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background:white;
  border-radius: $h2 / 2;
  transition: left 250ms;
}
button.checked{
  background: #1989fa;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
button:focus{
  outline: none;
}
</style>
