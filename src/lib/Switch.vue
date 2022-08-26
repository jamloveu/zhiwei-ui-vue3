<script setup lang="ts">
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
const onClick = ()=>{
  emits('update:modelValue',!props.modelValue)
}
</script>

<template>
  <div class="zw-switch" :class="props.modelValue?'zw-switch-on':''" @click="onClick">
    <span class="node"></span>
  </div>
</template>

<style lang="scss" scoped>
@import "style/var.scss";

.zw-switch {
  width: $switch-width;
  height: $switch-height;
  border: $switch-border-color;
  border-radius: $switch-border-radius;
  background-color: $switch-background-color;
  position: relative;

  .node {
    width: 18px;
    height: 18px;
    border: $switch-border-color;
    background-color: #fff;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 2px;
    transition: transform $switch-transition-duration cubic-bezier(0.3, 1.05, 0.4, 1.05);
  }

  &-on{
    background-color: #1989fa;
    box-shadow: 0 0 0 2px rgba(45,140,240,.2);

    .node{
      transform: translateX($switch-width - 18px - 4px);
    }
  }

}
</style>
